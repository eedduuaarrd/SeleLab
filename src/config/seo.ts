import { SITE_URL } from './site'

const origin = SITE_URL.replace(/\/$/, '')

/** Imatge per a Open Graph / Twitter (SVG 1200×630 a `public/og.svg`). */
export const SEO_OG_IMAGE = `${origin}/og.svg`

/** Paraules clau (català) per a `<meta name="keywords">`; alguns motors les usen com a senyal secundari. */
export const SEO_KEYWORDS = [
  'selectivitat',
  'sele',
  'test selectivitat',
  'tests selectivitat',
  'testos selectivitat',
  'test sele',
  'tests sele',
  'testos sele',
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
  'SeleLab',
].join(', ')

/** Títol per defecte (HTML estàtic + Helmet): inclou variants de cerca sense semblar duplicat. */
export const SEO_DEFAULT_TITLE =
  'Sele, tests i selectivitat (PAU) — testos oficials · Catalunya'

/** Meta description: frases naturals amb sinònims (test / tests / testos, sele / selectivitat). */
export const SEO_DEFAULT_DESCRIPTION =
  'Tests de sele i selectivitat (PAU) a Catalunya: testos i preguntes dels models oficials de la Generalitat, pràctica interactiva per assignatura, simulador i enllaços a Selecat i el Canal Universitats. SeleLab.'

export function seoCanonicalPath(pathname: string): string {
  if (!pathname || pathname === '') return '/'
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  return p === '' ? '/' : p
}

export function seoAbsoluteUrl(pathname: string): string {
  const p = seoCanonicalPath(pathname)
  return p === '/' ? `${origin}/` : `${origin}${p}`
}
