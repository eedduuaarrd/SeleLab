import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/llengua-castellana/ord/pau_lles24jl.pdf'

/** Ítems tancats (sèrie 1, opcions A i B on cal) extrets del model 2024. Contrastar amb la pauta oficial. */
export const VERBATIM_PAU24_CASTELLA: Question[] = [
  {
    kind: 'mcq',
    id: 'es24-a-1-2',
    prompt:
      'OPCIÓN A — 1.2. Señale qué serie, de las cuatro que se proponen, es la única correcta para sustituir todas las palabras siguientes, subrayadas en el texto: hechicera, fantasmagórica, sortilegio, púrpura.',
    options: [
      'repelente, aterradora, espiritismo, tinte',
      'cautivadora, sobrenatural, encanto, escarlata',
      'enloquecedora, tangible, conjuro, colorante',
      'profeta, alucinante, sorteo, dignidad',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció A · 1.2', '1.2'),
  },
  {
    kind: 'mcq',
    id: 'es24-b-1-2',
    prompt:
      'OPCIÓN B — 1.2. Señale qué serie, de las cuatro que se proponen, es la única correcta para sustituir todas las palabras siguientes, subrayadas en el texto: enderezar, pontifican, ágoras, inclemencia.',
    options: [
      'corregir, dogmatizan, asambleas, inflexibilidad',
      'desencorvar, sermonean, plazas, ensañamiento',
      'erguir, disuaden, ferias, rigor',
      'ayudar, animan, congregaciones, crudeza',
    ],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció B · 1.2', '1.2'),
  },
  {
    kind: 'mcq',
    id: 'es24-a-2-2a',
    prompt: 'OPCIÓN A — 2.2 a) Me alegro ___________ (de que / que) seáis felices.',
    options: ['de que', 'que'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció A · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es24-a-2-2b',
    prompt: 'OPCIÓN A — 2.2 b) Tuve que subir al ___________ (onceavo / undécimo) piso.',
    options: ['onceavo', 'undécimo'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció A · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es24-a-2-2c',
    prompt:
      'OPCIÓN A — 2.2 c) Consiguió que cambiara muchas ideas ___________ (acerca de / a cerca de) mi profesión.',
    options: ['acerca de', 'a cerca de'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció A · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es24-a-2-2d',
    prompt:
      'OPCIÓN A — 2.2 d) La víctima, un señor de cuarenta años, fue ___________ (identificado / identificada) enseguida.',
    options: ['identificado', 'identificada'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció A · 2.2 d', '2.2 d'),
  },
  {
    kind: 'mcq',
    id: 'es24-b-2-2a',
    prompt: 'OPCIÓN B — 2.2 a) Me dijo que un mago nunca ___________ (rebela / revela) sus trucos.',
    options: ['rebela', 'revela'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció B · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es24-b-2-2b',
    prompt:
      'OPCIÓN B — 2.2 b) Es posible que se haya ___________ (deshecho / desecho) de todos los documentos.',
    options: ['deshecho', 'desecho'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció B · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es24-b-2-2c',
    prompt:
      'OPCIÓN B — 2.2 c) Juan tiene una ___________ (vasta / basta) experiencia en estas cuestiones.',
    options: ['vasta', 'basta'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció B · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es24-b-2-2d',
    prompt: 'OPCIÓN B — 2.2 d) Las cucarachas ___________ (infectaban / infestaban) la casa.',
    options: ['infectaban', 'infestaban'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2024 · Llengua castellana · sèrie 1 · opció B · 2.2 d', '2.2 d'),
  },
]
