import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/fisica/ord/pau_fisi23jl.pdf'

export const VERBATIM_PAU23_FISICA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'fi23-x1',
    prompt:
      'El P1 parla dels satèl·lits Fobos i Deimos de Mart i els aproxima a esferes de 22,2 km i 12,6 km de diàmetre.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x2',
    prompt:
      'El P1 dóna el radi orbital mitjà de Fobos com a 9 377 km i el període de revolució de 7 h 39 min 14 s.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x3',
    prompt:
      'El P1 indica MFobos = 1,10 × 10¹⁶ kg i MDeimos = 2,00 × 10¹⁵ kg.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x4',
    prompt:
      'El P1 dóna RMart = 3 390 km i G = 6,67 × 10⁻¹¹ N m² kg⁻².',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x5',
    prompt:
      'El P1 demana la massa de Mart i la intensitat del camp gravitatori a la superfície a l’apartat a).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x6',
    prompt:
      'El P2 descriu un fil rectilini per l’eix z amb corrent I = 2,00 A que forma una espira circular de radi R = 2,00 cm al pla xy.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x7',
    prompt:
      'El P2 dóna μ₀ = 4π × 10⁻⁷ T m A⁻¹.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x8',
    prompt:
      'El P3 descriu ones amb distància entre crestes de 4 m i una boia que oscil·la 30 vegades per minut.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x9',
    prompt:
      'El P3 indica que el desplaçament vertical total de la boia és de 40 cm entre el punt més baix i el més alt.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x10',
    prompt:
      'El P4 parla de fusió nuclear amb guany net d’energia anunciat el desembre del 2022 i de la cadena protó-protó al Sol.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x11',
    prompt:
      'L’examen estableix respondre quatre de set problemes i que cada problema val 2,5 punts.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x12',
    prompt:
      'El P1 b) demana el període de revolució de Deimos i la seva energia mecànica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x13',
    prompt:
      'El P1 compara la Lluna, de 3 475 km de diàmetre, amb Fobos i Deimos.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x14',
    prompt:
      'El P2 a) demana el camp magnètic total al centre de l’espira (0, R, 0).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x15',
    prompt:
      'El P3 nota diu considerar fase inicial amb la boia a la posició més alta.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x16',
    prompt:
      'El P1 diu que Fobos i Deimos porten el nom dels fills d’Afrodita i Ares i que en la mitologia romana Ares s’identifica amb Mart.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x17',
    prompt:
      'El P1 dóna el radi orbital mitjà de Deimos com a 23 460 km.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x18',
    prompt:
      'El P2 b) pregunta per l’orientació de l’espira per obtenir mòdul de camp magnètic mínim i màxim.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x19',
    prompt:
      'El P3 b) demana deduir velocitat i acceleració de la boia i representar la velocitat en un període.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x20',
    prompt:
      'El P4 a) es refereix al balanç global de la cadena protó-protó formant un nucli d’heli a partir de quatre protons.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x21',
    prompt:
      'El P4 menciona que un got d’aigua conté aproximadament 17 mol d’aigua per estimar energia.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P4', 'P4'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x22',
    prompt:
      'L’enunciat diu que només es corregeixen els quatre primers problemes si se’n responen més de quatre.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x23',
    prompt:
      'El P1 estableix que els satèl·lits descriuen trajectòria circular al voltant de Mart.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi23-x24',
    prompt:
      'El P3 a) demana freqüència, longitud d’ona, velocitat de propagació i equació horària del moviment de la boia.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Física · P3', 'P3'),
  },
]
