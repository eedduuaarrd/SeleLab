/**
 * Injeta <link rel="preload" as="font"> al dist/index.html perquè els woff2
 * es descarreguin en paral·lel al CSS (millora cadena crítica / LCP).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const assetsDir = join(dist, 'assets')
const htmlPath = join(dist, 'index.html')

if (!existsSync(htmlPath) || !existsSync(assetsDir)) {
  console.warn('[preload-fonts] sense dist/assets, omet')
  process.exit(0)
}

const priority = [
  'dm-sans-latin-400-normal',
  'dm-sans-latin-700-normal',
  'dm-sans-latin-500-normal',
  'dm-sans-latin-600-normal',
  'syne-latin-800-normal',
  'syne-latin-700-normal',
  'syne-latin-600-normal',
  'syne-latin-500-normal',
  'ibm-plex-mono-latin-400-normal',
  'ibm-plex-mono-latin-500-normal',
  'ibm-plex-mono-latin-600-normal',
]

function score(name) {
  const idx = priority.findIndex((p) => name.includes(p))
  return idx === -1 ? 100 : idx
}

let html = readFileSync(htmlPath, 'utf8')
html = html.replace(/<!-- font-preloads:start -->[\s\S]*?<!-- font-preloads:end -->\n?/g, '')

const woff2 = readdirSync(assetsDir).filter((f) => f.endsWith('.woff2'))
const sorted = [...woff2].sort((a, b) => score(a) - score(b))
const picked = sorted.slice(0, 8)

const links = picked
  .map(
    (f) =>
      `    <link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`,
  )
  .join('\n')

const block = `    <!-- font-preloads:start -->\n${links}\n    <!-- font-preloads:end -->\n`

if (!html.includes('<head>')) {
  console.warn('[preload-fonts] sense <head>, omet')
  process.exit(0)
}

// Després de charset (ha de ser entre els primers bytes del document; no injectar just després de <head>)
const charsetRe = /(<meta\s+charset=["']utf-8["']\s*\/?>)/i
if (charsetRe.test(html)) {
  html = html.replace(charsetRe, `$1\n${block}`)
} else {
  html = html.replace('<head>', `<head>\n${block}`)
}
writeFileSync(htmlPath, html)
console.log(`[preload-fonts] ${picked.length} woff2 prioritzats`)
