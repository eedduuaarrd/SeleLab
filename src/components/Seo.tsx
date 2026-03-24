import { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  seoAbsoluteUrl,
} from '../config/seo'

type SeoHeadProps = {
  /** Títol sense sufix; es mostra com «Títol · SeleLab». */
  title: string
  description?: string
  path: string
  /** Per a pàgines que no s’han d’indexar (errors, etc.). */
  noindex?: boolean
}

/**
 * Meta title, description, canonical, Open Graph i Twitter per ruta.
 * El títol es posa amb `document.title` (i un sol `<title>` a index.html) per evitar duplicats que Helmet de vegades crea.
 * `referrer` només a index.html. Schema.org principal va al HTML estàtic (vite.config.ts).
 */
export function SeoHead({ title, description = SEO_DEFAULT_DESCRIPTION, path, noindex }: SeoHeadProps) {
  const fullTitle = title.includes('SeleLab') ? title : `${title} · SeleLab`
  const canonical = seoAbsoluteUrl(path)
  const ogImage = SEO_OG_IMAGE
  const ogSecure = ogImage.startsWith('https://') ? ogImage : undefined

  useLayoutEffect(() => {
    document.title = fullTitle
  }, [fullTitle])

  return (
    <Helmet prioritizeSeoTags>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_KEYWORDS} />
      <meta name="author" content="SeleLab" />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="ca" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SeleLab" />
      <meta property="og:locale" content="ca_ES" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogSecure ? <meta property="og:image:secure_url" content={ogSecure} /> : null}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="SeleLab — tests sele, selectivitat i PAU (Catalunya)"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
