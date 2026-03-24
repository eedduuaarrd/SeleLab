import { Link } from 'react-router-dom'
import { SeoHead } from '../components/Seo'

const desc =
  'Ús de galetes i tecnologies similars a SeleLab: emmagatzematge local, analítica Vercel i possibles anuncis Google.'

export function Cookies() {
  return (
    <>
      <SeoHead title="Política de cookies" description={desc} path="/cookies" />
      <article className="space-y-8">
        <header className="border-b border-[var(--line)] pb-8">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Transparència
          </p>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Política de cookies
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Us expliquem quines tecnologies poden usar-se al lloc i com podeu controlar-les.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">1. Què són les galetes?</h2>
          <p>
            Les galetes són petits fitxers que els llocs web poden desar al vostre dispositiu. També hi ha tecnologies
            similars (emmagatzematge local, identificadors en aplicacions).
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">2. Emmagatzematge local (funcionalitat)</h2>
          <p>
            SeleLab pot usar <strong className="text-[var(--ink)]">localStorage</strong> del navegador per desar el
            progrés de pràctiques al vostre dispositiu. Això permet que el lloc recordi resultats sense compte. Es
            considera necessari per al funcionament esperat de l’aplicació en el vostre navegador.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">3. Analítica</h2>
          <p>
            Si està activada, <strong className="text-[var(--ink)]">Vercel Web Analytics</strong> mesura ús agregat del
            lloc amb enfocament en privacitat (sense perfils individuals com en alguns sistemes de tercers clàssics).
            Per a detalls, vegeu la documentació de Vercel enllaçada des de la{' '}
            <Link to="/privacitat" className="text-[var(--accent)] underline-offset-2 hover:underline">
              política de privacitat
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">4. Publicitat (si s’activa)</h2>
          <p>
            Si s’incorpora <strong className="text-[var(--ink)]">Google AdSense</strong> o altres xarxes publicitàries,
            aquestes poden instal·lar galetes o usadors similars per mostrar anuncis rellevants, mesurar impressions o
            prevenir frau. Google ofereix informació sobre com usa les dades als seus centres d’ajuda i polítiques de
            privacitat. Podreu gestionar preferències segons el que exigeixi la normativa vigent (incloent-hi banners de
            consentiment quan calgui).
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">5. Com gestionar o esborrar galetes</h2>
          <p>
            Podeu bloquejar o esborrar galetes des de la configuració del navegador (Chrome, Firefox, Safari, Edge, etc.).
            Tingueu en compte que desactivar galetes essencials pot afectar algunes funcions dels llocs web.
          </p>
        </section>

        <p className="border-t border-[var(--line)] pt-8 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          <Link to="/" className="text-[var(--accent)] hover:underline">
            ← Inici
          </Link>
          {' · '}
          <Link to="/privacitat" className="hover:text-[var(--ink)]">
            Privacitat
          </Link>
          {' · '}
          <Link to="/avis-legal" className="hover:text-[var(--ink)]">
            Avís legal
          </Link>
        </p>
      </article>
    </>
  )
}
