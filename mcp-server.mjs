import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from '@modelcontextprotocol/sdk/types.js'

const CONTENT_ROOT = path.join(process.cwd(), 'content')
const NOTE_EXTENSIONS = new Set(['.md', '.mdx'])
const MAX_SEARCH_RESULTS = 10
const SNIPPET_RADIUS = 220

async function walkNotes(dir = CONTENT_ROOT) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const notes = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      return walkNotes(fullPath)
    }

    if (!entry.isFile() || !NOTE_EXTENSIONS.has(path.extname(entry.name))) {
      return []
    }

    const relativePath = path.relative(CONTENT_ROOT, fullPath).replaceAll('\\', '/')
    const slug = relativePath.replace(/\.(md|mdx)$/i, '')
    return [{
      fullPath,
      relativePath,
      slug,
      title: path.basename(slug)
    }]
  }))

  return notes.flat().sort((a, b) => a.relativePath.localeCompare(b.relativePath))
}

function normalizeNoteId(noteId = '') {
  const normalized = String(noteId).trim().replaceAll('\\', '/').replace(/^\/+|\/+$/g, '')
  if (!normalized || normalized.includes('..')) {
    return null
  }

  return normalized
}

async function resolveNote(noteId) {
  const normalized = normalizeNoteId(noteId)
  if (!normalized) {
    return null
  }

  const notes = await walkNotes()
  return notes.find((note) =>
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

const server = new Server(
  {
    name: 'notenextra-notes',
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
      description: 'List available notes from the Next.js content directory.',
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
    const notes = await walkNotes()
    const course = typeof args.course === 'string'
      ? args.course.trim().toLowerCase()
      : ''
    const filtered = course
      ? notes.filter((note) => note.relativePath.toLowerCase().startsWith(`${course}/`))
      : notes

    return textResponse(filtered.map((note) => note.slug).join('\n') || 'No notes found.')
  }

  if (name === 'read_note') {
    const note = await resolveNote(args.noteId)
    if (!note) {
      return textResponse('Note not found.')
    }

    const content = await fs.readFile(note.fullPath, 'utf8')
    return textResponse(`# ${note.slug}\n\n${content}`)
  }

  if (name === 'search_notes') {
    const query = typeof args.query === 'string' ? args.query.trim() : ''
    if (!query) {
      return textResponse('Query must be a non-empty string.')
    }

    const limit = Math.max(1, Math.min(Number(args.limit) || 5, MAX_SEARCH_RESULTS))
    const queryLower = query.toLowerCase()
    const notes = await walkNotes()
    const matches = []

    for (const note of notes) {
      const content = await fs.readFile(note.fullPath, 'utf8')
      const haystack = `${note.slug}\n${content}`
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

const transport = new StdioServerTransport()
await server.connect(transport)
