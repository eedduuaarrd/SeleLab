import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/historia/ord/pau_hist25jl.pdf'

/** Exercici 1 — afirmacions basades literalment en els textos A i B (instrucció secreta de Mola; al·locució a la ràdio). */
export const VERBATIM_PAU25_HISTORIA_EX1_TF: Question[] = [
  {
    kind: 'true_false',
    id: 'h25-ta-1',
    prompt:
      'El text A (instrucció secreta) estableix que l’acció del cop d’estat ha de ser «en extremo violenta» per reduir l’enemic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-2',
    prompt:
      'Segons el text A, després de conquerir el poder s’hauria d’instaurar una república parlamentària immediatament.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-3',
    prompt:
      'El text A preveu empresonar els directius de partits, societats o sindicats no afins al moviment.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-4',
    prompt:
      'El text A està datat a Madrid el 25 d’abril de 1936 i el signa «El Director».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-5',
    prompt:
      'El text A identifica el general Emilio Mola com a autor de la instrucció secreta.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-6',
    prompt:
      'Segons el text A, la missió immediata de la dictadura militar seria dissoldre l’exèrcit.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-7',
    prompt:
      'El text B (Mola a la ràdio) nega que el moviment militar fos preparat només per generals ambiciosos i partits dolguts per una derrota electoral.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-8',
    prompt:
      'El text B afirma que l’objectiu del moviment era imposar l’ordre i donar «pan y trabajo».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-9',
    prompt:
      'El text B proposa abraçades de Vergara i pactes del Zanjón com a model de final de conflicte.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-10',
    prompt:
      'El text B situa l’al·locució del general Mola a Ràdio Castilla, a Burgos, l’agost del 1936.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-11',
    prompt:
      'El text B vincula explícitament el remat de l’Estat amb una creu com a símbol de la fe catòlica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-12',
    prompt:
      'El text A diu que els directius no afins han de rebre «castigos ejemplares» per estrangular moviments de rebel·lia o vagues.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-13',
    prompt:
      'El text B afirma que el Front Popular havia pujat al poder abans que es preparés el «caos» al qual es refereix.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-14',
    prompt:
      'El text A explica que la situació de fet ha de passar a ser de dret mitjançant la consolidació de l’exèrcit.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-15',
    prompt:
      'El text B diu que la resposta al moviment militar ha de ser la rendició immediata.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-16',
    prompt:
      'El text A qualifica l’enemic de «fuerte y bien organizado».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-17',
    prompt:
      'El text B contraposa el «caos de la anarquía» al qual atribueix l’ascens del Front Popular.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-18',
    prompt:
      'El text A és un fragment d’instrucció secreta enviada als implicats en els preparatius del cop d’estat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-19',
    prompt:
      'El text B afirma que l’única cosa que «ha quedado y quedará intacto» en la «vorágine» és la fe.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-20',
    prompt:
      'El text A ordena que, en conquerir el poder, es restableixi l’ordre públic i s’imposi l’imperi de la llei.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-21',
    prompt:
      'El text B presenta el discurs com una justificació del cop d’estat davant d’una suposada anarquia.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-22',
    prompt:
      'El text A permet que els partits afins al moviment continuïn activament sense restriccions.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-23',
    prompt:
      'El text B rebutja explícitament la victòria «aplastante y definitiva» com a horitzó.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-24',
    prompt:
      'El text A parla d’instaurar una dictadura militar amb missió immediata de restablir l’ordre públic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-25',
    prompt:
      'El text B identifica el moviment militar com a defensa de la pàtria davant el caos anàrquic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-26',
    prompt:
      'El text A (instrucció) es presenta com a «Instrucciones secretas para el preparativo del golpe de Estado».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-27',
    prompt:
      'El text B diu que la resposta al moviment ha de ser «victoria aplastante y definitiva».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-28',
    prompt:
      'El text A menciona que s’han d’encarcerar els directius de sindicats no afins al moviment.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-29',
    prompt:
      'El text B nega que el Frente Popular hagi pujat al poder abans del caos descrit.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-30',
    prompt:
      'El text A estableix que el cop ha de ser extremadament violent per reduir el més aviat possible l’enemic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-31',
    prompt:
      'El text B (Mola) afirma que el moviment militar va ser preparat per generals ambiciosos i partits polítics dolidos, sense matisos.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-32',
    prompt:
      'El text A indica que la situació de fet ha de passar a ser de dret.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-33',
    prompt:
      'El text B diu que l’Estat gran i fort ha de tenir com a remat una creu com a símbol de la religió.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-34',
    prompt:
      'El text A (Mola) es presenta com a «Instrucciones secretas» enviada amb el pseudònim «El Director».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-35',
    prompt:
      'El text B rebutja explícitament la rendició i els abraçaments de Vergara com a sortida.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-36',
    prompt:
      'El text A ordena castigos ejemplares a los directivos no afectos a aplica estrangular huelgas o rebeldías.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-37',
    prompt:
      'El text B afirma que l’objectiu és imponer l’ordre i donar «pan y trabajo».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-38',
    prompt:
      'El text A data la instrucció el 25 de abril de 1936 a Madrid.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-39',
    prompt:
      'El text B (al·locució) es transmet des de Burgos, a la ràdio de Castella.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'h25-ta-40',
    prompt:
      'El text A diu que els directius de partits, societats o sindicats no afins al moviment han de ser «encarcelados».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història · Ex.1 text A', 'Ex.1A'),
  },
]
