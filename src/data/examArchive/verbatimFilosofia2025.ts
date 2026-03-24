import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/historia-filosofia/ord/pau_hfil25jl.pdf'

/**
 * Afirmacions basades en els textos de l’exercici 1 (opcions A i B), contrastables amb el PDF.
 * No substitueixen la correcció de la prova oberta.
 */
export const VERBATIM_PAU25_FILOSOFIA: Question[] = [
  {
    kind: 'true_false',
    id: 'fil25-nuss-1',
    prompt:
      'Segons el text de Martha C. Nussbaum (opció A), fer obligatòria l’educació primària i secundària per als infants es justifica per l’expansió de capacitats futures.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil25-nuss-2',
    prompt:
      'El mateix text de Nussbaum suggereix que, per a l’educació d’adults que necessiten més formació, l’enfocament correcte seria la persuasió en lloc de l’exigència directa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil25-desc-1',
    prompt:
      'En el text de Descartes (Meditacions, VI, opció B), quan sentits, memòria i enteniment concorden en l’examen, no haig de dubtar de la veritat d’aquelles coses.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil25-desc-2',
    prompt:
      'Descartes invoca en aquest fragment que «Déu no és enganyador» com a fonament per confiar en la veracitat de les conclusions quan les facultats no es contradiuen.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil25-nuss-3',
    prompt:
      'Segons Nussbaum (opció A), els infants tenen les capacitats de lliure elecció encara immadures i són susceptibles de sucumbir a les pressions dels pares.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil25-nuss-4',
    prompt:
      'El text de Nussbaum vincula el compromís de l’estat amb les capacitats futures dels ciutadans amb la justificació de fer obligatòries l’educació primària i secundària.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil25-desc-3',
    prompt:
      'En el fragment de Descartes (opció B), afirma que allò que els sentits indiquen sobre el que és bo o nociu per al cos és més sovint fals que veritat.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil25-desc-4',
    prompt:
      'Descartes diu que no ha de témer que hi pugui haver falsedat en les coses que els sentits li representen habitualment.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil25-desc-5',
    prompt:
      'Del fet que Déu no és enganyador, Descartes dedueix que, quan les facultats concorden, no s’enganya en allò que examina.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2025 · Història de la filosofia · Ex.1 opció B', 'Ex.1B'),
  },
]
