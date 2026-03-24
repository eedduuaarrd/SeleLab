import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/historia-art/ord/pau_hart24jl.pdf'

/** Títols i dades de l’enunciat (sèrie 1). */
export const VERBATIM_PAU24_HISTORIA_ART_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'ha24-e1',
    prompt:
      'L’opció A de l’exercici 1 demana comentar La Llibertat guiant el poble, d’Eugène Delacroix.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e2',
    prompt:
      'La Llibertat guiant el poble es conserva al Museu del Louvre de París.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e3',
    prompt:
      'L’opció B de l’exercici 1 demana comentar Maman, de Louise Bourgeois.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e4',
    prompt:
      'Maman de Louise Bourgeois es localitza a Bilbao, al Museu Guggenheim.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e5',
    prompt:
      'L’exercici 2 ofereix com a obra 1 el Partenó d’Atenes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2 obra 1', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e6',
    prompt:
      'L’obra 2 és la Mare de Déu dels consellers, de Lluís Dalmau, conservada al MNAC de Barcelona.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2 obra 2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e7',
    prompt:
      'L’obra 3 és el David de Donatello, conservat al Museu Nacional del Bargello de Florència.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2 obra 3', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e8',
    prompt:
      'L’exercici 2 obra 1 c) demana identificar l’ordre arquitectònic de cinc figures (Déu del cap Artemissió, Dorífor de Policlet, etc.).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e9',
    prompt:
      'L’exercici 2 obra 1 e) diu que les escultures del Partenó es troben majoritàriament al Museu Britànic de Londres des que Lord Elgin les va vendre al Govern britànic.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e10',
    prompt:
      'L’exercici 2 obra 2 e) es refereix a la portalada romànica de Sant Pere de Moissac (brancals, mainell, arquivoltes, timpà).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e11',
    prompt:
      'L’exercici 2 obra 3 inclou imatges de San Lorenzo de Brunelleschi i el Tempietto de Bramante.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e12',
    prompt:
      'La prova consta de dos exercicis: en el primer es tria opció A o B; en el segon es tria una de tres obres.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e13',
    prompt:
      'L’exercici 1 opció A demana primer un esquema del procediment en el comentari d’una obra pictòrica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e14',
    prompt:
      'L’exercici 1 opció B demana primer un esquema del procediment en el comentari d’una obra escultòrica.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e15',
    prompt:
      'L’exercici 2 obra 1 d) demana senyalar naos, pronaos, opistòdom i peristil en la planta del Partenó.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e16',
    prompt:
      'L’exercici 2 obra 3 e) menciona pintures de l’escola holandesa del Barroc (De Hooch, Van Ruysdael, Vermeer).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e17',
    prompt:
      'Eugène Delacroix és l’autor de La Llibertat guiant el poble segons l’enunciat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e18',
    prompt:
      'Louise Bourgeois és l’autora de l’escultura Maman segons l’enunciat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e19',
    prompt:
      'Lluís Dalmau és autor de la Mare de Déu dels consellers segons l’enunciat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e20',
    prompt:
      'Donatello és autor del David esmentat en l’opció d’obra 3.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e21',
    prompt:
      'L’exercici 2 val 5 punts en total amb un punt per cada apartat a–e de l’obra triada.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.2', 'Ex.2'),
  },
  {
    kind: 'true_false',
    id: 'ha24-e22',
    prompt:
      'L’exercici 1 val 5 punts: 1 punt per l’esquema i 4 per al comentari de l’obra.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de l’art · Ex.1', 'Ex.1'),
  },
]
