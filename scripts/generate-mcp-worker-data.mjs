import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const CONTENT_ROOT = path.join(process.cwd(), 'content')
const OUTPUT_DIR = path.join(process.cwd(), 'mcp-worker', 'generated')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'notes-data.mjs')
const NOTE_EXTENSIONS = new Set(['.md', '.mdx'])

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
    const content = await fs.readFile(fullPath, 'utf8')

    return [{
      slug,
      relativePath,
      title: path.basename(slug),
      content
    }]
  }))

  return notes.flat().sort((a, b) => a.relativePath.localeCompare(b.relativePath))
}

const notes = await walkNotes()

await fs.mkdir(OUTPUT_DIR, { recursive: true })
await fs.writeFile(
  OUTPUT_FILE,
  `export const notesData = ${JSON.stringify(notes, null, 2)};\n`,
  'utf8'
)

process.stdout.write(`Generated ${notes.length} notes for MCP worker.\n`)
