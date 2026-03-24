import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { SeoHead } from '../components/Seo'
import { SubjectVisual } from '../components/SubjectVisual'
import { getSubject, getSubjectQuestionCounts } from '../data/bank'
import {
  gencatPdfUrlFromSelecatCode,
  selecatViewUrl,
  SELECAT_BASE_URL,
} from '../data/selecat/gencatFromSelecat'
import { SUBJECT_SAMPLE_SELECAT_CODE } from '../data/selecat/subjectSampleCodes'
import { SITE_URL } from '../config/site'
import { getProgress } from '../lib/progress'
import type { Activity } from '../types/content'

function isOfficial(a: Activity) {
  return a.activityKind !== 'interactive'
}

export function SubjectDetail() {
  const { subjectId = '' } = useParams()
  const s = getSubject(subjectId)

  if (!s) {
    return (
      <>
        <SeoHead
          title="Assignatura no trobada"
          description="Aquesta assignatura no existeix al banc SeleLab."
          path={`/assignatura/${subjectId}`}
          noindex
        />
        <div className="border border-[var(--line)] bg-[var(--surface)] p-10 text-center">
          <p className="text-[var(--ink-muted)]">Assignatura no trobada.</p>
          <Link
            to="/"
            className="font-mono-label mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] hover:underline"
          >
            ← Inici
          </Link>
        </div>
      </>
    )
  }

  const official = s.activities.filter(isOfficial)
  const interactive = s.activities.filter((a) => !isOfficial(a))
  const counts = getSubjectQuestionCounts(s.id)
  const sampleSelecat = SUBJECT_SAMPLE_SELECAT_CODE[s.id]
  const sampleGencatPdf = sampleSelecat ? gencatPdfUrlFromSelecatCode(sampleSelecat) : null

  const ActivityList = ({
    list,
    empty,
  }: {
    list: typeof s.activities
    empty: string
  }) => (
    <ul className="mt-6 space-y-2">
      {list.length === 0 ? (
        <li className="text-sm text-[var(--ink-muted)]">{empty}</li>
      ) : (
        list.map((a, i) => {
          const p = getProgress(s.id, a.id)
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/assignatura/${s.id}/${a.id}`}
                className="group flex flex-col gap-3 border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)] sm:flex-row sm:items-center sm:justify-between"
                aria-label={`Començar: ${a.title} (${s.short})`}
              >
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-[var(--ink)]">{a.title}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">{a.blurb}</p>
                  <p className="font-mono-label mt-3 text-[10px] uppercase tracking-[0.12em] text-[var(--ink-muted)]/80">
                    {a.inspiredBy} · {a.questions.length} preguntes · ~{a.estimatedMinutes} min
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  {p?.completed && (
                    <span className="font-mono-label border border-[var(--line)] bg-[var(--page)] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                      millor {Math.round(p.bestScore * 100)}%
                    </span>
                  )}
                  <span className="font-mono-label bg-[var(--accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--page)] group-hover:bg-[var(--accent-hover)]">
                    Començar
                  </span>
                </div>
              </Link>
            </motion.li>
          )
        })
      )}
    </ul>
  )

  const subjectDesc = s.description.trim()
    ? `${s.name}. ${s.description}`
    : `${s.name}. Tests sele i selectivitat (PAU): models oficials i pràctica interactiva SeleLab.`

  const origin = SITE_URL.replace(/\/$/, '')
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Assignatures', item: `${origin}/assignatures` },
      {
        '@type': 'ListItem',
        position: 3,
        name: s.short,
        item: `${origin}/assignatura/${subjectId}`,
      },
    ],
  }

  return (
    <div className="space-y-12">
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Helmet>
      <SeoHead
        title={`${s.short} — tests sele i selectivitat (PAU)`}
        description={subjectDesc}
        path={`/assignatura/${subjectId}`}
      />
      <Breadcrumbs
        items={[
          { label: 'Inici', to: '/' },
          { label: 'Assignatures', to: '/assignatures' },
          { label: s.short },
        ]}
      />
      <header className="border-b border-[var(--line)] pb-8">
        <div className="flex flex-wrap items-start gap-8">
          <SubjectVisual subjectId={s.id} size="lg" className="ring-1 ring-white/10 ring-inset" />
          <div className="min-w-0 flex-1">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
              <span className="mr-2 inline-block rounded border border-[var(--line)] px-2 py-0.5 text-[9px] text-[var(--ink)]">
                {s.area === 'general'
                  ? 'General'
                  : s.area === 'ciencies'
                    ? 'Ciències'
                    : s.area === 'humanitats'
                      ? 'Humanitats'
                      : 'Artística'}
              </span>
              {s.name}
            </p>
            <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
              {s.short}
            </h1>
            {s.description.trim() ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">{s.description}</p>
            ) : null}
            <p className="mt-4 max-w-2xl font-mono-label text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--ink-muted)]">
              Trieu «Proves d’accés» per preguntes extretes dels PDF oficials, o «Pràctica interactiva» per al banc
              SeleLab d’aquesta matèria.
            </p>
          </div>
        </div>
      </header>

      <section>
        <h2 className="font-display text-xl font-bold text-[var(--ink)]">
          Proves d’accés (oficial){' '}
          <span className="font-mono-label text-sm font-normal text-[var(--accent)]">
            · {counts.official} preguntes
          </span>
        </h2>
        <p className="font-mono-label mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          Enunciats de la Generalitat · cada ítem enllaça al PDF
        </p>
        <ActivityList
          list={official}
          empty="Encara no hi ha preguntes oficials per aquesta assignatura."
        />
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[var(--ink)]">
          Pràctica interactiva{' '}
          <span className="font-mono-label text-sm font-normal text-[var(--accent)]">
            · {counts.interactive} preguntes
          </span>
        </h2>
        <p className="font-mono-label mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          Banc SeleLab: test ràpid, ordenar, relacionar… (no és transcripció literal d’un examen)
        </p>
        <ActivityList
          list={interactive}
          empty="Sense banc interactiu per ara."
        />
      </section>

      <section className="border border-[var(--line)] bg-[var(--surface)] p-6">
        <h2 className="font-display text-lg font-bold text-[var(--ink)]">Més models d’examen (Selecat)</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
          <a
            href={SELECAT_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            Selecat.cat
          </a>{' '}
          recull enunciats i solucions de PAU de molts anys i convocatòries (cercador «Buscar examens»).
          Els PDF coincideixen amb els del Canal Universitats; el codi{' '}
          <span className="font-mono text-[12px] text-[var(--ink)]">pau_…</span> és el mateix nom de fitxer.
        </p>
        {sampleSelecat ? (
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            <a
              href={selecatViewUrl(sampleSelecat)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Visor Selecat (model recent)
            </a>
            {sampleGencatPdf ? (
              <a
                href={sampleGencatPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                PDF Generalitat (mateix enunciat)
              </a>
            ) : null}
          </p>
        ) : null}
      </section>

      <Link
        to="/assignatures"
        className="font-mono-label inline-flex text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] hover:text-[var(--accent)]"
      >
        ← Totes les assignatures
      </Link>
    </div>
  )
}
