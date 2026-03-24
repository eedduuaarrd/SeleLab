import { shuffle } from '../../lib/shuffle'
import type { Question } from '../../types/content'
import { VERBATIM_PAU23_ANGLES } from './verbatimAngles2023'
import { VERBATIM_PAU24_ANGLES } from './verbatimAngles2024'
import { VERBATIM_PAU25_ANGLES } from './verbatimAngles2025'
import { VERBATIM_PAU24_CASTELLA } from './verbatimCastella2024'
import { VERBATIM_PAU25_CASTELLA } from './verbatimCastella2025'
import { VERBATIM_PAU24_CATALA } from './verbatimCatala2024'
import { VERBATIM_PAU25_CATALA } from './verbatimCatala2025'
import { VERBATIM_PAU23_CATALA } from './verbatimCatala2023'
import { VERBATIM_PAU24_CIEN_GEN } from './verbatimCienciesGenerals2024'
import { VERBATIM_PAU25_CIEN_GEN } from './verbatimCienciesGenerals2025'
import { VERBATIM_PAU24_BIOLOGIA } from './verbatimBiologia2024'
import {
  VERBATIM_PAU25_BIOLOGIA,
  VERBATIM_PAU25_FISICA,
  VERBATIM_PAU25_QUIMICA,
} from './verbatimFisicaQuimicaBio2025'
import { VERBATIM_PAU25_FILOSOFIA } from './verbatimFilosofia2025'
import { VERBATIM_PAU25_HISTORIA } from './verbatimHistoria2025'
import { VERBATIM_PAU25_HISTORIA_ART } from './verbatimHistoriaArt2025'
import { VERBATIM_PAU25_MATEMATIQUES } from './verbatimMatematiques2025'

/** Assignatures amb piscina d’ítems (unió de models PAU de diversos anys / sèries). */
const pools: Record<string, readonly Question[]> = {
  catala: [...VERBATIM_PAU25_CATALA, ...VERBATIM_PAU24_CATALA, ...VERBATIM_PAU23_CATALA],
  historia: VERBATIM_PAU25_HISTORIA,
  'historia-art': VERBATIM_PAU25_HISTORIA_ART,
  angles: [...VERBATIM_PAU25_ANGLES, ...VERBATIM_PAU24_ANGLES, ...VERBATIM_PAU23_ANGLES],
  castella: [...VERBATIM_PAU25_CASTELLA, ...VERBATIM_PAU24_CASTELLA],
  filosofia: VERBATIM_PAU25_FILOSOFIA,
  matematiques: VERBATIM_PAU25_MATEMATIQUES,
  fisica: VERBATIM_PAU25_FISICA,
  quimica: VERBATIM_PAU25_QUIMICA,
  biologia: [...VERBATIM_PAU25_BIOLOGIA, ...VERBATIM_PAU24_BIOLOGIA],
  /** Ciències generals PAU ≈ continguts CMC (ciència, Terra, biologia, física). */
  cmc: [...VERBATIM_PAU25_CIEN_GEN, ...VERBATIM_PAU24_CIEN_GEN],
}

export function getVerbatimPool(subjectId: string): Question[] {
  const p = pools[subjectId]
  return p ? [...p] : []
}

export function verbatimPoolSize(subjectId: string): number {
  return pools[subjectId]?.length ?? 0
}

/** Barreja aleatòria d’ítems oficials (sense repetir dins la mateixa sessió). */
export function buildSimulationExam(
  subjectId: string,
  count: number,
  rng: () => number = Math.random,
): Question[] {
  const pool = getVerbatimPool(subjectId)
  if (pool.length === 0) return []
  const shuffled = shuffle(pool, rng)
  const n = Math.max(1, Math.min(count, shuffled.length))
  return shuffled.slice(0, n)
}
