import { Link } from 'react-router-dom'
import { SeoHead } from '../components/Seo'
import { SITE_URL } from '../config/site'

const desc =
  'Condicions d’ús, propietat intel·lectual, enllaços externs i limitació de responsabilitat del lloc SeleLab.'

export function LegalNotice() {
  return (
    <>
      <SeoHead title="Avís legal" description={desc} path="/avis-legal" />
      <article className="space-y-8">
        <header className="border-b border-[var(--line)] pb-8">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Condicions generals
          </p>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Avís legal
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Ús del lloc web <strong className="text-[var(--ink)]">{SITE_URL.replace(/\/$/, '')}</strong> (SeleLab).
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">1. Objecte</h2>
          <p>
            SeleLab és un projecte educatiu que ofereix pràctiques interactives i materials d’estudi relacionats amb la
            selectivitat (prova d’accés a la universitat) a Catalunya. L’accés al lloc és gratuït dins la capacitat tècnica
            disponible.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">2. Propietat intel·lectual i fonts oficials</h2>
          <p>
            Els enunciats i documents oficials de la prova d’accés són propietat dels seus titulars (p. ex. Generalitat de
            Catalunya / universitats segons el cas). SeleLab reprodueix o parafraseja continguts amb finalitat
            educativa i enllaça als PDF oficials quan escau. La interfície, el codi, el disseny i els materials propis
            de SeleLab (incloent-hi el banc interactiu addicional) estan protegits per les lleis aplicables.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">3. Enllaços externs</h2>
          <p>
            El lloc pot incloure enllaços a tercers (Generalitat, Selecat, Google, Vercel, etc.). No controlem aquests
            llocs i no ens responsabilitzem del seu contingut ni de les seves polítiques de privacitat.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">4. Limitació de responsabilitat</h2>
          <p>
            La informació i les eines es ofereixen «tal qual», sense garanties expressades o implícites. No substitueixen
            el criteri del professorat, dels centres educatius ni de la normativa oficial de convocatòria. No ens
            responsabilitzem de danys indirectes derivats de l’ús del lloc o de la impossibilitat d’ús.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">5. Modificacions</h2>
          <p>
            Podem modificar continguts, funcionalitats o aquests textos legals. L’ús continuat del lloc després dels canvis
            implica l’acceptació de les condicions actualitzades, dins el marc legal aplicable.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          <h2 className="font-display text-lg font-bold text-[var(--ink)]">6. Llei aplicable</h2>
          <p>
            Per a la resolució de les controvèrsies que puguin derivar-se de l’ús d’aquest lloc web s’aplicarà la
            legislació espanyola i, si escau, la dels tribunals de Catalunya.
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
          <Link to="/cookies" className="hover:text-[var(--ink)]">
            Cookies
          </Link>
        </p>
      </article>
    </>
  )
}
