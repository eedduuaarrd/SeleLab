import { shuffle } from '../../lib/shuffle'
import type { Question } from '../../types/content'
import { VERBATIM_PAU23_ANGLES } from './verbatimAngles2023'
import { VERBATIM_PAU24_ANGLES } from './verbatimAngles2024'
import { VERBATIM_PAU25_ANGLES } from './verbatimAngles2025'
import { VERBATIM_PAU25_ANGLES_READING_TF } from './verbatimAngles2025ReadingTF'
import { VERBATIM_PAU23_CASTELLA } from './verbatimCastella2023'
import { VERBATIM_PAU24_CASTELLA } from './verbatimCastella2024'
import { VERBATIM_PAU25_CASTELLA } from './verbatimCastella2025'
import { VERBATIM_PAU24_CATALA } from './verbatimCatala2024'
import { VERBATIM_PAU25_CATALA } from './verbatimCatala2025'
import { VERBATIM_PAU23_CATALA } from './verbatimCatala2023'
import { VERBATIM_PAU24_CIEN_GEN } from './verbatimCienciesGenerals2024'
import { VERBATIM_PAU25_CIEN_GEN } from './verbatimCienciesGenerals2025'
import { VERBATIM_PAU25_CIEN_GEN_EXTRA } from './verbatimCienciesGenerals2025Extra'
import { VERBATIM_PAU23_BIOLOGIA_EXTRA } from './verbatimBiologia2023'
import { VERBATIM_PAU24_BIOLOGIA_EXTRA } from './verbatimBiologia2024'
import {
  VERBATIM_PAU25_BIOLOGIA,
  VERBATIM_PAU25_FISICA,
  VERBATIM_PAU25_QUIMICA,
} from './verbatimFisicaQuimicaBio2025'
import { VERBATIM_PAU23_FISICA_EXTRA } from './verbatimFisica2023'
import { VERBATIM_PAU24_FISICA_EXTRA } from './verbatimFisica2024'
import { VERBATIM_PAU25_FILOSOFIA } from './verbatimFilosofia2025'
import { VERBATIM_PAU23_FILOSOFIA } from './verbatimFilosofia2023'
import { VERBATIM_PAU24_FILOSOFIA } from './verbatimFilosofia2024'
import { VERBATIM_PAU25_HISTORIA } from './verbatimHistoria2025'
import { VERBATIM_PAU25_HISTORIA_EX1_TF } from './verbatimHistoria2025Exercise1TF'
import { VERBATIM_PAU23_HISTORIA_ART_EXTRA } from './verbatimHistoriaArt2023TF'
import { VERBATIM_PAU24_HISTORIA_ART_EXTRA } from './verbatimHistoriaArt2024TF'
import { VERBATIM_PAU25_HISTORIA_ART } from './verbatimHistoriaArt2025'
import { VERBATIM_PAU23_MATEMATIQUES } from './verbatimMatematiques2023'
import { VERBATIM_PAU24_MATEMATIQUES } from './verbatimMatematiques2024'
import { VERBATIM_PAU25_MATEMATIQUES } from './verbatimMatematiques2025'
import { VERBATIM_PAU23_QUIMICA_EXTRA } from './verbatimQuimica2023'
import { VERBATIM_PAU24_QUIMICA_EXTRA } from './verbatimQuimica2024'

/** Assignatures amb piscina d’ítems (unió de models PAU de diversos anys / sèries). */
const pools: Record<string, readonly Question[]> = {
  catala: [...VERBATIM_PAU25_CATALA, ...VERBATIM_PAU24_CATALA, ...VERBATIM_PAU23_CATALA],
  historia: [...VERBATIM_PAU25_HISTORIA, ...VERBATIM_PAU25_HISTORIA_EX1_TF],
  'historia-art': [
    ...VERBATIM_PAU25_HISTORIA_ART,
    ...VERBATIM_PAU24_HISTORIA_ART_EXTRA,
    ...VERBATIM_PAU23_HISTORIA_ART_EXTRA,
  ],
  angles: [
    ...VERBATIM_PAU25_ANGLES,
    ...VERBATIM_PAU25_ANGLES_READING_TF,
    ...VERBATIM_PAU24_ANGLES,
    ...VERBATIM_PAU23_ANGLES,
  ],
  castella: [...VERBATIM_PAU25_CASTELLA, ...VERBATIM_PAU24_CASTELLA, ...VERBATIM_PAU23_CASTELLA],
  filosofia: [...VERBATIM_PAU25_FILOSOFIA, ...VERBATIM_PAU24_FILOSOFIA, ...VERBATIM_PAU23_FILOSOFIA],
  matematiques: [
    ...VERBATIM_PAU25_MATEMATIQUES,
    ...VERBATIM_PAU24_MATEMATIQUES,
    ...VERBATIM_PAU23_MATEMATIQUES,
  ],
  fisica: [...VERBATIM_PAU25_FISICA, ...VERBATIM_PAU24_FISICA_EXTRA, ...VERBATIM_PAU23_FISICA_EXTRA],
  quimica: [...VERBATIM_PAU25_QUIMICA, ...VERBATIM_PAU24_QUIMICA_EXTRA, ...VERBATIM_PAU23_QUIMICA_EXTRA],
  biologia: [
    ...VERBATIM_PAU25_BIOLOGIA,
    ...VERBATIM_PAU24_BIOLOGIA_EXTRA,
    ...VERBATIM_PAU23_BIOLOGIA_EXTRA,
  ],
  /** Ciències generals PAU ≈ continguts CMC (ciència, Terra, biologia, física). */
  cmc: [
    ...VERBATIM_PAU25_CIEN_GEN,
    ...VERBATIM_PAU25_CIEN_GEN_EXTRA,
    ...VERBATIM_PAU24_CIEN_GEN,
  ],
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
