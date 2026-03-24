import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/biologia/ord/pau_biol24jl.pdf'

export const VERBATIM_PAU24_BIOLOGIA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'bi24-x1',
    prompt:
      'L’exercici 1 es basa en una notícia de CNN sobre la recuperació d’RNA d’un tigre de Tasmània.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x2',
    prompt:
      'L’enunciat diu que fins llavors s’havia aconseguit aïllar DNA d’animals extingits però mai RNA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x3',
    prompt:
      'L’exercici 1 indica que l’exemplar es conserva al Museu Suec d’Història Natural.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x4',
    prompt:
      'L’exercici 1 b) cita la seqüenciació de l’RNA de la pell i el múscul esquelètic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x5',
    prompt:
      'L’exercici 2 treballa amb el gen FTH1 i una seqüència d’RNA amb codons com AUU CGU GAG ACU UCA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x6',
    prompt:
      'L’exercici 3 compara el tigre de Tasmània amb el diable de Tasmània i l’ovella.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x7',
    prompt:
      'La prova exigeix dos exercicis del bloc 1 i dos del bloc 2.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x8',
    prompt:
      'Cada exercici del bloc 1 val 3 punts i cada exercici del bloc 2 val 2 punts.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x9',
    prompt:
      'L’exercici 1 a) demana dues diferències entre els components químics del DNA i l’RNA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x10',
    prompt:
      'L’exercici 2 b) pregunta pels processos de transcripció i traducció i la seva localització cel·lular.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x11',
    prompt:
      'L’exercici 3 a) demana formular hipòtesi i millora estadística per a la comparació entre espècies.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x12',
    prompt:
      'El bloc 1 ofereix escollir entre els exercicis 1, 2 i 3.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x13',
    prompt:
      'El bloc 2 ofereix escollir entre els exercicis 4, 5 i 6.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x14',
    prompt:
      'L’exercici 1 es refereix al tigre de Tasmània com a espècie extingida.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x15',
    prompt:
      'L’exercici 2 inclou taules de DNA complementària, DNA que es transcriu i RNA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x16',
    prompt:
      'L’exercici 3 b) demana conclusions a partir d’un gràfic d’expressió gènica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x17',
    prompt:
      'La notícia indica que l’equip va seqüenciar RNA de teixits conservats del tigre de Tasmània.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x18',
    prompt:
      'L’exercici 1 b) pregunta quin tipus d’RNA es tracta quan es parla d’expressió de gens.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x19',
    prompt:
      'L’examen consta de fer exactament quatre exercicis en total.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x20',
    prompt:
      'L’exercici 2 a) demana completar la seqüència proteica a partir de l’RNA donat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x21',
    prompt:
      'L’exercici 3 a) inclou preguntes sobre hipòtesi i millora estadística dels resultats.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x22',
    prompt:
      'L’exercici 1 es divideix en tres apartats numerats 1–3 amb puntuacions parcials.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x23',
    prompt:
      'El fragment d’RNA mostrat inclou els codons AUU CGU GAG ACU UCA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'bi24-x24',
    prompt:
      'L’exercici 3 menciona la comparació de seqüències entre múscul esquelètic i pell de l’exemplar.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Biologia · Ex.3', 'Ex.3'),
  },
]
