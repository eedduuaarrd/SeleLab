import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  seoAbsoluteUrl,
} from '../config/seo'
import { APP_VERSION, SITE_URL } from '../config/site'
import { SUBJECT_INDEX_FOR_SCHEMA } from '../data/subjectSeoMeta'

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
  const ogSecure = ogImage.startsWith('https://') ? ogImage : undefined

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_KEYWORDS} />
      <meta name="author" content="SeleLab" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
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

function buildJsonLdGraph(baseUrl: string, includeAssignaturesList: boolean) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'SeleLab',
      alternateName: [
        'SeleLab tests selectivitat',
        'tests sele PAU',
        'testos selectivitat Catalunya',
        'test selectivitat Catalunya',
      ],
      description: SEO_DEFAULT_DESCRIPTION,
      keywords: SEO_KEYWORDS,
      inLanguage: 'ca-ES',
      publisher: { '@id': `${baseUrl}/#organization` },
      copyrightHolder: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${baseUrl}/#organization`,
      name: 'SeleLab',
      url: baseUrl,
      description:
        'Aplicació web gratuïta per practicar la selectivitat (PAU) a Catalunya: tests sele, testos selectivitat i materials alineats amb els models oficials de la Generalitat.',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.svg`,
      },
      sameAs: [],
      areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya' },
    },
    {
      '@type': 'WebApplication',
      '@id': `${baseUrl}/#webapp`,
      name: 'SeleLab',
      url: baseUrl,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Navegador modern amb JavaScript activat (HTML5).',
      featureList: [
        'Tests de selectivitat (PAU) per assignatura',
        'Enunciats oficials amb enllaç als PDF de la Generalitat (Canal Universitats)',
        'Simulador d’examen amb temporitzador opcional',
        'Pràctica interactiva sense compte (progrés al navegador)',
      ],
      screenshot: `${baseUrl}/og.svg`,
      softwareVersion: APP_VERSION,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      isAccessibleForFree: true,
    },
  ]

  if (includeAssignaturesList) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${baseUrl}/#assignatures-itemlist`,
      name: 'Assignatures PAU — tests de sele i selectivitat (SeleLab)',
      description:
        'Llista d’assignatures de la selectivitat (PAU) amb enllaç a la fitxa de cada matèria.',
      numberOfItems: SUBJECT_INDEX_FOR_SCHEMA.length,
      itemListElement: SUBJECT_INDEX_FOR_SCHEMA.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/assignatura/${s.id}`,
          name: s.name,
          url: `${baseUrl}/assignatura/${s.id}`,
          inLanguage: 'ca-ES',
        },
      })),
    })
  }

  return graph
}

/** Dades estructurades JSON-LD (WebSite, Organization, WebApplication; ItemList a inici/assignatures). */
export function SeoJsonLd() {
  const { pathname } = useLocation()
  const baseUrl = SITE_URL.replace(/\/$/, '')

  const data = useMemo(() => {
    const includeList = pathname === '/' || pathname === '/assignatures'
    return {
      '@context': 'https://schema.org',
      '@graph': buildJsonLdGraph(baseUrl, includeList),
    }
  }, [baseUrl, pathname])

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Helmet>
  )
}
