import { Link } from 'react-router-dom'
import { SeoHead } from '../components/Seo'
const desc =
  'Informació sobre el tractament de dades personals, emmagatzematge local i analítica (Vercel) al web SeleLab.'

export function Privacy() {
  return (
    <>
      <SeoHead title="Política de privacitat" description={desc} path="/privacitat" />
      <article className="space-y-8">
        <header className="border-b border-[var(--line)] pb-8">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Protecció de dades
          </p>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Política de privacitat
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Aquesta pàgina descriu com tractem la informació quan utilitzeu{' '}
            <strong className="text-[var(--ink)]">SeleLab</strong>, l’eina de pràctica per a la selectivitat (PAU) en català.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">1. Responsable i àmbit</h2>
          <p>
            El lloc web <strong className="text-[var(--ink)]">selelab.xyz</strong> (d’ara endavant, «el lloc») ofereix
            eines educatives gratuïtes per practicar la selectivitat (PAU) a Catalunya. La base legal del tractament és
            l’interès legítim de prestar el servei i, quan escaigui, el consentiment per a galetes no essencials (vegeu la{' '}
            <Link to="/cookies" className="text-[var(--accent)] underline-offset-2 hover:underline">
              política de cookies
            </Link>
            ).
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">2. Dades que no sol·licitem directament</h2>
          <p>
            No cal crear compte per usar SeleLab. No demanem nom, correu electrònic ni dades identificatives per accedir
            als tests ni al simulador.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">3. Emmagatzematge local al navegador</h2>
          <p>
            Per recordar el vostre progrés (p. ex. percentatges millors per activitat), l’aplicació pot desar informació
            al vostre dispositiu mitjançant{' '}
            <strong className="text-[var(--ink)]">localStorage</strong> del navegador. Aquestes dades no surten del vostre
            equip tret que el navegador les sincronitzi amb el vostre compte (p. ex. alguns perfils de Chrome); en aquest
            cas és el proveïdor del navegador qui aplica la seva política.
          </p>
          <p>
            Podeu esborrar aquestes dades des de les opcions del navegador (esborrar dades de llocs / emmagatzematge local).
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">4. Analítica (Vercel Analytics)</h2>
          <p>
            Podem utilitzar <strong className="text-[var(--ink)]">Vercel Web Analytics</strong> per entendre de forma
            agregada com s’utilitza el lloc (pàgines vistes, rendiment). Aquest servei està dissenyat per respectar la
            privacitat i no usar galetes de seguiment tradicionals; la informació es processa segons les polítiques de
            Vercel. Més informació:{' '}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              documentació de privacitat de Vercel Analytics
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">5. Publicitat (Google AdSense)</h2>
          <p>
            El fitxer <strong className="text-[var(--ink)]">ads.txt</strong> a l’arrel del domini identifica l’editor
            autoritzat de publicitat (Google) i ajuda a prevenir frau; el podeu consultar a{' '}
            <a href="/ads.txt" className="text-[var(--accent)] underline-offset-2 hover:underline">
              /ads.txt
            </a>
            .
          </p>
          <p>
            Si s’integren anuncis mitjançant Google AdSense o serveis similars, Google pot utilitzar galetes o
            identificadors segons la seva política i la vostra configuració (incloent-hi personalització d’anuncis). En
            aquest cas, es mostrarà informació addicional i, si cal, es demanarà el consentiment segons la normativa
            aplicable. Podeu gestionar les preferències d’anuncis de Google al vostre compte Google o a{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              Configuració d’anuncis
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">6. Drets (RGPD)</h2>
          <p>
            Si ens envieu una sol·licitud de contacte i ens proporcioneu dades personals, teniu dret d’accés,
            rectificació, supressió, limitació, oposició i portabilitat quan escaigui, així com a presentar reclamacions
            davant l’autoritat de protecció de dades (a Catalunya, l’
            <a
              href="https://www.apdcat.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              APDCAT
            </a>
            ).
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">7. Canvis</h2>
          <p>
            Podem actualitzar aquesta política. La data efectiva és la de publicació al web. Us recomanem revisar-la
            periòdicament.
          </p>
        </section>

        <p className="border-t border-[var(--line)] pt-8 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          <Link to="/" className="text-[var(--accent)] hover:underline">
            ← Inici
          </Link>
          {' · '}
          <Link to="/avis-legal" className="hover:text-[var(--ink)]">
            Avís legal
          </Link>
          {' · '}
          <Link to="/cookies" className="hover:text-[var(--ink)]">
            Cookies
          </Link>
        </p>
      </article>
    </>
  )
}
