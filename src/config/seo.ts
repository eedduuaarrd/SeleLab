import { SITE_URL } from './site'

const origin = SITE_URL.replace(/\/$/, '')

/** Imatge per a Open Graph / Twitter (SVG 1200×630 a `public/og.svg`). */
export const SEO_OG_IMAGE = `${origin}/og.svg`

/** Paraules clau principals (català) per a `<meta name="keywords">`. */
export const SEO_KEYWORDS = [
  'selectivitat',
  'PAU',
  'prova d’accés',
  'Catalunya',
  'universitat',
  'models d’examen',
  'Generalitat de Catalunya',
  'Canal Universitats',
  'proves oficials',
  'simulador selectivitat',
  'pràctica PAU',
].join(', ')

export const SEO_DEFAULT_TITLE = 'SeleLab — Pràctica interactiva per a la selectivitat (PAU)'
export const SEO_DEFAULT_DESCRIPTION =
  'Practica la selectivitat amb tests interactius i preguntes extretes dels PDF oficials de la Generalitat de Catalunya (models PAU). Assignatures, simulador i enllaços a Selecat i el Canal Universitats.'

export function seoCanonicalPath(pathname: string): string {
  if (!pathname || pathname === '') return '/'
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  return p === '' ? '/' : p
}

export function seoAbsoluteUrl(pathname: string): string {
  const p = seoCanonicalPath(pathname)
  return p === '/' ? `${origin}/` : `${origin}${p}`
}
