import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/llengua-castellana/ord/pau_lles25jl.pdf'

/** Ítems tancats extrets del model 2025 (sèrie 1). Verificar amb la pauta PDF si hi ha dubte. */
export const VERBATIM_PAU25_CASTELLA: Question[] = [
  {
    kind: 'mcq',
    id: 'es25-1-1',
    prompt:
      'Comprensió lectora — 1.1. ¿Qué enunciado, de los cuatro que se presentan a continuación, corresponde a una interpretación correcta del texto?',
    options: [
      'Las afirmaciones contundentes son la prueba del conocimiento.',
      'Los matices y las ambigüedades no son recomendables.',
      'Hoy en día, si apuestas por la duda, estás condenado a fracasar.',
      'Sócrates pensaba que los más graves errores los cometen los que saben.',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 1.1', '1.1'),
  },
  {
    kind: 'mcq',
    id: 'es25-1-4',
    prompt:
      '1.4. Señale qué serie, de las cuatro que se proponen, es la única correcta para sustituir todas las palabras siguientes, subrayadas en el texto: resbaladizas, férrea, inercia, vociferan.',
    options: [
      'insignificantes, empecinada, pereza, graznan',
      'babosas, cerril, desidia, callan',
      'groseras, dura, negligencia, vocean',
      'problemáticas, firme, rutina, gritan',
    ],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 1.4', '1.4'),
  },
  {
    kind: 'mcq',
    id: 'es25-3-3',
    prompt:
      '3.3. Seleccione la afirmación que mejor describe la secuencia subrayada del texto 2 «ínfulas aristocráticas grotescas» en relación con doña Leonarda.',
    options: [
      'Elogia el refinamiento de doña Leonarda.',
      'Critica su pretensión social.',
      'Describe su elegancia natural.',
      'Muestra su humildad.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 3.3', '3.3'),
  },
  {
    kind: 'mcq',
    id: 'es25-3-4',
    prompt:
      '3.4. Indique cuál de las siguientes figuras retóricas se emplea en el segmento subrayado del texto 1 «una suave estela de ternura».',
    options: ['Sinestesia.', 'Símil.', 'Pleonasmo.', 'Paradoja.'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 3.4', '3.4'),
  },
  {
    kind: 'mcq',
    id: 'es25-4-5',
    prompt: '4.5. ¿Cuál de las siguientes afirmaciones es correcta? (diglosia)',
    options: [
      'Todas las sociedades son diglósicas.',
      'La diglosia implica la mezcla de dos idiomas o variedades en una conversación.',
      'La diglosia solo afecta al vocabulario.',
      'Existe diglosia en las sociedades en las que las variedades lingüísticas muestran diferencias funcionales.',
    ],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 4.5', '4.5'),
  },
  {
    kind: 'mcq',
    id: 'es25-2-2a',
    prompt: '2.2 a) Mi amigo me recomendó que, ___________ (sobre todo / sobretodo), evitara discutir con el profesor.',
    options: ['sobre todo', 'sobretodo', 'sobre-todo', 'sobre, todo'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es25-2-2b',
    prompt: '2.2 b) Todavía no sé ___________ (porque / por qué) no quisiste comprarte el coche eléctrico.',
    options: ['porque', 'por qué', 'porqué', 'por que'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es25-2-2c',
    prompt: '2.2 c) ¿Sabes ya ___________ (dónde / donde) tendrá lugar la asamblea?',
    options: ['dónde', 'donde', 'adonde', 'a donde'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es25-2-2d',
    prompt: '2.2 d) No puedo entenderlo ___________ (sino / si no) me lo explicas bien.',
    options: ['sino', 'si no', 'si-no', 'sí no'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Llengua castellana · sèrie 1 · 2.2 d', '2.2 d'),
  },
]
