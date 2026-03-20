import assert from 'node:assert/strict'
import process from 'node:process'

import worker from '../mcp-worker/src/index.mjs'
import { LATEST_PROTOCOL_VERSION } from '@modelcontextprotocol/sdk/types.js'

function makeJsonRequest(url, body, headers = {}) {
  return new Request(url, {
    method: 'POST',
    headers: {
      accept: 'application/json, text/event-stream',
      'content-type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })
}

const baseUrl = 'https://example.com'

const healthResponse = await worker.fetch(new Request(`${baseUrl}/health`))
assert.equal(healthResponse.status, 200)
const healthJson = await healthResponse.json()
assert.equal(healthJson.status, 'ok')
assert.ok(healthJson.notes > 0)

const initializeResponse = await worker.fetch(makeJsonRequest(`${baseUrl}/mcp`, {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: LATEST_PROTOCOL_VERSION,
    capabilities: {},
    clientInfo: {
      name: 'notenextra-worker-test',
      version: '1.0.0'
    }
  }
}))

assert.equal(initializeResponse.status, 200)
const sessionId = initializeResponse.headers.get('mcp-session-id')
assert.ok(sessionId, 'initialize should return an MCP session ID')
const protocolVersion = initializeResponse.headers.get('mcp-protocol-version') || LATEST_PROTOCOL_VERSION
const initializeJson = await initializeResponse.json()
assert.ok(initializeJson.result, 'initialize should return a result payload')

const toolListResponse = await worker.fetch(makeJsonRequest(`${baseUrl}/mcp`, {
  jsonrpc: '2.0',
  id: 2,
  method: 'tools/list',
  params: {}
}, {
  'mcp-protocol-version': protocolVersion,
  'mcp-session-id': sessionId
}))

assert.equal(toolListResponse.status, 200)
const toolListJson = await toolListResponse.json()
const toolNames = toolListJson.result.tools.map((tool) => tool.name).sort()
assert.deepEqual(toolNames, ['list_notes', 'read_note', 'search_notes'])

const listNotesResponse = await worker.fetch(makeJsonRequest(`${baseUrl}/mcp`, {
  jsonrpc: '2.0',
  id: 3,
  method: 'tools/call',
  params: {
    name: 'list_notes',
    arguments: {
      course: 'CSE442T'
    }
  }
}, {
  'mcp-protocol-version': protocolVersion,
  'mcp-session-id': sessionId
}))

assert.equal(listNotesResponse.status, 200)
const listNotesJson = await listNotesResponse.json()
assert.match(listNotesJson.result.content[0].text, /CSE442T\/CSE442T_L1/)

const readNoteResponse = await worker.fetch(makeJsonRequest(`${baseUrl}/mcp`, {
  jsonrpc: '2.0',
  id: 4,
  method: 'tools/call',
  params: {
    name: 'read_note',
    arguments: {
      noteId: 'about'
    }
  }
}, {
  'mcp-protocol-version': protocolVersion,
  'mcp-session-id': sessionId
}))

assert.equal(readNoteResponse.status, 200)
const readNoteJson = await readNoteResponse.json()
assert.match(readNoteJson.result.content[0].text, /This is a static server for me to share my notes/i)

const searchResponse = await worker.fetch(makeJsonRequest(`${baseUrl}/mcp`, {
  jsonrpc: '2.0',
  id: 5,
  method: 'tools/call',
  params: {
    name: 'search_notes',
    arguments: {
      query: "Kerckhoffs' principle",
      limit: 3
    }
  }
}, {
  'mcp-protocol-version': protocolVersion,
  'mcp-session-id': sessionId
}))

assert.equal(searchResponse.status, 200)
const searchJson = await searchResponse.json()
assert.match(searchJson.result.content[0].text, /CSE442T\/CSE442T_L1/)

process.stdout.write('MCP worker test passed.\n')
