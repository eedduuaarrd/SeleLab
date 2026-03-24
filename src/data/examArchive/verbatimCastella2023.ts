import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/llengua-castellana/ord/pau_lles23jl.pdf'

/** Sèries 1 i 5 — ítems tancats; claus segons pauta oficial (pau_lles23jp.pdf). */
export const VERBATIM_PAU23_CASTELLA: Question[] = [
  {
    kind: 'mcq',
    id: 'es23-s1-a-12',
    prompt:
      'Sèrie 1, OPCIÓ A — 1.2. Señale qué serie, de las cuatro que se proponen, es la única correcta para sustituir todas las palabras siguientes, subrayadas en el texto: voraces, inaudibles, suplantadores, identidad.',
    options: [
      'desganadas, invisibles, suplementarios, identificación',
      'tragadoras, sordos, suplicantes, equivalencia',
      'devoradoras, imperceptibles, impostores, personalidad',
      'comedoras, inapreciables, desertores, similitud',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 1.2', '1.2'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-12',
    prompt:
      'Sèrie 1, OPCIÓ B — 1.2. Indique qué figura retórica, de las que se ofrecen a continuación, aparece en la secuencia, subrayada en el texto, «Las cosas engullen a las cosas precedentes».',
    options: ['retruécano', 'hipérbaton', 'oxímoron', 'personificación'],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 1.2', '1.2'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-a-14c',
    prompt:
      'Sèrie 1, OPCIÓ A — 1.4 c) ¿Cuál de las siguientes afirmaciones es correcta? (La Fundación, Buero Vallejo)',
    options: [
      'Max se suicida.',
      'Asel impide que Tomás se suicide.',
      'Berta es un personaje real.',
      'Lino traiciona a sus compañeros.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 1.4 c', '1.4 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-14c',
    prompt:
      'Sèrie 1, OPCIÓ B — 1.4 c) ¿Cuál de las siguientes afirmaciones es correcta? (Nada, Carmen Laforet)',
    options: [
      'Román vive en el piso de la familia materna de Andrea.',
      'Angustias prohíbe a Andrea ir al Barrio Chino.',
      'Juan agradece el trabajo de Gloria.',
      'Andrea permanece dos años en Barcelona.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 1.4 c', '1.4 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-a-22a',
    prompt: 'Sèrie 1, OPCIÓ A — 2.2 a) Accedieron a ___________ (rebelar / revelar) los acuerdos de la Comisión.',
    options: ['rebelar', 'revelar'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-a-22b',
    prompt: 'Sèrie 1, OPCIÓ A — 2.2 b) Hay que huir de los clichés y de los ___________ (prejuicios / perjuicios).',
    options: ['prejuicios', 'perjuicios'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-a-22c',
    prompt: 'Sèrie 1, OPCIÓ A — 2.2 c) Siempre añadía algunas ___________ (especias / especies) a sus platos.',
    options: ['especias', 'especies'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-a-22d',
    prompt: 'Sèrie 1, OPCIÓ A — 2.2 d) El director es una persona muy ___________ (accesible / asequible).',
    options: ['accesible', 'asequible'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció A · 2.2 d', '2.2 d'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-22a',
    prompt:
      'Sèrie 1, OPCIÓ B — 2.2 a) Los científicos aspiran ___________ (sobre todo / sobretodo) a explicar las causas del fenómeno.',
    options: ['sobre todo', 'sobretodo'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-22b',
    prompt:
      'Sèrie 1, OPCIÓ B — 2.2 b) A un personaje de su talla es difícil dejarlo ___________ (aparte / a parte).',
    options: ['aparte', 'a parte'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-22c',
    prompt: 'Sèrie 1, OPCIÓ B — 2.2 c) No sé ___________ (porque / por qué) no quiere ir.',
    options: ['porque', 'por qué'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-b-22d',
    prompt:
      'Sèrie 1, OPCIÓ B — 2.2 d) Hubo muchas discusiones ___________ (entorno / en torno) a aquella cuestión.',
    options: ['entorno', 'en torno'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · opció B · 2.2 d', '2.2 d'),
  },
  {
    kind: 'mcq',
    id: 'es23-s1-com-33',
    prompt:
      'PART COMÚ (sèrie 1) — 3.3. Elija la única que identifica de manera correcta y ordenada el tipo de oración subordinada en cada secuencia.',
    options: [
      '1) de relativo, 2) modal, 3) concesiva, 4) sustantiva',
      '1) de relativo, 2) condicional, 3) causal, 4) sustantiva',
      '1) final, 2) condicional, 3) causal, 4) de relativo',
      '1) final, 2) comparativa, 3) condicional, 4) sustantiva',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 1 · part comú · 3.3', '3.3'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-a-14a',
    prompt:
      'Sèrie 5, OPCIÓ A — 1.4 a) ¿Qué contribuye a que Tomás tome conciencia de su situación? (La Fundación)',
    options: [
      'La presencia de Berta al principio de la obra.',
      'El diálogo con el personaje que está en la cama.',
      'La desaparición de algunos objetos.',
      'Las profesiones iniciales de los personajes.',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció A · 1.4 a', '1.4 a'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-12',
    prompt:
      'Sèrie 5, OPCIÓ B — 1.2. Señale qué serie… subrayadas en el texto: se afanan, locución, incurre, deriva.',
    options: [
      'desisten, comentario, comete, rumbo',
      'compiten, término, perpetra, equivocación',
      'se empeñan, expresión, cae, evolución',
      'añoran, palabra, incide, alejamiento',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 1.2', '1.2'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-a-22a',
    prompt: 'Sèrie 5, OPCIÓ A — 2.2 a) ___________ (Infringió / Infligió) a su rival un duro castigo.',
    options: ['Infringió', 'Infligió'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció A · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-a-22b',
    prompt:
      'Sèrie 5, OPCIÓ A — 2.2 b) Todos los asistentes a la reunión se ___________ (revelaron / rebelaron) contra el nuevo decreto.',
    options: ['revelaron', 'rebelaron'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció A · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-a-22c',
    prompt: 'Sèrie 5, OPCIÓ A — 2.2 c) Dejó ___________ (inerme / inerte) al jabalí de un disparo.',
    options: ['inerme', 'inerte'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció A · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-a-22d',
    prompt: 'Sèrie 5, OPCIÓ A — 2.2 d) Me ___________ (desternillo / destornillo) de risa con Juan.',
    options: ['desternillo', 'destornillo'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció A · 2.2 d', '2.2 d'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-22a',
    prompt: 'Sèrie 5, OPCIÓ B — 2.2 a) No te pongas delante ___________ (mío / de mí).',
    options: ['mío', 'de mí'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 2.2 a', '2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-22b',
    prompt: 'Sèrie 5, OPCIÓ B — 2.2 b) No ___________ (la / le) tengo que pedir permiso.',
    options: ['la', 'le'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 2.2 b', '2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-22c',
    prompt: 'Sèrie 5, OPCIÓ B — 2.2 c) ___________ (A parte / Aparte) de Alberto, no vino nadie.',
    options: ['A parte', 'Aparte'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 2.2 c', '2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-22d',
    prompt: 'Sèrie 5, OPCIÓ B — 2.2 d) ___________ (Marchaos / Marcharos) de aquí, por favor.',
    options: ['Marchaos', 'Marcharos'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 2.2 d', '2.2 d'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-com-33',
    prompt:
      'PART COMÚ (sèrie 5) — 3.3. Función sintáctica de la oración subordinada en cada secuencia.',
    options: [
      '1) sustantiva, 2) concesiva, 3) de relativo, 4) ilativa',
      '1) sustantiva, 2) condicional, 3) ilativa, 4) concesiva',
      '1) condicional, 2) modal, 3) concesiva, 4) de relativo',
      '1) de relativo, 2) consecutiva, 3) sustantiva, 4) causal',
    ],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · part comú · 3.3', '3.3'),
  },
  {
    kind: 'mcq',
    id: 'es23-s5-b-14a',
    prompt: 'Sèrie 5, OPCIÓ B — 1.4 a) ¿Con quién viaja la protagonista a Madrid? (Nada)',
    options: ['Con el padre de Ena.', 'Con Ena.', 'Con Gloria.', 'Con Jaime.'],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2023 · Llengua castellana · sèrie 5 · opció B · 1.4 a', '1.4 a'),
  },
]
