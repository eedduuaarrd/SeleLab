/**
 * Després de `vite build`, reemplaça https://selelab.xyz per VITE_SITE_URL al dist/
 * (index.html, robots, sitemap, manifest, og.svg). Producció: https://selelab.xyz (o deixa VITE_SITE_URL buit).
 * - sitemap.xml: __LASTMOD__ → data ISO del build (Search Console).
 * La meta de verificació de Search Console va a scripts/inject-gsc.mjs (després de preload-fonts).
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const raw = process.env.VITE_SITE_URL?.trim()
const origin = (raw && raw.startsWith('http') ? raw : 'https://selelab.xyz').replace(/\/$/, '')
const host = new URL(origin).hostname
const lastmod = new Date().toISOString().slice(0, 10)

const files = ['index.html', 'robots.txt', 'sitemap.xml', 'site.webmanifest', 'og.svg']

for (const f of files) {
  const p = join(dist, f)
  if (!existsSync(p)) {
    console.warn(`[inject-site-url] fitxer absent (es normal en dev): ${f}`)
    continue
  }
  let s = readFileSync(p, 'utf8')
  let next = s.replace(/https:\/\/selelab\.xyz/g, origin).replace(/selelab\.xyz/g, host)
  if (f === 'sitemap.xml') {
    next = next.replace(/__LASTMOD__/g, lastmod)
  }
  if (next !== s) writeFileSync(p, next)
}

console.log(`[inject-site-url] origen: ${origin} · lastmod sitemap: ${lastmod}`)
