import type { Subject } from '../../types/content'

/**
 * Els tallers que abans injectaven preguntes addicionals s’han desactivat:
 * només es volen ítems verificables als PDF d’examen.
 */
export function mergeWorkshopsIntoSubjects(base: Subject[]): Subject[] {
  return base
}
