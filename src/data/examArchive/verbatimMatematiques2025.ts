import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/matematiques/ord/pau_mate25jl.pdf'

/** Exercici 3 a) — enunciat literal; probabilitat total (peca defectuosa). */
export const VERBATIM_PAU25_MATEMATIQUES: Question[] = [
  {
    kind: 'mcq',
    id: 'ma25-3a',
    prompt:
      'Una empresa produeix dos tipus de peces, de ferro i d’acer. El 60 % de la producció total correspon a peces de ferro i la resta són d’acer. Sabem que el 95 % de les peces de ferro produïdes no tenen cap defecte, mentre que el 3 % de les peces d’acer són defectuoses. Si agafem una peça a l’atzar, quina és la probabilitat que sigui defectuosa?',
    options: ['0,042', '0,050', '0,060', '0,038'],
    correctIndex: 0,
    explanation: '0,60·0,05 + 0,40·0,03 = 0,042.',
    examSource: examSrc(PDF, 'PAU 2025 · Matemàtiques · sèrie 1 · Ex.3 a', 'Ex.3a'),
  },
  {
    kind: 'true_false',
    id: 'ma25-3b',
    prompt:
      'Amb independència de p, la probabilitat que en un paquet de 5 peces de titani n’hi hagi exactament 4 de defectuoses és f(p) = 5(p⁴ − p⁵) (Exercici 3, apartat b).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Matemàtiques · sèrie 1 · Ex.3 b', 'Ex.3b'),
  },
]
