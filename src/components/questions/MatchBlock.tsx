import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { shuffle } from '../../lib/shuffle'

type Props = {
  left: string[]
  right: string[]
  pairs: number[]
  selected: number[]
  onSelectedChange: (s: number[]) => void
  reveal: boolean
  disabled: boolean
}

export function MatchBlock({
  left,
  right,
  pairs,
  selected,
  onSelectedChange,
  reveal,
  disabled,
}: Props) {
  const rightOrder = useMemo(() => shuffle(right.map((_, i) => i)), [right.join('|')])

  function setAt(row: number, rightIdx: number) {
    if (disabled || reveal) return
    const next = [...selected]
    next[row] = rightIdx
    onSelectedChange(next)
  }

  const dup = useMemo(() => {
    const seen = new Set<number>()
    const d = new Set<number>()
    for (const v of selected) {
      if (v < 0) continue
      if (seen.has(v)) d.add(v)
      seen.add(v)
    }
    return d
  }, [selected])

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <ul className="space-y-2">
          {left.map((l, i) => (
            <li
              key={i}
              className="border border-[var(--line)] bg-[var(--page)]/40 px-3 py-2 text-sm text-[var(--ink)]"
            >
              {l}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          {left.map((_, row) => {
            const sel = selected[row] ?? -1
            const ok = reveal && sel === pairs[row]
            const bad = reveal && sel >= 0 && sel !== pairs[row]
            const border = reveal
              ? ok
                ? 'border-emerald-600/60'
                : bad
                  ? 'border-rose-700/55'
                  : 'border-[var(--line)]'
              : dup.has(sel) && sel >= 0
                ? 'border-amber-600/50'
                : 'border-[var(--line)]'

            return (
              <motion.div key={row} layout className={`border bg-[var(--surface)] p-2 ${border}`}>
                <label className="sr-only" htmlFor={`match-${row}`}>
                  Opció per la fila {row + 1}
                </label>
                <select
                  id={`match-${row}`}
                  disabled={disabled || reveal}
                  value={sel >= 0 ? sel : ''}
                  onChange={(e) => {
                    const v = e.target.value === '' ? -1 : Number(e.target.value)
                    setAt(row, v)
                  }}
                  className="font-mono-label w-full border border-[var(--line)] bg-[var(--page)] px-3 py-2 text-xs text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                >
                  <option value="">— Tria —</option>
                  {rightOrder.map((ri) => (
                    <option key={ri} value={ri}>
                      {right[ri]}
                    </option>
                  ))}
                </select>
              </motion.div>
            )
          })}
        </div>
      </div>
      {reveal && (
        <p className="text-sm text-[var(--ink-muted)]">
          Pauta: cada concepte de l’esquerra es relaciona amb la definició indicada al material.
        </p>
      )}
    </div>
  )
}
