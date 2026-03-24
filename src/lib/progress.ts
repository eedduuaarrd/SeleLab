const KEY = 'selelab-progress-v1'

export type ActivityProgress = {
  completed: boolean
  bestScore: number
  lastAt: string
}

export type ProgressMap = Record<string, ActivityProgress>

function load(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const p = JSON.parse(raw) as ProgressMap
    return p && typeof p === 'object' ? p : {}
  } catch {
    return {}
  }
}

function save(m: ProgressMap) {
  localStorage.setItem(KEY, JSON.stringify(m))
}

export function activityKey(subjectId: string, activityId: string) {
  return `${subjectId}::${activityId}`
}

export function getProgress(subjectId: string, activityId: string): ActivityProgress | undefined {
  return load()[activityKey(subjectId, activityId)]
}

export function recordResult(subjectId: string, activityId: string, score: number, total: number) {
  const k = activityKey(subjectId, activityId)
  const m = load()
  const prev = m[k]
  const ratio = total > 0 ? score / total : 0
  const best = Math.max(prev?.bestScore ?? 0, ratio)
  m[k] = {
    completed: true,
    bestScore: best,
    lastAt: new Date().toISOString(),
  }
  save(m)
}
