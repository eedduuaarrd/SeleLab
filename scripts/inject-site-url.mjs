/**
 * Després de `vite build`, reemplaça https://selelab.xyz per VITE_SITE_URL al dist/
 * (index.html, robots, sitemap, manifest, og.svg). A Vercel, defineix VITE_SITE_URL=https://selelab.cat
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const raw = process.env.VITE_SITE_URL?.trim()
const origin = (raw && raw.startsWith('http') ? raw : 'https://selelab.xyz').replace(/\/$/, '')
const host = new URL(origin).hostname

const files = ['index.html', 'robots.txt', 'sitemap.xml', 'site.webmanifest', 'og.svg']

for (const f of files) {
  const p = join(dist, f)
  if (!existsSync(p)) {
    console.warn(`[inject-site-url] fitxer absent (es normal en dev): ${f}`)
    continue
  }
  let s = readFileSync(p, 'utf8')
  const next = s.replace(/https:\/\/selelab\.xyz/g, origin).replace(/selelab\.xyz/g, host)
  if (next !== s) writeFileSync(p, next)
}

console.log(`[inject-site-url] origen: ${origin}`)
