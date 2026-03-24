/**
 * Últim pas del build: injecta meta google-site-verification al dist/index.html
 * (després de preload-fonts). Defineix VITE_GOOGLE_SITE_VERIFICATION a Vercel.
 */
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const indexPath = join(__dirname, '..', 'dist', 'index.html')
const gsc = process.env.VITE_GOOGLE_SITE_VERIFICATION?.trim()

if (!gsc || !existsSync(indexPath)) {
  if (gsc) console.warn('[inject-gsc] sense dist/index.html')
  process.exit(0)
}

let html = readFileSync(indexPath, 'utf8')
if (html.includes('name="google-site-verification"')) {
  console.log('[inject-gsc] meta ja present, omet')
  process.exit(0)
}

const esc = gsc.replace(/"/g, '&quot;')
html = html.replace('<head>', `<head>\n    <meta name="google-site-verification" content="${esc}" />`)
writeFileSync(indexPath, html)
console.log('[inject-gsc] Google Search Console: meta verificació injectada')
