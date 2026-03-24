import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF_FI =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/fisica/ord/pau_fisi25jl.pdf'
const PDF_QU =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/quimica/ord/pau_quim25jl.pdf'
const PDF_BIO =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/biologia/ord/pau_biol25jl.pdf'

/** Fragments dels enunciats 2025 amb resposta tancada (conceptes del PDF). */
export const VERBATIM_PAU25_FISICA: Question[] = [
  {
    kind: 'true_false',
    id: 'fi25-ex4a',
    prompt:
      '«L’isòtop del sodi ²⁴₁₁Na té un excés de neutrons i sabem que és un emissor beta.» (Exercici 4, apartat a)',
    correct: true,
    examSource: examSrc(PDF_FI, 'PAU 2025 · Física · sèrie 1 · Ex.4a', 'Ex.4a'),
  },
  {
    kind: 'mcq',
    id: 'fi25-ex4a-nuclis',
    prompt:
      'En la desintegració beta del ²⁴₁₁Na, el nucli resultant té nombre atòmic Z = … (consulteu taula periòdica de l’enunciat: F Ne Na Mg Al).',
    options: ['10 (Ne)', '11 (Na)', '12 (Mg)', '9 (F)'],
    correctIndex: 2,
    examSource: examSrc(PDF_FI, 'PAU 2025 · Física · sèrie 1 · Ex.4a · producte', 'Ex.4a'),
  },
]

export const VERBATIM_PAU25_QUIMICA: Question[] = [
  {
    kind: 'true_false',
    id: 'qu25-ex1a',
    prompt:
      '«A temperatura ambient, el F₂ és un gas, el Br₂ és un líquid i el I₂ és un sòlid.» (Exercici 1, apartat a)',
    correct: true,
    examSource: examSrc(PDF_QU, 'PAU 2025 · Química · sèrie 1 · Ex.1a', 'Ex.1a'),
  },
  {
    kind: 'true_false',
    id: 'qu25-ex1a-hal',
    prompt:
      '«Els halògens presenten la configuració electrònica de la capa de valència ns²np⁵.» (Exercici 1, introducció)',
    correct: true,
    examSource: examSrc(PDF_QU, 'PAU 2025 · Química · sèrie 1 · Ex.1', 'Ex.1'),
  },
  {
    kind: 'mcq',
    id: 'qu25-haber',
    prompt:
      'La síntesi de Haber-Bosch es representa com: N₂(g) + 3 H₂(g) ⇄ 2 NH₃(g)  ∆H < 0. Per a obtenir un major rendiment de la reacció, és millor dur a terme la reacció a pressions',
    options: ['altes.', 'baixes.', 'qualssevol.', 'nul·les.'],
    correctIndex: 0,
    examSource: examSrc(PDF_QU, 'PAU 2025 · Química · sèrie 1 · Ex.2b', 'Ex.2b'),
  },
]

export const VERBATIM_PAU25_BIOLOGIA: Question[] = [
  {
    kind: 'mcq',
    id: 'bi25-ex1c-bio',
    prompt:
      'Segons l’exercici 1 apartat c) (prospecte del burosumab): «Quin tipus de biomolècula (àcid nucleic, glícid, lípid o proteïna) és un anticòs?»',
    options: ['Àcid nucleic', 'Glícid', 'Lípid', 'Proteïna'],
    correctIndex: 3,
    examSource: examSrc(PDF_BIO, 'PAU 2025 · Biologia · sèrie 1 · Ex.1c', 'Ex.1c'),
  },
  {
    kind: 'true_false',
    id: 'bi25-ex2d-gram',
    prompt:
      '«Els lactobacils són bacteris grampositius.» (Exercici 2, apartat d, context)',
    correct: true,
    examSource: examSrc(PDF_BIO, 'PAU 2025 · Biologia · sèrie 1 · Ex.2d', 'Ex.2d'),
  },
  {
    kind: 'true_false',
    id: 'bi25-arthro',
    prompt:
      '«L’Arthrospira platensis és un cianobacteri fotoautòtrof no fixador de nitrogen.» (Exercici 3, introducció)',
    correct: true,
    examSource: examSrc(PDF_BIO, 'PAU 2025 · Biologia · sèrie 1 · Ex.3', 'Ex.3'),
  },
]
