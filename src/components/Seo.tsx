import { Helmet } from 'react-helmet-async'
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  seoAbsoluteUrl,
} from '../config/seo'
import { SITE_URL } from '../config/site'

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
 * Cal envoltar l’app amb `HelmetProvider` (vegeu `main.tsx`).
 */
export function SeoHead({ title, description = SEO_DEFAULT_DESCRIPTION, path, noindex }: SeoHeadProps) {
  const fullTitle = title.includes('SeleLab') ? title : `${title} · SeleLab`
  const canonical = seoAbsoluteUrl(path)
  const ogImage = SEO_OG_IMAGE

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_KEYWORDS} />
      <meta name="author" content="SeleLab" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SeleLab — Pràctica per a la selectivitat" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

/** Dades estructurades JSON-LD (WebSite + Organization) — una sola instància, p. ex. al Shell. */
export function SeoJsonLd() {
  const url = SITE_URL.replace(/\/$/, '')
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url,
        name: 'SeleLab',
        description: SEO_DEFAULT_DESCRIPTION,
        inLanguage: 'ca-ES',
        publisher: { '@id': `${url}/#organization` },
        copyrightHolder: { '@id': `${url}/#organization` },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${url}/#organization`,
        name: 'SeleLab',
        url,
        description:
          'Aplicació web gratuïta per practicar la selectivitat (PAU) a Catalunya amb materials alineats amb els models oficials.',
        logo: {
          '@type': 'ImageObject',
          url: `${url}/favicon.svg`,
        },
        sameAs: [],
        areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya' },
      },
      {
        '@type': 'WebApplication',
        '@id': `${url}/#webapp`,
        name: 'SeleLab',
        url,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        isAccessibleForFree: true,
      },
    ],
  }

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Helmet>
  )
}
