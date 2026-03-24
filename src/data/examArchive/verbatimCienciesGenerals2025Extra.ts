import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/ciencies-generals/ord/pau_cien25jl.pdf'

/** Part 1–4 — enunciats del model 2025 (aigua, Terra, biologia, cinemàtica). */
export const VERBATIM_PAU25_CIEN_GEN_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'cg25-x1',
    prompt:
      'La part 1 dóna la reacció inicial H₂(g) + O₂(g) → H₂O(l) com a formació d’aigua a partir d’hidrogen i oxigen gasosos.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x2',
    prompt:
      'La part 1 esmenta el zepelí Hindenburg LZ 129 i l’accident del 6 de maig de 1937 a Nova Jersey.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x3',
    prompt:
      'La part 1 dóna les masses molars de l’H₂ com a 2 g/mol i de l’aigua com a 18 g/mol.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x4',
    prompt:
      'La part 2 cita Alfred Wegener i la teoria de la deriva dels continents el 1912.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x5',
    prompt:
      'La part 2 anomena el supercontinent Pangea i l’oceà Pantalassa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x6',
    prompt:
      'La part 2 esmenta fòssils de Lystrosaurus a l’Índia, Sud-àfrica i l’Antàrtida.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x7',
    prompt:
      'La part 2 1.1 demana explicar la teoria de les plaques amb dorsal oceànica, subducció, litosfera i astenosfera.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x8',
    prompt:
      'La part 2 2.3 demana explicar l’efecte hivernacle i els gasos responsables.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x9',
    prompt:
      'La part 3 esmenta semaglutida (Ozempic, Wegovy) i tirzepatida (Mounjaro) per a diabetis tipus 2 i obesitat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x10',
    prompt:
      'La part 3 diu que en la diabetis la glucosa s’acumula a la sang i els músculs perden actina i miosina.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x11',
    prompt:
      'La part 3 1.2 descriu el greix en adipòcits com a gota o vacúol que ocupa bona part del citosol.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x12',
    prompt:
      'La part 3 2.1 planteja un treball de genètica amb grups sanguinis AB i O.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x13',
    prompt:
      'La part 3 2.2 demana col·locar aminoàcids, enzims, àcids nucleics, DNA i RNA en un text sobre proteïnes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x14',
    prompt:
      'La part 4 descriu el moviment de dos cotxes amb un diagrama velocitat-temps.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x15',
    prompt:
      'La part 4 1.1 demana la seqüència de moviments de cadascun dels cotxes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x16',
    prompt:
      'La part 1 1.1 demana igualar la reacció de formació de l’aigua.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x17',
    prompt:
      'La part 1 1.2 pregunta quants grams d’aigua s’obtenen a partir d’1 g d’hidrogen.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x18',
    prompt:
      'La part 2 divideix Pangea en Lauràsia al nord i Gondwana al sud.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x19',
    prompt:
      'La part 2 esmenta el Mesosaurus trobat al Brasil i a l’Àfrica occidental.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x20',
    prompt:
      'La part 3 1.1 demana identificar macromolècules esmentades i quines s’acumulen en l’obesitat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x21',
    prompt:
      'La part 4 1.2 pregunta quin cotxe ha estat aturat durant més temps.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x22',
    prompt:
      'La part 4 1.3 demana la distància cap a la dreta recorreguda per cadascun dels cotxes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x23',
    prompt:
      'L’examen diu que consta de quatre parts obligatòries de 2,5 punts cadascuna.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x24',
    prompt:
      'Les instruccions diuen que en cada part cal respondre tot l’exercici 1 i dues qüestions de l’exercici 2.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x25',
    prompt:
      'La part 1 1.3 explica que l’atmosfera té aproximadament un 21 % d’oxigen i que cal oxigen per la combustió.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x26',
    prompt:
      'La part 2 2.1 demana enumerar les fases del mètode científic i relacionar-les amb Wegener.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x27',
    prompt:
      'La part 3 2.3 contrasta malalties infeccioses i genètiques amb exemples.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x28',
    prompt:
      'La part 3 1.3 pregunta si una vacuna podria ser remei contra l’obesitat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x29',
    prompt:
      'La part 2 1.2 demana identificar de quina part de Pangea deriven els continents actuals segons Wegener.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-x30',
    prompt:
      'Les instruccions permeten calculadora sense emmagatzematge ni transmissió de dades.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · instruccions', '—'),
  },
]
