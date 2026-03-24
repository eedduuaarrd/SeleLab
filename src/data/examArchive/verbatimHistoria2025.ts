import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/historia/ord/pau_hist25jl.pdf'

/** Exercici 4 — sèrie 1. Solució oficial: 1b, 2c, 3d, 4b, 5c, 6d, 7d, 8b, 9b, 10a (pauta PAU 2025). */
export const VERBATIM_PAU25_HISTORIA: Question[] = [
  {
    kind: 'mcq',
    id: 'h25-4-1',
    prompt:
      'Context: Segona República espanyola. El 12 d’abril de 1931 es van celebrar unes eleccions que van donar majoria republicana a l’Espanya urbana més que no pas a la rural. Aquestes eleccions van ser',
    options: ['generals.', 'municipals.', 'comarcals.', 'autonòmiques.'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.1', '4.1'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-2',
    prompt:
      'El 10 d’agost de 1932 es va produir un intent de cop d’estat contra el règim republicà que es va anomenar',
    options: ['La Tejerada.', 'Legión y Honor.', 'La Sanjurjada.', 'La conspiració de Millán Astray.'],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.2', '4.2'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-3',
    prompt: 'El primer president de la Segona República espanyola va ser',
    options: [
      'Diego Martínez Barrio.',
      'Alejandro Lerroux.',
      'Manuel Azaña.',
      'Niceto Alcalá Zamora.',
    ],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.3', '4.3'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-4',
    prompt:
      'L’escàndol de corrupció destapat el 1935 per una ruleta trucada introduïda al Casino de Sant Sebastià es va anomenar',
    options: ['cas Matesa.', 'escàndol de l’estraperlo.', 'afer Nombela.', 'escàndol de Panamà.'],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.4', '4.4'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-5',
    prompt:
      'El nom de la gran coalició de les dretes catòliques espanyoles liderada per José María Gil-Robles va ser',
    options: [
      'la Comunión Tradicionalista.',
      'la Falange Española y de las JONS.',
      'la CEDA.',
      'Renovación Española.',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.5', '4.5'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-6',
    prompt: 'Els líders principals de la Lliga Regionalista van ser',
    options: [
      'Francesc Macià i Enric Prat de la Riba.',
      'Francesc Cambó i Anselm Clavé.',
      'Francesc Cambó i Lluís Companys.',
      'Enric Prat de la Riba i Francesc Cambó.',
    ],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.6', '4.6'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-7',
    prompt: 'La coalició Solidaritat Catalana va aplegar, entre altres, els partits següents:',
    options: [
      'la Lliga Regionalista, el Partit Liberal dinàstic i els carlins.',
      'la Lliga Regionalista, el Partit Conservador i els federals.',
      'la Lliga Regionalista, els carlins i els lerrouxistes.',
      'la Lliga Regionalista, el Centre Nacionalista Republicà i els carlins.',
    ],
    correctIndex: 3,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.7', '4.7'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-8',
    prompt: 'La Mancomunitat de Catalunya va existir entre',
    options: [
      'el 1910 i el 1925.',
      'el 1914 i el 1925.',
      'el 1910 i el 1923.',
      'el 1914 i el 1931.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.8', '4.8'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-9',
    prompt: 'Els dirigents principals d’Esquerra Republicana de Catalunya van morir en les circumstàncies següents:',
    options: [
      'Francesc Macià a Prats de Molló i Lluís Companys a l’exili.',
      'Francesc Macià de mort natural i Lluís Companys afusellat.',
      'Lluís Companys de mort natural i Francesc Macià afusellat.',
      'Francesc Macià i Lluís Companys van ser afusellats.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.9', '4.9'),
  },
  {
    kind: 'mcq',
    id: 'h25-4-10',
    prompt:
      'L’Estatut d’autonomia que va ser aprovat a les Corts republicanes el 1932, pel que fa a les llengües,',
    options: [
      'va establir el català i el castellà com a llengües oficials a Catalunya.',
      'va establir el castellà com a llengua pública i el català com a llengua pròpia de l’àmbit privat.',
      'va declarar el català com a única llengua oficial.',
      'va negar l’oficialitat del català.',
    ],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2025 · Història · sèrie 1 · 4.10', '4.10'),
  },
]
