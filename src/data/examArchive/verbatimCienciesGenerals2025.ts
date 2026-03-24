import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/ciencies-generals/ord/pau_cien25jl.pdf'

/**
 * Part 2, exercici 2.2 — «indiqueu SÍ o NO» (aquí: vertader = es pot trobar al Sistema Solar).
 * Pauta oficial (taula d’objectes astronòmics).
 */
export const VERBATIM_PAU25_CIEN_GEN: Question[] = [
  {
    kind: 'true_false',
    id: 'cg25-ast-1',
    prompt:
      'De la llista d’objectes astronòmics de l’examen (Part 2, exercici 2.2): «Estrella» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Estrella', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-2',
    prompt: '«Planeta» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Planeta', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-3',
    prompt: '«Galàxia» es pot trobar al nostre Sistema Solar.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Galàxia', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-4',
    prompt: '«Forat negre» es pot trobar al nostre Sistema Solar.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Forat negre', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-5',
    prompt: '«Asteroide» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Asteroide', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-6',
    prompt: '«Cometa» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Cometa', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-7',
    prompt: '«Nebulosa» es pot trobar al nostre Sistema Solar.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Nebulosa', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-8',
    prompt: '«Satèl·lit» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Satèl·lit', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-9',
    prompt: '«Meteorit» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Meteorit', '2.2'),
  },
  {
    kind: 'true_false',
    id: 'cg25-ast-10',
    prompt: '«Planeta nan (planetoide)» es pot trobar al nostre Sistema Solar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Ciències generals · Part 2 · 2.2 · Planeta nan', '2.2'),
  },
]
