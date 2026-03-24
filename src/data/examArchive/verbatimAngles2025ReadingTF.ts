import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/angles/ord/pau_angl25jl.pdf'

/** Part 2 (reading) — afirmacions contrastables amb el text «Tipping is more confusing than ever». */
export const VERBATIM_PAU25_ANGLES_READING_TF: Question[] = [
  {
    kind: 'true_false',
    id: 'en25-rd-1',
    prompt:
      'According to the article, tipping screens on iPads have contributed to making tipping expectations more widespread.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-2',
    prompt:
      'The article states that Americans have only recently disagreed on how much to tip.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-3',
    prompt:
      'The text links the spread of tipping in restaurants after the Civil War to the work of formerly enslaved people as porters and similar roles.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-4',
    prompt:
      'According to the article, the “tip credit” system was created in the 1960s.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-5',
    prompt:
      'The article claims that seventy-two percent of Americans said in a 2023 survey that tips are expected in fewer places than before.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-6',
    prompt:
      'The author suggests that pressing “no” on an iPad tip screen can feel ruder than not leaving cash in a jar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-7',
    prompt:
      'The article argues that tipping should disappear entirely because it is never beneficial to workers.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-8',
    prompt:
      'The text mentions that some cooks and dishwashers may end up worse off than servers despite their skill.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-9',
    prompt:
      'According to the article, one simple tipping principle is to tip where there is a subminimum wage.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
  {
    kind: 'true_false',
    id: 'en25-rd-10',
    prompt:
      'The article is adapted from The Washington Post and attributed to David Shipley.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · Part 2 · lectura', 'Part 2'),
  },
]
