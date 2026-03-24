import { SEO_DEFAULT_DESCRIPTION, SEO_KEYWORDS } from '../config/seoCopy'
import { SUBJECT_INDEX_FOR_SCHEMA } from '../data/subjectSeoMeta'

/**
 * Graf Schema.org per a la pàgina principal (i SPA): s’injecta a l’HTML estàtic al build
 * perquè Google i la «Prova de resultats enriquits» vegin JSON-LD sense executar React.
 */
export function buildSiteJsonLdData(baseUrl: string): {
  '@context': string
  '@graph': Record<string, unknown>[]
} {
  const b = baseUrl.replace(/\/$/, '')
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${b}/#website`,
      url: b,
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
      publisher: { '@id': `${b}/#organization` },
      copyrightHolder: { '@id': `${b}/#organization` },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${b}/#organization`,
      name: 'SeleLab',
      url: b,
      description:
        'Aplicació web gratuïta per practicar la selectivitat (PAU) a Catalunya: tests sele, testos selectivitat i materials alineats amb els models oficials de la Generalitat. Navegador modern amb JavaScript (HTML5).',
      logo: {
        '@type': 'ImageObject',
        url: `${b}/favicon.svg`,
      },
      sameAs: [],
      areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya' },
      knowsAbout: [
        'Prova d’accés a la universitat (PAU)',
        'Selectivitat Catalunya',
        'Tests i testos de sele per assignatura',
        'Models oficials Generalitat de Catalunya — Canal Universitats',
        'Simulador d’examen PAU',
        'Pràctica interactiva sense compte',
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${b}/#assignatures-itemlist`,
      name: 'Assignatures PAU — tests de sele i selectivitat (SeleLab)',
      description:
        'Llista d’assignatures de la selectivitat (PAU) amb enllaç a la fitxa de cada matèria.',
      numberOfItems: SUBJECT_INDEX_FOR_SCHEMA.length,
      itemListElement: SUBJECT_INDEX_FOR_SCHEMA.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'WebPage',
          '@id': `${b}/assignatura/${s.id}`,
          name: s.name,
          url: `${b}/assignatura/${s.id}`,
          inLanguage: 'ca-ES',
        },
      })),
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
