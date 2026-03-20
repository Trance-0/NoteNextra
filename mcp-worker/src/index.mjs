import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from '@modelcontextprotocol/sdk/types.js'

import { notesData } from '../generated/notes-data.mjs'

const MAX_SEARCH_RESULTS = 10
const SNIPPET_RADIUS = 220
const transports = new Map()

function normalizeNoteId(noteId = '') {
  const normalized = String(noteId).trim().replaceAll('\\', '/').replace(/^\/+|\/+$/g, '')
  if (!normalized || normalized.includes('..')) {
    return null
  }

  return normalized
}

function resolveNote(noteId) {
  const normalized = normalizeNoteId(noteId)
  if (!normalized) {
    return null
  }

  return notesData.find((note) =>
    note.slug === normalized ||
    note.relativePath === normalized ||
    note.relativePath.replace(/\.(md|mdx)$/i, '') === normalized
  ) ?? null
}

function buildSnippet(content, index, query) {
  const start = Math.max(0, index - SNIPPET_RADIUS)
  const end = Math.min(content.length, index + query.length + SNIPPET_RADIUS)
  return content
    .slice(start, end)
    .replace(/\s+/g, ' ')
    .trim()
}

function textResponse(text) {
  return {
    content: [{ type: 'text', text }]
  }
}

function createServer() {
  const server = new Server(
    {
      name: 'notenextra-notes-worker',
      version: '1.0.0'
    },
    {
      capabilities: {
        tools: {}
      }
    }
  )

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: 'list_notes',
        description: 'List available notes from the generated notes knowledge base.',
        inputSchema: {
          type: 'object',
          properties: {
            course: {
              type: 'string',
              description: 'Optional course or directory prefix, for example CSE442T or Math4201.'
            }
          }
        }
      },
      {
        name: 'read_note',
        description: 'Read a note by slug or relative path, for example CSE442T/CSE442T_L1.',
        inputSchema: {
          type: 'object',
          properties: {
            noteId: {
              type: 'string',
              description: 'Note slug or relative path inside content/.'
            }
          },
          required: ['noteId']
        }
      },
      {
        name: 'search_notes',
        description: 'Search the notes knowledge base using a simple text match over all markdown content.',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search term or phrase.'
            },
            limit: {
              type: 'number',
              description: `Maximum results to return, capped at ${MAX_SEARCH_RESULTS}.`
            }
          },
          required: ['query']
        }
      }
    ]
  }))

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args = {} } = request.params

    if (name === 'list_notes') {
      const course = typeof args.course === 'string'
        ? args.course.trim().toLowerCase()
        : ''
      const filtered = course
        ? notesData.filter((note) => note.relativePath.toLowerCase().startsWith(`${course}/`))
        : notesData

      return textResponse(filtered.map((note) => note.slug).join('\n') || 'No notes found.')
    }

    if (name === 'read_note') {
      const note = resolveNote(args.noteId)
      if (!note) {
        return textResponse('Note not found.')
      }

      return textResponse(`# ${note.slug}\n\n${note.content}`)
    }

    if (name === 'search_notes') {
      const query = typeof args.query === 'string' ? args.query.trim() : ''
      if (!query) {
        return textResponse('Query must be a non-empty string.')
      }

      const limit = Math.max(1, Math.min(Number(args.limit) || 5, MAX_SEARCH_RESULTS))
      const queryLower = query.toLowerCase()
      const matches = []

      for (const note of notesData) {
        const haystack = `${note.slug}\n${note.content}`
        const index = haystack.toLowerCase().indexOf(queryLower)
        if (index === -1) {
          continue
        }

        matches.push({
          note,
          index,
          snippet: buildSnippet(haystack, index, query)
        })
      }

      matches.sort((a, b) => a.index - b.index || a.note.slug.localeCompare(b.note.slug))

      return textResponse(
        matches
          .slice(0, limit)
          .map(({ note, snippet }) => `- ${note.slug}\n${snippet}`)
          .join('\n\n') || 'No matches found.'
      )
    }

    throw new Error(`Unknown tool: ${name}`)
  })

  return server
}

async function handleMcpRequest(request) {
  const sessionId = request.headers.get('mcp-session-id')
  let transport = sessionId ? transports.get(sessionId) : undefined

  if (!transport && request.method === 'POST') {
    transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
      enableJsonResponse: true,
      onsessioninitialized: (newSessionId) => {
        transports.set(newSessionId, transport)
      },
      onsessionclosed: (closedSessionId) => {
        transports.delete(closedSessionId)
      }
    })

    transport.onclose = () => {
      if (transport.sessionId) {
        transports.delete(transport.sessionId)
      }
    }

    const server = createServer()
    await server.connect(transport)
  }

  if (!transport) {
    return new Response('Invalid or missing MCP session.', { status: 400 })
  }

  return transport.handleRequest(request)
}

export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === '/health') {
      return Response.json({
        status: 'ok',
        notes: notesData.length
      })
    }

    if (url.pathname === '/mcp') {
      return handleMcpRequest(request)
    }

    return new Response('Not found.', { status: 404 })
  }
}
