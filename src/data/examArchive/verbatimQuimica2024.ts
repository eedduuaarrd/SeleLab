import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/quimica/ord/pau_quim24jl.pdf'

export const VERBATIM_PAU24_QUIMICA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'qu24-x1',
    prompt:
      'La qüestió 1 diu que la taula periòdica organitza els elements de Z més petit a més gran en set períodes i divuit grups.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x2',
    prompt:
      'La qüestió 1 planteja dos elements amb Z = 11 i Z = 35 que formen el compost iònic AB i que A₂ és covalent.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x3',
    prompt:
      'La qüestió 1 b) diu que els raigs X i la radiació gamma tenen λ entre 10⁻¹² i 10⁻¹⁰ m.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x4',
    prompt:
      'La qüestió 1 b) dóna l’energia d’ionització de l’hidrogen com a 1 318 kJ mol⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x5',
    prompt:
      'La qüestió 2 es refereix a l’àcid glucònic com a additiu alimentari E 574.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x6',
    prompt:
      'La qüestió 2 indica que quan el pH d’un aliment és inferior a 4,5 es pot evitar el creixement de bacteris nocius.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x7',
    prompt:
      'La qüestió 2 dóna Ka de l’àcid glucònic = 1,48 × 10⁻⁴ a 25 °C.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x8',
    prompt:
      'La qüestió 3 escriu la fermentació de la glucosa: C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x9',
    prompt:
      'La qüestió 3 a) dóna que la combustió d’1,0 mol de glucosa desprèn 2 813 kJ mol⁻¹ a 25 °C.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x10',
    prompt:
      'L’examen indica respondre quatre de set qüestions i que cada qüestió val 2,5 punts.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x11',
    prompt:
      'La qüestió 2 dóna la massa molar de l’àcid glucònic com a 196,16 g mol⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x12',
    prompt:
      'La qüestió 1 b) pregunta si es podria ionitzar l’hidrogen amb radiació λ = 6 × 10⁻¹¹ m.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x13',
    prompt:
      'La qüestió 1 a) demana escriure les configuracions electròniques de Z = 11 i Z = 35.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x14',
    prompt:
      'La qüestió 2 a) parteix de 3,8 g d’àcid glucònic en 100,0 mL de solució.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x15',
    prompt:
      'La qüestió 3 a) dóna que la combustió d’1,0 mol d’etanol desprèn 1 367 kJ mol⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x16',
    prompt:
      'La qüestió 1 b) recorda NA = 6,02 × 10²³ mol⁻¹ i c = 3,0 × 10⁸ m s⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x17',
    prompt:
      'La qüestió 2 b) demana escriure la reacció de valoració amb hidròxid de sodi.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x18',
    prompt:
      'La qüestió 3 identifica la glucosa com a monosacàrid present a molts aliments i a la sang.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x19',
    prompt:
      'L’enunciat diu que si es respon a més de quatre qüestions només es corregeixen les quatre primeres.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x20',
    prompt:
      'La qüestió 1 es divideix en apartats a) i b) amb 1,25 punts cadascun.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x21',
    prompt:
      'La qüestió 1 b) defineix radiacions ionitzants com a capaces de provocar mutacions.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x22',
    prompt:
      'La qüestió 2 qualifica l’àcid glucònic com a àcid orgànic monopròtic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x23',
    prompt:
      'La qüestió 3 b) parla d’energia de Gibbs estàndard a partir de la combustió de glucosa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu24-x24',
    prompt:
      'La qüestió 1 a) esmenta compostos iònics AB i compostos covalents A₂.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Química · Q1', 'Q1'),
  },
]
