import { SITE_URL } from './site'

export { SEO_DEFAULT_DESCRIPTION, SEO_DEFAULT_TITLE, SEO_KEYWORDS } from './seoCopy'

const origin = SITE_URL.replace(/\/$/, '')

/** Imatge per a Open Graph / Twitter (SVG 1200×630 a `public/og.svg`). */
export const SEO_OG_IMAGE = `${origin}/og.svg`

export function seoCanonicalPath(pathname: string): string {
  if (!pathname || pathname === '') return '/'
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  return p === '' ? '/' : p
}

export function seoAbsoluteUrl(pathname: string): string {
  const p = seoCanonicalPath(pathname)
  return p === '/' ? `${origin}/` : `${origin}${p}`
}
