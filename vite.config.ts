import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { buildStaticFaqSectionHtml } from './src/lib/faqSeoHtml'
import { buildSiteJsonLdData } from './src/lib/jsonLdSiteGraph'

/** Origen públic per al JSON-LD estàtic (alineat amb `scripts/inject-site-url.mjs`). */
function siteOrigin(): string {
  const raw = process.env.VITE_SITE_URL?.trim()
  return (raw && raw.startsWith('http') ? raw : 'https://selelab.xyz').replace(/\/$/, '')
}

/**
 * Injeta JSON-LD + secció FAQ visible al HTML (dev + dist).
 * La Prova de resultats enriquits de Google només mostra «elements» per a tipus amb snippet (p. ex. FAQ), no per WebSite sol.
 */
function injectJsonLdPlugin() {
  return {
    name: 'inject-jsonld-html',
    transformIndexHtml(html: string) {
      const data = buildSiteJsonLdData(siteOrigin())
      const json = JSON.stringify(data).replace(/</g, '\\u003c')
      const tag = `    <script type="application/ld+json">${json}</script>`
      let out = html.replace('</head>', `${tag}\n</head>`)
      out = out.replace(
        '<div id="root"></div>',
        `<div id="root"></div>\n    ${buildStaticFaqSectionHtml()}`,
      )
      return out
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), injectJsonLdPlugin()],
  build: {
    target: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react-router')) return 'router'
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'
          return 'vendor'
        },
      },
    },
  },
})
