import { motion } from 'framer-motion'

type Props = {
  correct: boolean
  value: boolean | null
  onChange: (v: boolean) => void
  reveal: boolean
  disabled: boolean
}

export function TrueFalseBlock({ correct, value, onChange, reveal, disabled }: Props) {
  const btn = (v: boolean, label: string) => {
    const isSel = value === v
    const isOk = v === correct
    const show = reveal
    const tone = show
      ? isOk
        ? 'border-emerald-600/70 bg-emerald-950/40 text-emerald-100'
        : isSel
          ? 'border-rose-700/60 bg-rose-950/35 text-rose-100'
          : 'border-[var(--line)] bg-[var(--page)]/40 text-[var(--ink-muted)]'
      : isSel
        ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink)]'
        : 'border-[var(--line)] bg-[var(--page)]/30 text-[var(--ink)] hover:border-[var(--line-strong)]'

    return (
      <motion.button
        type="button"
        disabled={disabled}
        onClick={() => onChange(v)}
        className={`flex-1 border px-6 py-4 text-base font-medium transition-colors ${tone}`}
        whileHover={!disabled ? { y: -1 } : {}}
        whileTap={!disabled ? { scale: 0.99 } : {}}
      >
        {label}
      </motion.button>
    )
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {btn(true, 'Vertader')}
      {btn(false, 'Fals')}
    </div>
  )
}
