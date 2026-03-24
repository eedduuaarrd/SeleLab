import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/matematiques/ord/pau_mate24jl.pdf'

/** Enunciats literals (sèrie 1) — contrastables amb el PDF. */
export const VERBATIM_PAU24_MATEMATIQUES: Question[] = [
  {
    kind: 'true_false',
    id: 'ma24-n1',
    prompt:
      'La qüestió 3 dóna la funció f(x) = –x³ + 7x² – 6x + 5 com a corba d’un terreny de regadiu.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n2',
    prompt:
      'La qüestió 3 demana calcular la superfície del terreny a l’apartat b).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n3',
    prompt:
      'La qüestió 4 descriu que l’Andreu posa nou boles dins una bossa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n4',
    prompt:
      'La qüestió 4 a) estableix que es treuen dues boles sense reemplaçament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n5',
    prompt:
      'La qüestió 4 b) planteja cinc extraccions amb reemplaçament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n6',
    prompt:
      'La qüestió 4 demana la probabilitat de no haver tret cap A en cinc extraccions amb reemplaçament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n7',
    prompt:
      'La qüestió 5 parla d’un cobert de fusta de 6 m³ de volum en forma de prisma rectangular adossat a una paret.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n8',
    prompt:
      'La qüestió 5 diu que el cobert ha de mesurar el triple d’amplària que de fondària.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n9',
    prompt:
      'La qüestió 5 indica un cost de 30 € per metre quadrat de paret i 50 € per metre quadrat de sostre.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n10',
    prompt:
      'La qüestió 5 menciona un cost fix de 35 € per afegir una porta.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n11',
    prompt:
      'La qüestió 4 a) demana la probabilitat que la primera bola sigui una A o una E.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n12',
    prompt:
      'La qüestió 4 a) demana la probabilitat que les dues boles siguin diferents.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n13',
    prompt:
      'La qüestió 4 b) demana la probabilitat d’haver tret almenys dues A en cinc tirades amb reemplaçament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n14',
    prompt:
      'La qüestió 3 a) demana coordenades de punts P, Q i R i l’equació de la recta PR.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n15',
    prompt:
      'L’enunciat general de la sèrie 1 permet respondre quatre de sis qüestions.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n16',
    prompt:
      'L’examen permet calculadora sense emmagatzematge ni transmissió de dades.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n17',
    prompt:
      'La qüestió 5 només cal construir el sostre i tres parets perquè el fons és la paret de la casa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n18',
    prompt:
      'La qüestió 3 identifica la corba com y = f(x) amb f(x) = –x³ + 7x² – 6x + 5.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n19',
    prompt:
      'La qüestió 4 diu que les boles es treuen una darrere l’altra sense reemplaçament a l’apartat a).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n20',
    prompt:
      'La qüestió 5 a) demana comprovar una expressió del cost de construcció com a funció (segons l’enunciat).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n21',
    prompt:
      'La qüestió 4 b) indica que cada bola es retorna a la bossa abans de la següent extracció.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n22',
    prompt:
      'La qüestió 3 es refereix a un esbós on la corba és y = f(x) amb punts P, Q i R assenyalats.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n23',
    prompt:
      'La qüestió 5 estableix volum fix de 6 m³ per al cobert.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n24',
    prompt:
      'La qüestió 4 es basa en un sac amb nou boles etiquetades (segons la figura de l’enunciat).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma24-n25',
    prompt:
      'Cada qüestió de l’examen té el mateix valor en punts (2,5) segons les instruccions de la sèrie 1.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Matemàtiques · instruccions', '—'),
  },
]
