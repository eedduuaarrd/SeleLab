import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getActivity } from '../data/bank'
import { evaluate, emptyCtx, type SessionCtx } from '../lib/sessionEval'
import { shuffleIndices } from '../lib/shuffle'
import { recordResult } from '../lib/progress'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ExamSourceLink } from '../components/ExamSourceLink'
import { BucketSortBlock } from '../components/questions/BucketSortBlock'
import { ClickWordBlock } from '../components/questions/ClickWordBlock'
import { MatchBlock } from '../components/questions/MatchBlock'
import { McqBlock } from '../components/questions/McqBlock'
import { OrderBlock } from '../components/questions/OrderBlock'
import { TrueFalseBlock } from '../components/questions/TrueFalseBlock'

export function Session() {
  const { subjectId = '', activityId = '' } = useParams()
  const nav = useNavigate()
  const pack = useMemo(() => getActivity(subjectId, activityId), [subjectId, activityId])

  const [idx, setIdx] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [ctx, setCtx] = useState<SessionCtx>(() => emptyCtx())
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const activity = pack?.activity
  const subject = pack?.subject
  const q = activity?.questions[idx]
  const total = activity?.questions.length ?? 0

  useEffect(() => {
    setIdx(0)
    setReveal(false)
    setCtx(emptyCtx())
    setScore(0)
    setFinished(false)
  }, [subjectId, activityId])

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

  if (!pack || !activity || !subject || !q) {
    return (
      <div className="border border-[var(--line)] bg-[var(--surface)] p-10 text-center">
        <p className="text-[var(--ink-muted)]">No s’ha trobat l’activitat.</p>
        <Link
          to="/"
          className="font-mono-label mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] hover:underline"
        >
          Inici
        </Link>
      </div>
    )
  }

  const question = q

  const canSubmit =
    !reveal &&
    ((question.kind === 'mcq' && ctx.mcq !== null) ||
      (question.kind === 'true_false' && ctx.tf !== null) ||
      question.kind === 'order' ||
      (question.kind === 'match' && ctx.match !== null && ctx.match.every((x) => x >= 0)) ||
      (question.kind === 'bucket_sort' &&
        ctx.bucket !== null &&
        ctx.bucket.every((v) => v !== null)) ||
      (question.kind === 'click_word' && ctx.click !== null))

  function onSubmit() {
    if (reveal) {
      if (idx + 1 >= total) {
        setFinished(true)
        recordResult(subjectId, activityId, score, total)
        return
      }
      setIdx((i) => i + 1)
      return
    }
    const ok = evaluate(question, ctx)
    if (ok === null) return
    if (ok) setScore((s) => s + 1)
    setReveal(true)
  }

  const progress = finished ? 100 : ((idx + (reveal ? 1 : 0)) / total) * 100

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Inici', to: '/' },
          { label: 'Assignatures', to: '/assignatures' },
          { label: subject.short, to: `/assignatura/${subjectId}` },
          { label: activity.title },
        ]}
      />
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--line)] pb-8">
        <div className="min-w-0">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Sessió de pràctica · {subject.short}
          </p>
          <h1 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">
            {activity.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">{activity.blurb}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono-label max-w-xs border border-[var(--line)] px-3 py-2 text-[9px] uppercase leading-snug tracking-[0.12em] text-[var(--ink-muted)]">
            {activity.inspiredBy}
          </span>
          <button
            type="button"
            onClick={() => nav(`/assignatura/${subjectId}`)}
            className="font-mono-label border border-[var(--line)] bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[var(--ink)] hover:border-[var(--line-strong)]"
          >
            Tornar a l’assignatura
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
        {finished ? (
          <motion.div
            key="end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border border-[var(--line-strong)] bg-[var(--surface)] p-10 text-center"
          >
            <p className="font-mono-label text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
              Activitat completada
            </p>
            <p className="font-display mt-4 text-5xl font-extrabold tabular-nums text-[var(--ink)]">
              {score}/{total}
            </p>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              Puntuació desada localment al navegador.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to={`/assignatura/${subjectId}`}
                className="font-mono-label bg-[var(--accent)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--page)] hover:bg-[var(--accent-hover)]"
              >
                Més activitats
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIdx(0)
                  setReveal(false)
                  setCtx(emptyCtx())
                  setScore(0)
                  setFinished(false)
                }}
                className="font-mono-label border border-[var(--line)] px-8 py-3 text-[11px] uppercase tracking-[0.18em] text-[var(--ink)] hover:border-[var(--line-strong)]"
              >
                Tornar a fer-la
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.article
            key={question.id}
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
                {question.kind === 'mcq'
                  ? 'Opcions'
                  : question.kind === 'true_false'
                    ? 'V/F'
                    : question.kind === 'order'
                      ? 'Ordre'
                      : question.kind === 'match'
                        ? 'Relació'
                        : question.kind === 'bucket_sort'
                          ? 'Classifica'
                          : 'Pica mot'}
              </span>
            </div>
            <ExamSourceLink
              source={question.examSource}
              variant={activity.activityKind === 'interactive' ? 'interactive' : 'official'}
            />
            <h2 className="font-display mt-8 text-lg font-semibold leading-snug text-[var(--ink)] sm:text-xl">
              {question.prompt}
            </h2>

            <div className="mt-8">
              {question.kind === 'mcq' && (
                <McqBlock
                  options={question.options}
                  correctIndex={question.correctIndex}
                  value={ctx.mcq}
                  onChange={(i) => setCtx((c) => ({ ...c, mcq: i }))}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
              {question.kind === 'true_false' && (
                <TrueFalseBlock
                  correct={question.correct}
                  value={ctx.tf}
                  onChange={(v) => setCtx((c) => ({ ...c, tf: v }))}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
              {question.kind === 'order' && ctx.order && (
                <OrderBlock
                  items={question.items}
                  order={ctx.order}
                  onOrderChange={(o) => setCtx((c) => ({ ...c, order: o }))}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
              {question.kind === 'match' && ctx.match && (
                <MatchBlock
                  left={question.left}
                  right={question.right}
                  pairs={question.pairs}
                  selected={ctx.match}
                  onSelectedChange={(s) => setCtx((c) => ({ ...c, match: s }))}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
              {question.kind === 'bucket_sort' && ctx.bucket && (
                <BucketSortBlock
                  bucketA={question.bucketA}
                  bucketB={question.bucketB}
                  items={question.items}
                  value={ctx.bucket}
                  onChange={(b) => setCtx((c) => ({ ...c, bucket: b }))}
                  correct={question.correctBucket}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
              {question.kind === 'click_word' && (
                <ClickWordBlock
                  tokens={question.tokens}
                  correctIndex={question.correctIndex}
                  value={ctx.click}
                  onChange={(i) => setCtx((c) => ({ ...c, click: i }))}
                  reveal={reveal}
                  disabled={reveal}
                />
              )}
            </div>

            {reveal && question.explanation && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 border border-[var(--line)] bg-[var(--page)] p-4 text-sm leading-relaxed text-[var(--ink-muted)]"
              >
                <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                  Pauta ·{' '}
                </span>
                {question.explanation}
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
        )}
      </AnimatePresence>
    </div>
  )
}
