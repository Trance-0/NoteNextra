import assert from 'node:assert/strict'
import path from 'node:path'
import process from 'node:process'

import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

const transport = new StdioClientTransport({
  command: process.execPath,
  args: [path.join(process.cwd(), 'mcp-server.mjs')],
  cwd: process.cwd(),
  stderr: 'pipe'
})

let stderrOutput = ''
transport.stderr?.setEncoding('utf8')
transport.stderr?.on('data', (chunk) => {
  stderrOutput += chunk
})

const client = new Client({
  name: 'notenextra-mcp-test',
  version: '1.0.0'
})

async function main() {
  await client.connect(transport)

  const toolListResponse = await client.listTools()
  const toolNames = toolListResponse.tools.map((tool) => tool.name).sort()
  assert.deepEqual(toolNames, ['list_notes', 'read_note', 'search_notes'])

  const listNotesResponse = await client.callTool({
    name: 'list_notes',
    arguments: {
      course: 'CSE442T'
    }
  })
  const listedNotes = listNotesResponse.content[0].text
  assert.match(listedNotes, /CSE442T\/CSE442T_L1/, 'list_notes should include CSE442T lecture notes')

  const readNoteResponse = await client.callTool({
    name: 'read_note',
    arguments: {
      noteId: 'about'
    }
  })
  const aboutText = readNoteResponse.content[0].text
  assert.match(aboutText, /# about/i)
  assert.match(aboutText, /This is a static server for me to share my notes/i)

  const searchResponse = await client.callTool({
    name: 'search_notes',
    arguments: {
      query: "Kerckhoffs' principle",
      limit: 3
    }
  })
  const searchText = searchResponse.content[0].text
  assert.match(searchText, /CSE442T\/CSE442T_L1/, 'search_notes should find the cryptography lecture')
  assert.match(searchText, /Kerckhoffs/i)
}

try {
  await main()
  process.stdout.write('MCP server test passed.\n')
} catch (error) {
  const suffix = stderrOutput ? `\nServer stderr:\n${stderrOutput}` : ''
  process.stderr.write(`${error.stack || error}${suffix}\n`)
  process.exitCode = 1
} finally {
  await client.close().catch(() => {})
  await transport.close().catch(() => {})
}
