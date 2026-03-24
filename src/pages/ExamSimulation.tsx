import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { SeoHead } from '../components/Seo'
import { subjects } from '../data/bank'
import { buildSimulationExam, verbatimPoolSize } from '../data/examArchive'
import { MODELS_PAU_INDEX } from '../data/examArchive/constants'
import { evaluate, emptyCtx, type SessionCtx } from '../lib/sessionEval'
import { shuffleIndices } from '../lib/shuffle'
import type { Question } from '../types/content'
import { ExamSourceLink } from '../components/ExamSourceLink'
import { BucketSortBlock } from '../components/questions/BucketSortBlock'
import { ClickWordBlock } from '../components/questions/ClickWordBlock'
import { MatchBlock } from '../components/questions/MatchBlock'
import { McqBlock } from '../components/questions/McqBlock'
import { OrderBlock } from '../components/questions/OrderBlock'
import { TrueFalseBlock } from '../components/questions/TrueFalseBlock'

type Phase = 'setup' | 'run' | 'done'

const SIMULATOR_SEO_DESC =
  'Simulador de tests sele i selectivitat (PAU): genera un full amb testos de l’arxiu oficial per assignatura, temporitzador opcional i enllaç als PDF de la Generalitat.'

const COUNT_OPTIONS = [10, 15, 20, 25] as const
const TIMER_OPTIONS = [0, 60, 90, 120] as const

function formatMmSs(totalSec: number) {
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function ExamSimulation() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [subjectId, setSubjectId] = useState<string>('catala')
  const [count, setCount] = useState<number>(15)
  const [timerMin, setTimerMin] = useState<number>(90)
  const [questions, setQuestions] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [ctx, setCtx] = useState<SessionCtx>(() => emptyCtx())
  const [score, setScore] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)

  const poolSize = useMemo(() => verbatimPoolSize(subjectId), [subjectId])
  const subject = useMemo(() => subjects.find((s) => s.id === subjectId), [subjectId])

  const total = questions.length
  const q = questions[idx]
  const resetRunState = useCallback(() => {
    setIdx(0)
    setReveal(false)
    setCtx(emptyCtx())
    setScore(0)
  }, [])

  useEffect(() => {
    if (phase !== 'run' || timerMin <= 0 || secondsLeft === null) return
    if (secondsLeft <= 0) {
      setPhase('done')
      return
    }
    const t = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s === null || s <= 0) return s
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [phase, timerMin, secondsLeft])

  useEffect(() => {
    if (phase !== 'run' || timerMin <= 0) return
    if (secondsLeft === 0) setPhase('done')
  }, [phase, secondsLeft, timerMin])

  useEffect(() => {
    if (!q) return
    setReveal(false)
    setCtx(() => {
      const base = emptyCtx()
      if (q.kind === 'order') return { ...base, order: shuffleIndices(q.items.length) }
      if (q.kind === 'match') return { ...base, match: q.left.map(() => -1) }
      if (q.kind === 'bucket_sort') return { ...base, bucket: q.items.map(() => null) }
      return base
    })
  }, [idx, q])

  const canSubmit =
    q &&
    !reveal &&
    ((q.kind === 'mcq' && ctx.mcq !== null) ||
      (q.kind === 'true_false' && ctx.tf !== null) ||
      q.kind === 'order' ||
      (q.kind === 'match' && ctx.match !== null && ctx.match.every((x) => x >= 0)) ||
      (q.kind === 'bucket_sort' && ctx.bucket !== null && ctx.bucket.every((v) => v !== null)) ||
      (q.kind === 'click_word' && ctx.click !== null))

  function startExam() {
    const n = Math.min(count, poolSize || count)
    const pack = buildSimulationExam(subjectId, n)
    setQuestions(pack)
    resetRunState()
    setSecondsLeft(timerMin > 0 ? timerMin * 60 : null)
    setPhase('run')
  }

  function onSubmit() {
    if (!q) return
    if (reveal) {
      if (idx + 1 >= total) {
        setPhase('done')
        return
      }
      setIdx((i) => i + 1)
      return
    }
    const ok = evaluate(q, ctx)
    if (ok === null) return
    if (ok) setScore((s) => s + 1)
    setReveal(true)
  }

  const progress = phase === 'run' && total > 0 ? ((idx + (reveal ? 1 : 0)) / total) * 100 : 0

  if (phase === 'setup') {
    return (
      <>
        <SeoHead title="Simulador d’examen PAU" description={SIMULATOR_SEO_DESC} path="/simulador" />
        <div className="space-y-12">
        <Breadcrumbs
          items={[
            { label: 'Inici', to: '/' },
            { label: 'Simulador PAU' },
          ]}
        />
        <header className="border-b border-[var(--line)] pb-10">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Mode examen
          </p>
          <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Simulador PAU
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Es genera un full a partir d’enunciats extrets dels models de PAU del Canal Universitats (PDF
            oficial), per a totes les assignatures del banc amb arxiu actiu. Cada sessió barreja ítems
            diferents; contrasta sempre la pauta de correcció del mateix PDF. No substitueix la prova real.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-8">
            <section className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                1 · Assignatura
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {subjects.map((s) => {
                  const n = verbatimPoolSize(s.id)
                  const has = n > 0
                  return (
                    <button
                      key={s.id}
                      type="button"
                      disabled={!has || n === 0}
                      onClick={() => setSubjectId(s.id)}
                      className={[
                        'font-mono-label border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition',
                        subjectId === s.id
                          ? 'border-[var(--accent)] bg-[var(--page)] text-[var(--ink)]'
                          : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)]',
                        !has || n === 0 ? 'cursor-not-allowed opacity-40' : '',
                      ].join(' ')}
                    >
                      {s.short}
                      {has && n > 0 ? ` · ${n}` : ''}
                    </button>
                  )
                })}
              </div>
              {verbatimPoolSize(subjectId) === 0 && (
                <p className="mt-4 text-sm text-[var(--ink-muted)]">
                  Aviat s’hi afegiran més assignatures des dels PDF de la Generalitat.
                </p>
              )}
            </section>

            <section className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                2 · Llargada
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {COUNT_OPTIONS.map((c) => {
                  const max = poolSize || 1
                  const disabled = c > max
                  return (
                    <button
                      key={c}
                      type="button"
                      disabled={disabled}
                      onClick={() => setCount(c)}
                      className={[
                        'font-mono-label border px-4 py-2 text-[10px] uppercase tracking-[0.16em]',
                        count === c
                          ? 'border-[var(--accent)] bg-[var(--page)]'
                          : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)]',
                        disabled ? 'cursor-not-allowed opacity-35' : '',
                      ].join(' ')}
                    >
                      {c} preguntes
                    </button>
                  )
                })}
              </div>
              <p className="mt-3 font-mono-label text-[9px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                Màxim disponible ara: {poolSize} ítems textuals per a aquesta assignatura.
              </p>
            </section>

            <section className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                3 · Temps
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TIMER_OPTIONS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTimerMin(m)}
                    className={[
                      'font-mono-label border px-4 py-2 text-[10px] uppercase tracking-[0.16em]',
                      timerMin === m
                        ? 'border-[var(--accent)] bg-[var(--page)]'
                        : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)]',
                    ].join(' ')}
                  >
                    {m === 0 ? 'Sense límit' : `${m} min`}
                  </button>
                ))}
              </div>
            </section>

            <button
              type="button"
              disabled={poolSize === 0}
              onClick={startExam}
              className="font-mono-label w-full bg-[var(--accent)] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--page)] hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Generar full i començar
            </button>
          </div>

          <aside className="space-y-4 border border-[var(--line)] bg-[var(--page)] p-6">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Fonts
            </p>
            <a
              href={MODELS_PAU_INDEX}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-[var(--ink)] underline-offset-4 hover:underline"
            >
              Models d’exàmens anteriors (Canal Universitats)
            </a>
            <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
              Els enunciats són transcripció dels PDF; en cas de dubte, preval sempre el document oficial.
            </p>
          </aside>
        </div>
      </div>
      </>
    )
  }

  if (phase === 'done') {
    const finalScore = score
    const max = questions.length || 1
    return (
      <>
        <SeoHead title="Simulador d’examen PAU" description={SIMULATOR_SEO_DESC} path="/simulador" />
        <div className="space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Inici', to: '/' },
            { label: 'Simulador PAU', to: '/simulador' },
            { label: 'Resultat' },
          ]}
        />
        <div className="border border-[var(--line-strong)] bg-[var(--surface)] p-10 text-center">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
            Simulació finalitzada
          </p>
          <p className="font-display mt-4 text-5xl font-extrabold tabular-nums text-[var(--ink)]">
            {finalScore}/{max}
          </p>
          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            Resultat orientatiu. Consulta la pauta del PDF per a cada ítem.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setPhase('setup')
                setQuestions([])
                resetRunState()
                setSecondsLeft(null)
              }}
              className="font-mono-label bg-[var(--accent)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--page)] hover:bg-[var(--accent-hover)]"
            >
              Nova simulació
            </button>
            <Link
              to="/assignatures"
              className="font-mono-label border border-[var(--line)] px-8 py-3 text-[11px] uppercase tracking-[0.18em] text-[var(--ink)] hover:border-[var(--line-strong)]"
            >
              Assignatures
            </Link>
          </div>
        </div>
      </div>
      </>
    )
  }

  if (!q || total === 0) {
    return (
      <>
        <SeoHead title="Simulador d’examen PAU" description={SIMULATOR_SEO_DESC} path="/simulador" />
        <div className="border border-[var(--line)] bg-[var(--surface)] p-10 text-center">
        <p className="text-[var(--ink-muted)]">No s’ha pogut generar el full. Torna a la configuració.</p>
        <button
          type="button"
          onClick={() => setPhase('setup')}
          className="font-mono-label mt-6 border border-[var(--line)] px-6 py-2 text-[10px] uppercase tracking-[0.18em]"
        >
          Enrere
        </button>
      </div>
      </>
    )
  }

  return (
    <>
      <SeoHead title="Simulador d’examen PAU" description={SIMULATOR_SEO_DESC} path="/simulador" />
      <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Inici', to: '/' },
          { label: 'Simulador PAU', to: '/simulador' },
          { label: `En curs · ${subject?.short ?? subjectId}` },
        ]}
      />
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--line)] pb-8">
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Simulació · {subject?.short ?? subjectId}
          </p>
          <h1 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-[var(--ink)]">
            Full barrejat (arxiu oficial)
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[var(--ink-muted)]">
            Enunciats extrets dels models oficials. Cada pregunta enllaça al PDF d’origen.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {secondsLeft !== null && (
            <div
              className={`font-mono-label tabular-nums border px-4 py-2 text-sm tracking-widest ${
                secondsLeft < 300 ? 'border-[#b85c5c] text-[#8a3d3d]' : 'border-[var(--line)] text-[var(--ink)]'
              }`}
              aria-live="polite"
            >
              {formatMmSs(secondsLeft)}
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setPhase('setup')
              setQuestions([])
              resetRunState()
              setSecondsLeft(null)
            }}
            className="font-mono-label border border-[var(--line)] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--ink)] hover:border-[var(--line-strong)]"
          >
            Abandonar
          </button>
        </div>
      </div>

      <div className="h-1 overflow-hidden bg-[var(--surface)]">
        <motion.div
          className="h-full bg-[var(--accent)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 22 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={q.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-[var(--line)] pb-6">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              Pregunta {idx + 1} / {total}
            </p>
            <span className="font-mono-label border border-[var(--line)] px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              {q.kind === 'mcq'
                ? 'Opcions'
                : q.kind === 'true_false'
                  ? 'V/F'
                  : q.kind === 'order'
                    ? 'Ordre'
                    : q.kind === 'match'
                      ? 'Relació'
                      : q.kind === 'bucket_sort'
                        ? 'Classifica'
                        : 'Pica mot'}
            </span>
          </div>
          <ExamSourceLink source={q.examSource} />
          <h2 className="font-display mt-8 text-lg font-semibold leading-snug text-[var(--ink)] sm:text-xl">
            {q.prompt}
          </h2>

          <div className="mt-8">
            {q.kind === 'mcq' && (
              <McqBlock
                options={q.options}
                correctIndex={q.correctIndex}
                value={ctx.mcq}
                onChange={(i) => setCtx((c) => ({ ...c, mcq: i }))}
                reveal={reveal}
                disabled={reveal}
              />
            )}
            {q.kind === 'true_false' && (
              <TrueFalseBlock
                correct={q.correct}
                value={ctx.tf}
                onChange={(v) => setCtx((c) => ({ ...c, tf: v }))}
                reveal={reveal}
                disabled={reveal}
              />
            )}
            {q.kind === 'order' && ctx.order && (
              <OrderBlock
                items={q.items}
                order={ctx.order}
                onOrderChange={(o) => setCtx((c) => ({ ...c, order: o }))}
                reveal={reveal}
                disabled={reveal}
              />
            )}
            {q.kind === 'match' && ctx.match && (
              <MatchBlock
                left={q.left}
                right={q.right}
                pairs={q.pairs}
                selected={ctx.match}
                onSelectedChange={(s) => setCtx((c) => ({ ...c, match: s }))}
                reveal={reveal}
                disabled={reveal}
              />
            )}
            {q.kind === 'bucket_sort' && ctx.bucket && (
              <BucketSortBlock
                bucketA={q.bucketA}
                bucketB={q.bucketB}
                items={q.items}
                value={ctx.bucket}
                onChange={(b) => setCtx((c) => ({ ...c, bucket: b }))}
                correct={q.correctBucket}
                reveal={reveal}
                disabled={reveal}
              />
            )}
            {q.kind === 'click_word' && (
              <ClickWordBlock
                tokens={q.tokens}
                correctIndex={q.correctIndex}
                value={ctx.click}
                onChange={(i) => setCtx((c) => ({ ...c, click: i }))}
                reveal={reveal}
                disabled={reveal}
              />
            )}
          </div>

          {reveal && q.explanation && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 border border-[var(--line)] bg-[var(--page)] p-4 text-sm leading-relaxed text-[var(--ink-muted)]"
            >
              <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                Pauta ·{' '}
              </span>
              {q.explanation}
            </motion.p>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-end gap-3">
            {!reveal && (
              <button
                type="button"
                onClick={onSubmit}
                disabled={!canSubmit}
                className="font-mono-label bg-[var(--accent)] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--page)] hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-35"
              >
                Comprovar
              </button>
            )}
            {reveal && (
              <motion.button
                type="button"
                onClick={onSubmit}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-mono-label border border-[var(--line-strong)] bg-[var(--surface-raised)] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)] hover:border-[var(--accent)]"
              >
                {idx + 1 >= total ? 'Veure resultat' : 'Següent'}
              </motion.button>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
    </>
  )
}
