import { Link } from 'react-router-dom'
import { SeoHead } from '../components/Seo'

const desc =
  'Què és SeleLab: tests de sele i selectivitat (PAU) a Catalunya, amb testos dels models oficials, pràctica interactiva i banc propi. Preguntes freqüents (FAQ) sobre la PAU i l’app.'

export function About() {
  return (
    <>
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

        <section className="border-t border-[var(--line)] pt-10">
          <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
            Preguntes freqüents (FAQ)
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Les respostes completes estan a la mateixa pàgina, sota l’aplicació (secció accessible a totes les rutes, també
            sense JavaScript).{' '}
            <a href="#faq-seo" className="text-[var(--accent)] underline-offset-2 hover:underline">
              Saltar a la FAQ
            </a>
            .
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
