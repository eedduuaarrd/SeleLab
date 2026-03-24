import type { ExamSource } from '../types/content'

type Variant = 'official' | 'interactive'

/** Origen de la pregunta: PDF oficial o pràctica SeleLab. */
export function ExamSourceLink({
  source,
  variant = 'official',
}: {
  source: ExamSource
  variant?: Variant
}) {
  const isInteractive = variant === 'interactive'
  return (
    <div className="flex max-w-xl flex-col gap-2 border border-[var(--line-strong)] bg-[var(--page)] px-3 py-2 text-left">
      <p className="font-mono-label text-[9px] uppercase leading-snug tracking-[0.14em] text-[var(--ink-muted)]">
        {isInteractive ? 'Tipus de pregunta' : 'Origen de la pregunta'}
      </p>
      <p className="text-sm font-medium leading-snug text-[var(--ink)]">{source.label}</p>
      <a
        href={source.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono-label w-fit text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] underline-offset-4 hover:underline"
      >
        {isInteractive
          ? 'Models PAU i recursos (Canal Universitats)'
          : 'Obrir PDF de l’examen (Generalitat)'}
      </a>
    </div>
  )
}
