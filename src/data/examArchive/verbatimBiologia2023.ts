import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/biologia/ord/pau_biol23jl.pdf'

export const VERBATIM_PAU23_BIOLOGIA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'bi23-x1',
    prompt:
      'L’exercici 1 explica que des de l’any 2000 hi ha constància de llops a Catalunya procedents de l’expansió de la població italiana.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x2',
    prompt:
      'El text de l’exercici 1 diu que els cérvols i cabirols constitueixen el 75 % de les preses dels llops.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x3',
    prompt:
      'L’exercici 1 indica que la desaparició de depredadors com els llops augmenta depredadors més petits com guineus o coiots.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x4',
    prompt:
      'L’exercici 1.3 esmenta el virus de Schmallenberg detectat per primer cop el 2011.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x5',
    prompt:
      'L’exercici 2 es basa en un article de Nature (2021) sobre l’àcid palmític i cèl·lules tumorals (IRB Barcelona).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x6',
    prompt:
      'L’exercici 2 indica que l’oli de palma conté d’un 40 % a un 50 % d’àcids grassos saturats (principalment palmític).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x7',
    prompt:
      'La prova exigeix dos exercicis del bloc 1 i dos del bloc 2, amb 3 punts i 2 punts respectivament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x8',
    prompt:
      'L’exercici 1.2 pregunta per les vies metabòliques que descomponen la glucosa en CO₂ i aigua en cérvols i cabirols.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x9',
    prompt:
      'L’exercici 1.1 a) demana construir una xarxa tròfica segons el text sobre llops.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x10',
    prompt:
      'L’exercici 2 demana representar la fórmula de l’àcid palmític amb 16 àtoms de carboni.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x11',
    prompt:
      'L’exercici 1.3 explica que sense llops hi ha més contacte entre herbívors i propagació de patògens.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x12',
    prompt:
      'El fragment literari adaptat és de Peter Wohlleben, L’intens respirar dels arbres.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x13',
    prompt:
      'L’exercici 2 indica que la indústria usa l’oli de palma per cobertures de xocolata que no es fonguin fàcilment.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x14',
    prompt:
      'L’exercici 2 pregunta què significa que l’àcid palmític sigui un àcid gras saturat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x15',
    prompt:
      'L’exercici 2 esmenta la tripalmitina com a triglicèrid de l’àcid palmític.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x16',
    prompt:
      'L’exercici 1.1 b) pregunta pel nivell tròfic no representat a la xarxa demanada.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x17',
    prompt:
      'L’exercici 1.3 demana descriure la resposta immunitària en un cérvol exposat per primera vegada al virus de Schmallenberg.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x18',
    prompt:
      'El text diu que els llops arriben als Pirineus des dels Alps francesos procedents dels Apenins.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x19',
    prompt:
      'L’exercici 2 pregunta per què l’àcid palmític és una molècula amfipàtica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x20',
    prompt:
      'L’examen consta de quatre exercicis en total (dos de cada bloc).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x21',
    prompt:
      'L’exercici 2 dóna percentatges d’àcids mono i poliinsaturats a l’oli de palma.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x22',
    prompt:
      'El text diu que herbívors com cérvols processen vegetació en CO₂ i aigua en digerir.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x23',
    prompt:
      'L’exercici 1.2 pregunta en quin procés es genera el CO₂ i en quin l’aigua a partir de la glucosa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi23-x24',
    prompt:
      'L’exercici 2 cita la revista Nature i un equip encapçalat per un investigador de l’IRB Barcelona.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Biologia · Ex.2', 'Ex.2'),
  },
]
