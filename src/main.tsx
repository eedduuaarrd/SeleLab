import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { DeferredAnalytics } from './components/DeferredAnalytics'
import './index.css'
import { App } from './App'

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
