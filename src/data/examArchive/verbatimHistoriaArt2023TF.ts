import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/historia-art/ord/pau_hart23jl.pdf'

export const VERBATIM_PAU23_HISTORIA_ART_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'ha23-e1',
    prompt:
      'L’exercici 1 proposa comentar Eros i Psique, d’Antonio Canova, conservada al Museu del Louvre de París.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e2',
    prompt:
      'L’exercici 2 tracta sobre la Casa Kaufmann o Casa de la Cascada, de Frank Lloyd Wright, a Pensilvània.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e3',
    prompt:
      'L’exercici 3 inclou el Colosseu de Roma com a opció d’estudi.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e4',
    prompt:
      'L’examen diu que cal triar DOS dels cinc exercicis proposats.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e5',
    prompt:
      'Cada exercici val 5 punts segons les instruccions del model 2023.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e6',
    prompt:
      'Antonio Canova és l’escultor d’Eros i Psique segons el text de l’exercici 1.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e7',
    prompt:
      'Frank Lloyd Wright és l’arquitecte de la Casa Kaufmann esmentada a l’exercici 2.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e8',
    prompt:
      'L’exercici 4 inclou el Judici final de Giotto a la capella dels Scrovegni com a opció.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.4', 'Ex.4'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e9',
    prompt:
      'Giotto di Bondone és citat com a autor del Judici final de la capella dels Scrovegni.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.4', 'Ex.4'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e10',
    prompt:
      'Els dos exercicis escollits poden ser de la mateixa tipologia segons l’enunciat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e11',
    prompt:
      'L’exercici 1 demana primer un esquema o resum del procediment en el comentari d’una obra escultòrica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e12',
    prompt:
      'L’exercici 2 demana primer un esquema del procediment en el comentari d’una obra arquitectònica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e13',
    prompt:
      'L’exercici 3 inclou preguntes sobre estil i característiques escultòriques del període del Colosseu.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e14',
    prompt:
      'L’exercici 4 de la sèrie 1 proposa estudiar la Majestat Batlló (Barcelona, MNAC).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.4', 'Ex.4'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e15',
    prompt:
      'Eros i Psique de Canova es localitzen al Louvre segons el capçalera de l’exercici 1.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e16',
    prompt:
      'La Casa de la Cascada es relaciona amb Wright i el context de Pensilvània.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e17',
    prompt:
      'L’exercici 3 del Colosseu demana datar l’obra i situar-la en context històric i cultural.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e18',
    prompt:
      'L’exercici 4 e) demana relacionar definicions (llanterna, mandorla, tremp, horror vacui) amb el terme corresponent.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.4', 'Ex.4'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e19',
    prompt:
      'L’exercici 5 de la sèrie 1 proposa la Mare de Déu de les Roques, de Leonardo da Vinci (Louvre).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.5', 'Ex.5'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e20',
    prompt:
      'L’examen permet triar entre cinc exercicis numerats del 1 al 5.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e21',
    prompt:
      'L’exercici 3 c) demana explicar cinc característiques tècniques, formals o estructurals del Colosseu.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.3', 'Ex.3'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e22',
    prompt:
      'L’exercici 1 b) desenvolupa el comentari de Canova sobre Eros i Psique.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.1', 'Ex.1'),
  },
  {
    kind: 'true_false',
    id: 'ha23-e23',
    prompt:
      'L’exercici 2 b) desenvolupa el comentari de la Casa Kaufmann o Casa de la Cascada.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de l’art · Ex.2', 'Ex.2'),
  },
]
