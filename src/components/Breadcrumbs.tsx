import { Link } from 'react-router-dom'

export type BreadcrumbItem = {
  label: string
  /** Si no hi ha `to`, es mostra com a pàgina actual */
  to?: string
}

/** Fil d’Ariadna per subpàgines: Inici → secció → … */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Camí de navegació" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-[var(--line-strong)]" aria-hidden>
                  /
                </span>
              )}
              {item.to && !isLast ? (
                <Link to={item.to} className="text-[var(--accent)] transition hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'max-w-[min(100%,28rem)] text-[var(--ink)]' : ''}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
