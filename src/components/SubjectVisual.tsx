import { useId } from 'react'

type Size = 'sm' | 'md' | 'lg'

const TINT: Record<string, string> = {
  catala: '#b8a060',
  castella: '#c4706a',
  angles: '#6a9ec4',
  historia: '#d4a03c',
  filosofia: '#9a8b9e',
  matematiques: '#4db8c4',
  fisica: '#6b8fc9',
  quimica: '#9bc85c',
  biologia: '#6fb07a',
  cmc: '#d97a5c',
  'historia-art': '#c98a9b',
}

const box: Record<Size, string> = {
  sm: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  md: 'h-24 w-24 sm:h-28 sm:w-28',
  lg: 'h-36 w-36 sm:h-44 sm:w-44',
}

type Props = {
  subjectId: string
  size?: Size
  className?: string
}

export function SubjectVisual({ subjectId, size = 'sm', className = '' }: Props) {
  const uid = useId().replace(/:/g, '')
  const tint = TINT[subjectId] ?? '#f0b429'

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-sm ${box[size]} ${className}`}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-full opacity-25 blur-2xl"
        style={{
          background: `radial-gradient(circle at 35% 25%, ${tint} 0%, transparent 65%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[#090807]/80" />
      {subjectId === 'catala' && <VisualCatala uid={uid} tint={tint} />}
      {subjectId === 'castella' && <VisualCastella uid={uid} tint={tint} />}
      {subjectId === 'angles' && <VisualAngles uid={uid} tint={tint} />}
      {subjectId === 'historia' && <VisualHistoria uid={uid} tint={tint} />}
      {subjectId === 'filosofia' && <VisualFilosofia uid={uid} tint={tint} />}
      {subjectId === 'matematiques' && <VisualMat uid={uid} tint={tint} />}
      {subjectId === 'fisica' && <VisualFisica uid={uid} tint={tint} />}
      {subjectId === 'quimica' && <VisualQuimica uid={uid} tint={tint} />}
      {subjectId === 'biologia' && <VisualBio uid={uid} tint={tint} />}
      {subjectId === 'cmc' && <VisualCmc uid={uid} tint={tint} />}
      {subjectId === 'historia-art' && <VisualArt uid={uid} tint={tint} />}
    </div>
  )
}

function VisualCatala({ uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <linearGradient id={`${uid}-c1`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tint} stopOpacity="0.35" />
          <stop offset="100%" stopColor={tint} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <ellipse cx="52" cy="48" rx="38" ry="36" fill={`url(#${uid}-c1)`} opacity="0.9" />
      <g opacity="0.85">
        <rect x="22" y="32" width="56" height="3" rx="1" fill={tint} opacity="0.9" />
        <rect x="22" y="42" width="48" height="3" rx="1" fill={tint} opacity="0.55" />
        <rect x="22" y="52" width="52" height="3" rx="1" fill={tint} opacity="0.4" />
        <rect x="22" y="62" width="40" height="3" rx="1" fill={tint} opacity="0.3" />
      </g>
      <path
        d="M68 28 L78 38 L68 48"
        stroke={tint}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  )
}

function VisualCastella({ uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <radialGradient id={`${uid}-r1`}>
          <stop offset="0%" stopColor={tint} stopOpacity="0.4" />
          <stop offset="100%" stopColor={tint} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="45" r="32" fill={`url(#${uid}-r1)`} />
      <path
        d="M28 58 Q50 42 72 58"
        stroke={tint}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      <circle cx="72" cy="58" r="4" fill={tint} opacity="0.9" />
      <line x1="38" y1="68" x2="62" y2="68" stroke={tint} strokeWidth="1.5" opacity="0.35" />
    </svg>
  )
}

function VisualAngles({ uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <linearGradient id={`${uid}-a1`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={tint} stopOpacity="0.25" />
          <stop offset="100%" stopColor={tint} stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="36" fill={`url(#${uid}-a1)`} />
      <ellipse cx="50" cy="50" rx="36" ry="14" stroke={tint} strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="14" ry="36" stroke={tint} strokeWidth="1.5" opacity="0.35" />
      <path
        d="M50 14 A36 36 0 0 1 86 50"
        stroke={tint}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />
      <circle cx="50" cy="50" r="6" fill={tint} opacity="0.85" />
    </svg>
  )
}

function VisualHistoria({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <polygon
        points="50,18 82,88 18,88"
        fill={tint}
        opacity="0.12"
      />
      <path d="M32 88 L50 22 L68 88 Z" stroke={tint} strokeWidth="2" fill="none" opacity="0.55" />
      <rect x="38" y="58" width="24" height="22" stroke={tint} strokeWidth="1.5" opacity="0.4" fill={tint} fillOpacity="0.08" />
      <line x1="50" y1="22" x2="50" y2="58" stroke={tint} strokeWidth="1.5" opacity="0.35" />
    </svg>
  )
}

function VisualFilosofia({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <circle cx="50" cy="38" r="8" fill={tint} opacity="0.85" />
      <circle cx="28" cy="62" r="6" fill={tint} opacity="0.45" />
      <circle cx="72" cy="62" r="6" fill={tint} opacity="0.45" />
      <line x1="50" y1="46" x2="28" y2="56" stroke={tint} strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="46" x2="72" y2="56" stroke={tint} strokeWidth="1.5" opacity="0.5" />
      <line x1="28" y1="62" x2="72" y2="62" stroke={tint} strokeWidth="1.5" opacity="0.35" />
      <circle cx="50" cy="78" r="5" stroke={tint} strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  )
}

function VisualMat({ uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <linearGradient id={`${uid}-m1`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={tint} stopOpacity="0" />
          <stop offset="50%" stopColor={tint} stopOpacity="0.35" />
          <stop offset="100%" stopColor={tint} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="18" y1="72" x2="82" y2="72" stroke={tint} strokeWidth="1.2" opacity="0.35" />
      <line x1="22" y1="78" x2="22" y2="32" stroke={tint} strokeWidth="1.2" opacity="0.35" />
      <path
        d="M22 68 Q38 28 58 48 T82 38"
        stroke={tint}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <rect x="58" y="24" width="22" height="14" rx="2" fill={`url(#${uid}-m1)`} opacity="0.6" />
    </svg>
  )
}

function VisualFisica({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <ellipse cx="50" cy="50" rx="38" ry="16" stroke={tint} strokeWidth="1.2" opacity="0.25" />
      <ellipse cx="50" cy="50" rx="38" ry="16" stroke={tint} strokeWidth="1.2" opacity="0.45" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="16" stroke={tint} strokeWidth="1.2" opacity="0.35" transform="rotate(-60 50 50)" />
      <circle cx="50" cy="50" r="10" fill={tint} opacity="0.9" />
      <circle cx="50" cy="50" r="4" fill="#090807" opacity="0.5" />
    </svg>
  )
}

function VisualQuimica({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <polygon
        points="50,22 78,38 78,66 50,82 22,66 22,38"
        stroke={tint}
        strokeWidth="2"
        fill={tint}
        fillOpacity="0.12"
        opacity="0.9"
      />
      <line x1="50" y1="22" x2="50" y2="50" stroke={tint} strokeWidth="1.5" opacity="0.45" />
      <line x1="50" y1="50" x2="78" y2="38" stroke={tint} strokeWidth="1.5" opacity="0.45" />
      <circle cx="50" cy="50" r="7" fill={tint} opacity="0.75" />
      <circle cx="50" cy="22" r="5" fill={tint} opacity="0.5" />
    </svg>
  )
}

function VisualBio({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <path
        d="M30 20 Q48 40 30 60 Q48 80 30 96"
        stroke={tint}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M70 20 Q52 40 70 60 Q52 80 70 96"
        stroke={tint}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      <line x1="40" y1="38" x2="60" y2="46" stroke={tint} strokeWidth="1.2" opacity="0.4" />
      <line x1="38" y1="54" x2="62" y2="62" stroke={tint} strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

function VisualCmc({ uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <linearGradient id={`${uid}-w1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tint} stopOpacity="0.35" />
          <stop offset="100%" stopColor={tint} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M10 55 Q30 35 50 55 T90 55"
        stroke={tint}
        strokeWidth="3"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M10 65 Q35 45 55 65 T90 62"
        stroke={tint}
        strokeWidth="2.5"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M10 75 Q40 58 60 75 T90 72"
        stroke={tint}
        strokeWidth="2"
        fill="none"
        opacity="0.75"
      />
      <rect x="15" y="28" width="70" height="18" rx="3" fill={`url(#${uid}-w1)`} opacity="0.5" />
    </svg>
  )
}

function VisualArt({ uid: _uid, tint }: { uid: string; tint: string }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
      <rect x="18" y="22" width="64" height="56" stroke={tint} strokeWidth="2" fill="none" opacity="0.55" />
      <rect x="24" y="28" width="52" height="44" fill={tint} fillOpacity="0.08" />
      <path d="M28 72 L42 44 L56 60 L72 36 L82 72 Z" fill={tint} opacity="0.35" />
      <circle cx="38" cy="38" r="6" fill={tint} opacity="0.5" />
      <path d="M62 48 Q72 38 78 52" stroke={tint} strokeWidth="2" fill="none" opacity="0.45" />
    </svg>
  )
}
