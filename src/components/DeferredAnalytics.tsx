import { useEffect, useState, type ReactElement } from 'react'

/**
 * Carrega Vercel Analytics després del primer pintat (idle / curt retard) per reduir
 * treball al fil principal en FCP/LCP (PageSpeed mòbil).
 */
export function DeferredAnalytics() {
  const [node, setNode] = useState<ReactElement | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = () => {
      import('@vercel/analytics/react').then(({ Analytics }) => {
        if (!cancelled) setNode(<Analytics />)
      })
    }
    const id =
      typeof requestIdleCallback !== 'undefined'
        ? requestIdleCallback(load, { timeout: 3500 })
        : window.setTimeout(load, 2000)
    return () => {
      cancelled = true
      if (typeof id === 'number' && typeof cancelIdleCallback !== 'undefined') {
        cancelIdleCallback(id)
      } else {
        clearTimeout(id as number)
      }
    }
  }, [])

  return <>{node}</>
}
