import { motion } from 'framer-motion'

type Props = {
  options: string[]
  correctIndex: number
  value: number | null
  onChange: (i: number) => void
  reveal: boolean
  disabled: boolean
}

export function McqBlock({ options, correctIndex, value, onChange, reveal, disabled }: Props) {
  return (
    <ul className="flex flex-col gap-2" role="list">
      {options.map((opt, i) => {
        const isSel = value === i
        const isCorrect = i === correctIndex
        const show = reveal
        const tone = show
          ? isCorrect
            ? 'border-emerald-600/70 bg-emerald-950/40 text-emerald-100'
            : isSel
              ? 'border-rose-700/60 bg-rose-950/35 text-rose-100'
              : 'border-[var(--line)] bg-[var(--page)]/50 text-[var(--ink-muted)]'
          : isSel
            ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink)]'
            : 'border-[var(--line)] bg-[var(--page)]/30 text-[var(--ink)] hover:border-[var(--line-strong)]'

        return (
          <li key={i}>
            <motion.button
              type="button"
              layout
              disabled={disabled}
              onClick={() => onChange(i)}
              className={`flex w-full border px-4 py-3 text-left text-sm leading-relaxed transition-colors ${tone}`}
              whileHover={!disabled ? { x: 2 } : {}}
              whileTap={!disabled ? { scale: 0.995 } : {}}
            >
              <span className="font-mono-label mr-3 w-6 shrink-0 text-[10px] text-[var(--ink-muted)]">
                {String.fromCharCode(65 + i)}.
              </span>
              <span>{opt}</span>
            </motion.button>
          </li>
        )
      })}
    </ul>
  )
}
