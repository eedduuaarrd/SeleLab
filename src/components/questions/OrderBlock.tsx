import { motion } from 'framer-motion'

type Props = {
  items: string[]
  order: number[]
  onOrderChange: (o: number[]) => void
  reveal: boolean
  disabled: boolean
}

export function OrderBlock({ items, order, onOrderChange, reveal, disabled }: Props) {
  const display = order.map((i) => items[i]!)

  function move(pos: number, dir: -1 | 1) {
    if (disabled || reveal) return
    const n = [...order]
    const j = pos + dir
    if (j < 0 || j >= n.length) return
    ;[n[pos], n[j]] = [n[j]!, n[pos]!]
    onOrderChange(n)
  }

  return (
    <div className="space-y-3">
      <ol className="space-y-2">
        {display.map((text, pos) => (
          <motion.li
            key={`${order[pos]}-${pos}`}
            layout
            className="flex items-stretch gap-2 border border-[var(--line)] bg-[var(--page)]/40"
          >
            <span className="font-mono-label flex w-10 shrink-0 items-center justify-center bg-[var(--surface)] text-[10px] text-[var(--accent)]">
              {pos + 1}
            </span>
            <p className="flex flex-1 items-center py-3 pr-2 text-sm leading-snug text-[var(--ink)]">{text}</p>
            {!reveal && (
              <div className="flex shrink-0 flex-col justify-center gap-1 py-2 pr-2">
                <button
                  type="button"
                  aria-label="Mou amunt"
                  disabled={disabled || pos === 0}
                  onClick={() => move(pos, -1)}
                  className="font-mono-label border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[10px] text-[var(--ink-muted)] hover:border-[var(--line-strong)] disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  aria-label="Mou avall"
                  disabled={disabled || pos === order.length - 1}
                  onClick={() => move(pos, 1)}
                  className="font-mono-label border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[10px] text-[var(--ink-muted)] hover:border-[var(--line-strong)] disabled:opacity-30"
                >
                  ↓
                </button>
              </div>
            )}
          </motion.li>
        ))}
      </ol>
      {reveal && (
        <p
          className={`text-sm ${
            order.every((idx, pos) => idx === pos) ? 'text-emerald-400' : 'text-amber-200/90'
          }`}
        >
          {order.every((idx, pos) => idx === pos)
            ? 'Ordre correcte.'
            : "L'ordre correcte és el de la seqüència original (revisa la pauta)."}
        </p>
      )}
    </div>
  )
}
