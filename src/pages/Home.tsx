import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { SubjectVisual } from '../components/SubjectVisual'
import { subjects } from '../data/bank'
import type { SubjectArea } from '../types/content'
import { getProgress } from '../lib/progress'

const areas: { id: SubjectArea | 'totes'; label: string }[] = [
  { id: 'totes', label: 'Totes' },
  { id: 'general', label: 'Generals' },
  { id: 'ciencies', label: 'Ciències' },
  { id: 'humanitats', label: 'Humanitats' },
  { id: 'artistica', label: 'Artística' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function Home() {
  const { pathname } = useLocation()
  const isAssignaturesOnly = pathname === '/assignatures'
  const [filter, setFilter] = useState<SubjectArea | 'totes'>('totes')

  const list = useMemo(() => {
    if (filter === 'totes') return subjects
    return subjects.filter((s) => s.area === filter)
  }, [filter])

  const totalQuestions = useMemo(
    () =>
      subjects.reduce(
        (acc, s) => acc + s.activities.reduce((a, act) => a + act.questions.length, 0),
        0,
      ),
    [],
  )

  return (
    <div className="space-y-16 sm:space-y-24">
      {isAssignaturesOnly ? (
        <Breadcrumbs
          items={[
            { label: 'Inici', to: '/' },
            { label: 'Totes les assignatures' },
          ]}
        />
      ) : null}

      {!isAssignaturesOnly ? (
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="min-w-0"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-mono-label text-[11px] text-[var(--accent)]">v.0</span>
              <span className="h-px flex-1 bg-[var(--line)]" aria-hidden />
            </div>
            <h1 className="font-display mt-6 max-w-[18ch] text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--ink)]">
              Pràctica que es nota el dia de l’examen.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">
              Preguntes extretes literalment dels PDF d’examen de la Generalitat: cada ítem enllaça al
              document oficial. Sense compte: el progrés es queda al teu navegador.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/assignatures"
                className="font-mono-label inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page)] transition hover:bg-[var(--accent-hover)]"
              >
                Llista d’assignatures
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/simulador"
                className="font-mono-label inline-flex items-center gap-2 border border-[var(--line-strong)] bg-[var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:border-[var(--accent)]"
              >
                Simulador PAU
              </Link>
              <span className="font-mono-label max-w-[16rem] text-[10px] uppercase leading-snug tracking-[0.14em] text-[var(--ink-muted)]">
                La pràctica interactiva és dins de cada assignatura (segona activitat).
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col gap-3 border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5"
            aria-label="Resum"
          >
            <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              En xifres
            </p>
            <div className="space-y-4 border-t border-[var(--line)] pt-4">
              <div>
                <p className="font-display text-3xl font-bold tabular-nums text-[var(--accent)]">
                  {subjects.length}
                </p>
                <p className="font-mono-label mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  assignatures
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold tabular-nums text-[var(--ink)]">
                  {totalQuestions}
                </p>
                <p className="font-mono-label mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  preguntes (banc oficial)
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold tabular-nums text-[var(--ink)]">6</p>
                <p className="font-mono-label mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  tipus de pregunta
                </p>
              </div>
            </div>
            <div className="mt-auto border-t border-dashed border-[var(--line)] pt-4">
              <p className="text-[11px] leading-snug text-[var(--ink-muted)]">
                Una pregunta cada vegada, amb enllaç directe al PDF de la convocatòria.
              </p>
            </div>
          </motion.aside>
        </section>
      ) : (
        <header className="border-b border-[var(--line)] pb-8">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Totes les assignatures
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Trieu matèria, entreu a la fitxa i obriu el banc «Proves d’accés — enunciats oficials». El
            simulador barreja ítems del mateix arxiu.
          </p>
          <Link
            to="/"
            className="font-mono-label mt-6 inline-flex text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] hover:underline"
          >
            ← Tornar a l’inici
          </Link>
        </header>
      )}

      <section id="assignatures" className="scroll-mt-28 space-y-8">
        <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
              {isAssignaturesOnly ? 'Matèries PAU' : 'Assignatures'}
            </h2>
            <p className="mt-2 max-w-lg font-mono-label text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Filtra per àrea · cada targeta porta a la fitxa de l’assignatura
            </p>
          </div>
          <div className="flex flex-wrap gap-0" role="tablist" aria-label="Filtra per àrea">
            {areas.map((a) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                aria-selected={filter === a.id}
                onClick={() => setFilter(a.id)}
                className={`font-mono-label border-b-2 px-3 py-2 text-[11px] uppercase tracking-[0.16em] transition ${
                  filter === a.id
                    ? 'border-[var(--accent)] text-[var(--ink)]'
                    : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          key={filter}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((s, i) => {
            const done = s.activities.filter((act) => getProgress(s.id, act.id)?.completed).length
            const totalAct = s.activities.length
            const featured = i === 0 && filter === 'totes'
            return (
              <motion.li
                key={s.id}
                variants={item}
                layout
                className={featured ? 'sm:col-span-2' : ''}
              >
                <Link
                  to={`/assignatura/${s.id}`}
                  className={`group flex h-full min-h-[9rem] flex-col border border-[var(--line)] bg-[var(--surface)] p-5 transition ${s.accent} hover:bg-[var(--surface-raised)] sm:min-h-[10.5rem] ${featured ? 'lg:min-h-[11rem]' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-2xl font-bold text-[var(--ink-muted)]" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <SubjectVisual subjectId={s.id} size="md" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold leading-tight text-[var(--ink)]">
                    {s.short}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-snug text-[var(--ink-muted)]">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4">
                    {totalAct > 0 && (
                      <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                        {done}/{totalAct} fetes
                      </span>
                    )}
                    <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                      obrir →
                    </span>
                  </div>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </section>
    </div>
  )
}
