import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/historia-art/ord/pau_hart25jl.pdf'

/** Exercici 1 b) — pauta: F, V, V, V, F */
export const VERBATIM_PAU25_HISTORIA_ART: Question[] = [
  {
    kind: 'true_false',
    id: 'ha25-1b-1',
    prompt: '«Artemisia Gentileschi va ser una pintora de l’impressionisme.»',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història de l’art · sèrie 1 · 1.b.1', '1.b.1'),
  },
  {
    kind: 'true_false',
    id: 'ha25-1b-2',
    prompt: '«Giotto va pintar la capella dels Scrovegni de Pàdua.»',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de l’art · sèrie 1 · 1.b.2', '1.b.2'),
  },
  {
    kind: 'true_false',
    id: 'ha25-1b-3',
    prompt: '«A. Gaudí i L. Domènech i Montaner són contemporanis.»',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de l’art · sèrie 1 · 1.b.3', '1.b.3'),
  },
  {
    kind: 'true_false',
    id: 'ha25-1b-4',
    prompt: '«Moltes catedrals europees són d’estil gòtic.»',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de l’art · sèrie 1 · 1.b.4', '1.b.4'),
  },
  {
    kind: 'true_false',
    id: 'ha25-1b-5',
    prompt: '«L’expressionisme abstracte neix a Rússia.»',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història de l’art · sèrie 1 · 1.b.5', '1.b.5'),
  },
]
