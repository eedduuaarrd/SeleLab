import { NavLink, Outlet } from 'react-router-dom'
import { SeoJsonLd } from './Seo'
import { SITE_URL } from '../config/site'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'font-mono-label text-xs uppercase tracking-[0.18em] px-3 py-2 transition-colors border-b-2 -mb-[2px]',
    isActive
      ? 'border-[var(--accent)] text-[var(--ink)]'
      : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]',
  ].join(' ')

export function Shell() {
  return (
    <div className="app-backdrop relative min-h-dvh overflow-x-hidden">
      <SeoJsonLd />
      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--page)]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 py-4 sm:px-6">
            <NavLink to="/" className="group flex items-start gap-3">
              <span
                className="font-mono-label mt-1 hidden text-[10px] leading-none text-[var(--ink-muted)] sm:block"
                aria-hidden
              >
                ╱
              </span>
              <div>
                <span className="font-display text-xl font-extrabold tracking-tight text-[var(--ink)] sm:text-2xl">
                  SeleLab
                </span>
                <p className="font-mono-label mt-0.5 text-[10px] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
                  pau · models oficials · generalitat
                </p>
              </div>
            </NavLink>
            <nav
              className="flex flex-wrap items-end gap-x-1 gap-y-0 border-b border-[var(--line)]"
              aria-label="Navegació principal"
            >
              <NavLink to="/" className={linkClass} end>
                Inici
              </NavLink>
              <NavLink to="/assignatures" className={linkClass}>
                Assignatures
              </NavLink>
              <NavLink to="/simulador" className={linkClass}>
                Simulador
              </NavLink>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
          <Outlet />
        </main>
        <footer className="border-t border-[var(--line)] py-10">
          <p className="mx-auto max-w-2xl px-4 text-center font-mono-label text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--ink-muted)] sm:px-6">
            Les preguntes «Proves d’accés» provenen dels PDF oficials. La «Pràctica interactiva» és un banc
            SeleLab per matèria (enllaç al portal de models PAU).
          </p>
          <nav
            className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-4 gap-y-2 px-4 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)] sm:px-6"
            aria-label="Peu de pàgina"
          >
            <NavLink to="/sobre" className="hover:text-[var(--accent)]">
              Sobre
            </NavLink>
            <span aria-hidden className="text-[var(--line-strong)]">
              ·
            </span>
            <NavLink to="/privacitat" className="hover:text-[var(--accent)]">
              Privacitat
            </NavLink>
            <span aria-hidden className="text-[var(--line-strong)]">
              ·
            </span>
            <NavLink to="/cookies" className="hover:text-[var(--accent)]">
              Cookies
            </NavLink>
            <span aria-hidden className="text-[var(--line-strong)]">
              ·
            </span>
            <NavLink to="/avis-legal" className="hover:text-[var(--accent)]">
              Avís legal
            </NavLink>
          </nav>
          <p className="mx-auto mt-4 max-w-2xl px-4 text-center sm:px-6">
            <a
              href={SITE_URL}
              className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline"
            >
              selelab.xyz
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
