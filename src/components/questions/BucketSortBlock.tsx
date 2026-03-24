import { motion } from 'framer-motion'

type Props = {
  bucketA: string
  bucketB: string
  items: string[]
  /** Per ítem: null = sense assignar, 0 = A, 1 = B */
  value: (0 | 1 | null)[]
  onChange: (v: (0 | 1 | null)[]) => void
  correct: (0 | 1)[]
  reveal: boolean
  disabled: boolean
}

export function BucketSortBlock({
  bucketA,
  bucketB,
  items,
  value,
  onChange,
  correct,
  reveal,
  disabled,
}: Props) {
  function setAt(i: number, b: 0 | 1) {
    if (disabled || reveal) return
    const next = [...value]
    next[i] = b
    onChange(next)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className={`border border-dashed border-[var(--line)] bg-[var(--page)]/50 p-3 ${
            reveal ? 'ring-1 ring-[var(--accent)]/30' : ''
          }`}
        >
          <p className="font-mono-label mb-3 border-b border-[var(--line)] pb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
            {bucketA}
          </p>
          <ul className="space-y-2">
            {items.map((it, i) =>
              value[i] === 0 ? (
                <li
                  key={`a-${i}`}
                  className="border border-[var(--line)] bg-[var(--surface)] px-2 py-1.5 text-sm text-[var(--ink)]"
                >
                  {it}
                </li>
              ) : null,
            )}
          </ul>
        </div>
        <div
          className={`border border-dashed border-[var(--line)] bg-[var(--page)]/50 p-3 ${
            reveal ? 'ring-1 ring-[var(--accent)]/30' : ''
          }`}
        >
          <p className="font-mono-label mb-3 border-b border-[var(--line)] pb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
            {bucketB}
          </p>
          <ul className="space-y-2">
            {items.map((it, i) =>
              value[i] === 1 ? (
                <li
                  key={`b-${i}`}
                  className="border border-[var(--line)] bg-[var(--surface)] px-2 py-1.5 text-sm text-[var(--ink)]"
                >
                  {it}
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((it, i) => {
          const sel = value[i]
          const ok = reveal && sel === correct[i]
          const bad = reveal && sel !== null && sel !== correct[i]
          return (
            <li
              key={i}
              className={`flex flex-col gap-2 border border-[var(--line)] bg-[var(--surface)] p-3 sm:flex-row sm:items-center sm:justify-between ${
                reveal ? (ok ? 'border-emerald-700/50' : bad ? 'border-rose-800/50' : '') : ''
              }`}
            >
              <span className="text-sm text-[var(--ink)]">{it}</span>
              <div className="flex gap-2">
                <motion.button
                  type="button"
                  disabled={disabled || reveal}
                  onClick={() => setAt(i, 0)}
                  className={`font-mono-label flex-1 border px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition sm:flex-initial ${
                    sel === 0
                      ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--ink)]'
                      : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)]'
                  }`}
                  whileTap={!reveal ? { scale: 0.98 } : {}}
                >
                  {bucketA.slice(0, 12)}
                  {bucketA.length > 12 ? '…' : ''}
                </motion.button>
                <motion.button
                  type="button"
                  disabled={disabled || reveal}
                  onClick={() => setAt(i, 1)}
                  className={`font-mono-label flex-1 border px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition sm:flex-initial ${
                    sel === 1
                      ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--ink)]'
                      : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)]'
                  }`}
                  whileTap={!reveal ? { scale: 0.98 } : {}}
                >
                  {bucketB.slice(0, 12)}
                  {bucketB.length > 12 ? '…' : ''}
                </motion.button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
