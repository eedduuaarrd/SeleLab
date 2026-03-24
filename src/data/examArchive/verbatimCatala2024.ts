import type { ExamSource, Question } from '../../types/content'
import { PAU24_CATALA_ORD_JL_PDF } from './constants'

function src(ref: string, short: string): ExamSource {
  return {
    label: `PAU 2024 · ordinària · sèrie 1 · ${short}`,
    pdfUrl: PAU24_CATALA_ORD_JL_PDF,
    reference: ref,
  }
}

/**
 * Transcripció d’ítems tancats (V/F) del model ordinari 2024, opcions A i B.
 * Pauta: PDF de correcció oficial (pau_llca24jp.pdf).
 */
export const VERBATIM_PAU24_CATALA: Question[] = [
  // OPCIÓ A — 1.1 (text Pere Calders)
  {
    kind: 'true_false',
    id: 'c24-a-1-1a',
    prompt: '«El narrador era ric des de la infantesa.»',
    correct: false,
    examSource: src('1.1 opció A a', 'comprensió 1.1 a'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-1b',
    prompt: '«El jardí envoltava la casa des del darrere.»',
    correct: false,
    examSource: src('1.1 opció A b', 'comprensió 1.1 b'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-1c',
    prompt: '«La casa del narrador era molt lluminosa.»',
    correct: true,
    examSource: src('1.1 opció A c', 'comprensió 1.1 c'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-1d',
    prompt: '«Tres criats tenien cura de la casa.»',
    correct: false,
    examSource: src('1.1 opció A d', 'comprensió 1.1 d'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-1e',
    prompt: '«El narrador era una persona generosa.»',
    correct: true,
    examSource: src('1.1 opció A e', 'comprensió 1.1 e'),
  },
  // OPCIÓ A — 1.5.2 (Joan Puig i Ferreter)
  {
    kind: 'true_false',
    id: 'c24-a-1-5-2a',
    prompt: '«Al començament, quan en Vergés la va a veure, la Cecília està sola.»',
    correct: true,
    examSource: src('1.5.2 opció A a', 'lectura 1.5.2 a'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-2b',
    prompt:
      '«El pare de la Cecília l’amenaça de no pagar-li l’any que li falta per a acabar els estudis.»',
    correct: true,
    examSource: src('1.5.2 opció A b', 'lectura 1.5.2 b'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-2c',
    prompt: '«La Juliana s’assembla molt a la seva filla.»',
    correct: false,
    examSource: src('1.5.2 opció A c', 'lectura 1.5.2 c'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-2d',
    prompt: '«La gent del poble considera que la sequera és un càstig diví.»',
    correct: true,
    examSource: src('1.5.2 opció A d', 'lectura 1.5.2 d'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-2e',
    prompt: '«A mossèn Gregori li sembla bé que la Cecília hagi estudiat a ciutat.»',
    correct: false,
    examSource: src('1.5.2 opció A e', 'lectura 1.5.2 e'),
  },
  // OPCIÓ A — 1.5.4 (coneixements literaris)
  {
    kind: 'true_false',
    id: 'c24-a-1-5-4a',
    prompt:
      '«El tòpic literari locus amoenus designa un lloc agradable (literalment «lloc agradable»).»',
    correct: true,
    examSource: src('1.5.4 opció A a', 'literatura 1.5.4 a'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-4b',
    prompt: '«Un vers de set síl·labes s’anomena hexasíl·lab.»',
    correct: false,
    examSource: src('1.5.4 opció A b', 'literatura 1.5.4 b'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-4c',
    prompt: '«La cesura divideix un vers en hemistiquis.»',
    correct: true,
    examSource: src('1.5.4 opció A c', 'literatura 1.5.4 c'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-4d',
    prompt: '«La hipèrbole és un tòpic literari.»',
    correct: false,
    examSource: src('1.5.4 opció A d', 'literatura 1.5.4 d'),
  },
  {
    kind: 'true_false',
    id: 'c24-a-1-5-4e',
    prompt:
      '«Els mites són relats tradicionals protagonitzats per éssers sobrenaturals o extraordinaris.»',
    correct: true,
    examSource: src('1.5.4 opció A e', 'literatura 1.5.4 e'),
  },
  // OPCIÓ B — 1.5.2 (La plaça del Diamant)
  {
    kind: 'true_false',
    id: 'c24-b-1-5-2a',
    prompt: '«La Natàlia i en Quimet van tenir dues filles.»',
    correct: false,
    examSource: src('1.5.2 opció B a', 'lectura 1.5.2 a'),
  },
  {
    kind: 'true_false',
    id: 'c24-b-1-5-2b',
    prompt: '«La Natàlia pregunta a en Quimet qui és la Maria.»',
    correct: false,
    examSource: src('1.5.2 opció B b', 'lectura 1.5.2 b'),
  },
  {
    kind: 'true_false',
    id: 'c24-b-1-5-2c',
    prompt: '«En Quimet es compra una moto amb el que ha guanyat restaurant mobles.»',
    correct: true,
    examSource: src('1.5.2 opció B c', 'lectura 1.5.2 c'),
  },
  {
    kind: 'true_false',
    id: 'c24-b-1-5-2d',
    prompt: '«La filla de la Natàlia i en Quimet es diu Natàlia.»',
    correct: false,
    examSource: src('1.5.2 opció B d', 'lectura 1.5.2 d'),
  },
  {
    kind: 'true_false',
    id: 'c24-b-1-5-2e',
    prompt: '«Quan es proclama la República, en Quimet es passeja pels carrers amb una bandera.»',
    correct: true,
    examSource: src('1.5.2 opció B e', 'lectura 1.5.2 e'),
  },
]
