import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/biologia/ord/pau_biol24jl.pdf'

/** Ítems tancats extrets del model 2024 (text de Stargardt i seroteràpia). */
export const VERBATIM_PAU24_BIOLOGIA: Question[] = [
  {
    kind: 'mcq',
    id: 'bi24-stargardt',
    prompt:
      'Segons el text sobre la malaltia de Stargardt (Exercici 3, apartat 1), com s’ha d’especificar el patró d’herència?',
    options: [
      'Dominant i autosòmic',
      'Recessiu i autosòmic',
      'Recessiu i lligat al cromosoma X',
      'Dominant i lligat al cromosoma Y',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · sèrie 1 · Ex.3 · Stargardt', 'Ex.3'),
  },
  {
    kind: 'mcq',
    id: 'bi24-sero',
    prompt:
      'Segons l’apartat sobre seroteràpia (injecció de sèrum amb anticossos preparats), quin tipus d’immunització comporta?',
    options: [
      'Activa i natural',
      'Activa i artificial',
      'Passiva i artificial',
      'Passiva i natural',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · sèrie 1 · Ex.3 · seroteràpia', 'Ex.3'),
  },
]
