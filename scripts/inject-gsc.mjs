/**
 * Últim pas del build: injecta meta google-site-verification al dist/index.html
 * (després de preload-fonts). Defineix VITE_GOOGLE_SITE_VERIFICATION a Vercel.
 * S’insereix just després de charset (no al començament de <head>).
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
const meta = `\n    <meta name="google-site-verification" content="${esc}" />`
const charsetRe = /(<meta\s+charset=["']utf-8["']\s*\/?>)/i
if (charsetRe.test(html)) {
  html = html.replace(charsetRe, `$1${meta}`)
} else {
  html = html.replace('<head>', `<head>${meta}`)
}
writeFileSync(indexPath, html)
console.log('[inject-gsc] Google Search Console: meta verificació injectada')
