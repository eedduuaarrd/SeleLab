import { motion } from 'framer-motion'

type Props = {
  tokens: string[]
  correctIndex: number
  value: number | null
  onChange: (i: number) => void
  reveal: boolean
  disabled: boolean
}

export function ClickWordBlock({ tokens, correctIndex, value, onChange, reveal, disabled }: Props) {
  return (
    <div className="border border-[var(--line)] bg-[var(--page)]/40 p-4 leading-relaxed">
      <p className="text-left text-base sm:text-[1.05rem]">
        {tokens.map((tok, i) => {
          const isSel = value === i
          const isCorrect = i === correctIndex
          const show = reveal
          const cls = show
            ? isCorrect
              ? 'bg-emerald-950/50 text-emerald-100 ring-1 ring-emerald-600/60'
              : isSel
                ? 'bg-rose-950/40 text-rose-100 ring-1 ring-rose-700/50'
                : 'text-[var(--ink-muted)]'
            : isSel
              ? 'bg-[var(--accent)]/20 text-[var(--ink)] ring-1 ring-[var(--accent)]'
              : 'text-[var(--ink)] hover:bg-white/5'

          return (
            <span key={i} className="inline">
              {i > 0 ? '\u00A0' : null}
              <motion.button
                type="button"
                disabled={disabled}
                onClick={() => onChange(i)}
                className={`inline rounded-sm px-0.5 transition ${cls}`}
                whileHover={!disabled ? { y: -1 } : {}}
              >
                {tok}
              </motion.button>
            </span>
          )
        })}
      </p>
      <p className="font-mono-label mt-4 text-[9px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        Clica la paraula que respon a la consigna
      </p>
    </div>
  )
}
