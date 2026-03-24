import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { DeferredAnalytics } from './components/DeferredAnalytics'
import { SEO_DEFAULT_TITLE } from './config/seoCopy'
import './fonts.css'
import './index.css'
import { App } from './App'

/** Evita pestanya buida abans que Helmet hidrati (mateixa fórmula que SeoHead per a la home). */
document.title = SEO_DEFAULT_TITLE.includes('SeleLab')
  ? SEO_DEFAULT_TITLE
  : `${SEO_DEFAULT_TITLE} · SeleLab`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <DeferredAnalytics />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
