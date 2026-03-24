import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SeoHead } from '../components/Seo'

const desc =
  'Què és SeleLab: tests de sele i selectivitat (PAU) a Catalunya, amb testos dels models oficials, pràctica interactiva i banc propi. Preguntes freqüents (FAQ) sobre la PAU i l’app.'

const faqItems = [
  {
    q: 'Què és la selectivitat (PAU) a Catalunya?',
    a: 'La prova d’accés a la universitat (PAU), també anomenada selectivitat o «sele», és l’examen que hom fa habitualment al final de Batxillerat per accedir a graus universitaris i cicles formatius de grau superior. Les bases i els models d’examen es publiquen al portal de la Generalitat (Canal Universitats, Selecat).',
  },
  {
    q: 'Què és SeleLab i com m’ajuda a preparar la selectivitat?',
    a: 'SeleLab és una aplicació web gratuïta per practicar amb tests de selectivitat i testos interactius: per cada assignatura trobareu enunciats extrets dels PDF oficials (amb enllaç al document de la convocatòria), una segona activitat de reforç i un simulador que barreja ítems de l’arxiu oficial.',
  },
  {
    q: 'Els tests i testos són dels models oficials?',
    a: 'La secció «Proves d’accés — enunciats oficials» només inclou preguntes extretes dels models publicats al Canal Universitats. La «Pràctica interactiva» és un banc addicional SeleLab per reforçar (no és transcripció literal dels PDF).',
  },
  {
    q: 'Cal crear compte o instal·lar res?',
    a: 'No cal compte. El progrés es desa al navegador (localStorage). Funciona al navegador sense instal·lació; podeu afegir SeleLab a la pantalla d’inici al mòbil des del menú del navegador.',
  },
  {
    q: 'Què fa el simulador?',
    a: 'El simulador genera un full de preguntes a partir de l’arxiu oficial per assignatura, amb nombre d’ítems i temporitzador opcionals, per entrenar el ritme abans del dia de l’examen.',
  },
  {
    q: 'On consulto notes de tall, calendari o preinscripció?',
    a: 'SeleLab no substitueix els portals oficials: per a dates, proves, qualificacions i accés a la universitat heu de seguir la informació de la Generalitat (Selecat, Canal Universitats) i de cada universitat.',
  },
] as const

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export function About() {
  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Helmet>
      <SeoHead title="Sobre SeleLab — FAQ selectivitat (PAU)" description={desc} path="/sobre" />
      <article className="space-y-8">
        <header className="border-b border-[var(--line)] pb-8">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Projecte
          </p>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Sobre SeleLab
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            SeleLab és una aplicació web pensada per ajudar l’alumnat a preparar la selectivitat amb preguntes estructurades
            i enllaços als PDF oficials publicats per la Generalitat de Catalunya (Canal Universitats, models PAU).
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">Què ofereix?</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong className="text-[var(--ink)]">Proves d’accés — enunciats oficials:</strong> ítems extrets dels
              documents publicats, amb indicació de convocatòria i enllaç al full original.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Pràctica interactiva:</strong> banc addicional per matèria (tipus de
              pregunta variats) per reforçar abans dels PDF.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Simulador:</strong> generació d’una sessió amb preguntes de l’arxiu
              oficial per assignatura.
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">Sense compte</h2>
          <p>
            El progrés es desa al navegador (localStorage). No cal registrar-se; podeu esborrar les dades des del propi
            navegador en qualsevol moment.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">Transparència</h2>
          <p>
            Disposeu de pàgines de{' '}
            <Link to="/privacitat" className="text-[var(--accent)] underline-offset-2 hover:underline">
              privacitat
            </Link>
            ,{' '}
            <Link to="/cookies" className="text-[var(--accent)] underline-offset-2 hover:underline">
              cookies
            </Link>{' '}
            i{' '}
            <Link to="/avis-legal" className="text-[var(--accent)] underline-offset-2 hover:underline">
              avís legal
            </Link>{' '}
            per conèixer com tractem la informació i quines són les condicions d’ús.
          </p>
        </section>

        <section className="border-t border-[var(--line)] pt-10" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl"
          >
            Preguntes freqüents (FAQ)
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--ink-muted)]">
            Respostes ràpides sobre la selectivitat, els tests i SeleLab.
          </p>
          <dl className="mt-8 space-y-8">
            {faqItems.map((item) => (
              <div key={item.q} className="border-b border-[var(--line)] pb-8 last:border-b-0">
                <dt className="font-display text-base font-bold text-[var(--ink)]">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="border-t border-[var(--line)] pt-8 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          <Link to="/" className="text-[var(--accent)] hover:underline">
            ← Inici
          </Link>
          {' · '}
          <Link to="/assignatures" className="hover:text-[var(--ink)]">
            Assignatures
          </Link>
        </p>
      </article>
    </>
  )
}
