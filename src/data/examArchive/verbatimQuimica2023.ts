import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/quimica/ord/pau_quim23jl.pdf'

export const VERBATIM_PAU23_QUIMICA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'qu23-x1',
    prompt:
      'La qüestió 1 es refereix a la hidrazina (N₂H₄) i la dimetilhidrazina com a combustibles líquids.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x2',
    prompt:
      'La qüestió 1 diu que la hidrazina reacciona amb l’oxigen donant H₂O(g) i N₂(g).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x3',
    prompt:
      'La qüestió 3 escriu l’equilibri Cl₂(g) + SO₂(g) ⇄ SO₂Cl₂(g) amb ΔH° < 0.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x4',
    prompt:
      'La qüestió 3 indica una reacció en recipient tancat d’1,0 L a 400 K amb carbó actiu com a catalitzador.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x5',
    prompt:
      'La qüestió 4 tracta sobre l’àcid hipoclorós (HClO) com a desinfectant en context covid-19.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x6',
    prompt:
      'La qüestió 4 a) parteix d’una solució 0,30 m d’àcid hipoclorós amb pH 4,02 a 25 °C.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x7',
    prompt:
      'La qüestió 2 contrasta espectres de masses per identificar etanol i acetona (propanona).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x8',
    prompt:
      'La qüestió 2 b) dóna el pic IR característic de cetones a 1 700 cm⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x9',
    prompt:
      'La qüestió 5 descriu la descomposició de l’acetaldehid en metà i monòxid de carboni.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x10',
    prompt:
      'L’examen indica respondre quatre de set qüestions i 2,5 punts per qüestió.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x11',
    prompt:
      'La qüestió 1 b) demana el diagrama entàlpic de la combustió de la hidrazina.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x12',
    prompt:
      'La qüestió 3 a) dona a l’equilibri 0,40 mol de SO₂Cl₂, 0,10 mol de SO₂ i 0,50 mol de Cl₂.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x13',
    prompt:
      'La qüestió 4 esmenta solucions de desinfectant de concentració habitual 0,05 m d’àcid hipoclorós.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x14',
    prompt:
      'La qüestió 4 a) compara amb l’àcid clorós (HClO₂) amb Ka = 1,00 × 10⁻².',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x15',
    prompt:
      'La qüestió 4 b) valora 40,0 mL de desinfectant amb NaOH 0,05 m i indica 33,0 mL de base fins al punt final.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x16',
    prompt:
      'La qüestió 1 dóna entalpies estàndard de formació de N₂H₄(l), N₂H₂(CH₃)₂(l), H₂O(g) i CO₂(g).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x17',
    prompt:
      'La qüestió 2 recorda c = 3,0 × 10⁸ m s⁻¹ i h = 6,63 × 10⁻³⁴ J s.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x18',
    prompt:
      'La qüestió 3 descriu el SO₂Cl₂ com a líquid d’olor punyent usat com a font de clor gasós.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x19',
    prompt:
      'La qüestió 3 b) pregunta per l’efecte de temperatura, volum i eliminació del catalitzador sobre el rendiment i Kc.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x20',
    prompt:
      'La qüestió 1 a) demana escriure les reaccions de combustió de la hidrazina i la dimetilhidrazina.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x21',
    prompt:
      'La qüestió 2 a) demana identificar pic base i pic molecular als espectres de masses.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x22',
    prompt:
      'L’enunciat diu que si es respon a més de quatre qüestions només es corregeixen les quatre primeres.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x23',
    prompt:
      'La qüestió 1 esmenta consell sobre quin combustible triar si la bodega del vaixell està gairebé al límit de pes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'qu23-x24',
    prompt:
      'La qüestió 4 qualifica l’àcid hipoclorós com a àcid feble usat en centres sanitaris.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Química · Q4', 'Q4'),
  },
]
