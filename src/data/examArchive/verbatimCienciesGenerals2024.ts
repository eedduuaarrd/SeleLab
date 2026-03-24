import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/ciencies-generals/ord/pau_cien24jl.pdf'

/**
 * Exercici 1, opció A — afirmacions vertaderes o falses (química de solucions i enllaços).
 * Respostes segons criteri científic estàndard alineat amb l’enunciat.
 */
export const VERBATIM_PAU24_CIEN_GEN: Question[] = [
  {
    kind: 'true_false',
    id: 'cg24-1a-1',
    prompt:
      '«Les mescles són combinacions de dues o més substàncies pures en proporcions variables.» (Exercici 1, opció A, 1.1)',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.1', '1.1'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-2',
    prompt:
      '«Els ions són partícules neutres, és a dir, sense càrrega elèctrica.» (Exercici 1, opció A, 1.2)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.2', '1.2'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-3',
    prompt:
      '«L’atmosfera és una mescla de gasos que es pot considerar com una dissolució en què l’oxigen és el dissolvent.» (Exercici 1, opció A, 1.3)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.3', '1.3'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-4',
    prompt:
      '«Una substància pura està composta per un sol tipus d’àtom o molècula.» (Exercici 1, opció A, 1.4)',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.4', '1.4'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-5',
    prompt:
      '«En un enllaç covalent, se cedeixen electrons d’un àtom a un altre.» (Exercici 1, opció A, 1.5)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.5', '1.5'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-6',
    prompt:
      '«En una dissolució, el solut i el dissolvent sempre es combinen en una relació 1:1.» (Exercici 1, opció A, 1.6)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.6', '1.6'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-7',
    prompt:
      '«Una dissolució diluïda és la que ja no admet més solut.» (Exercici 1, opció A, 1.7)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.7', '1.7'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-8',
    prompt:
      '«Els àtoms són indivisibles i no es poden separar en partícules més petites.» (Exercici 1, opció A, 1.8)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.8', '1.8'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-9',
    prompt:
      '«Els àtoms en una molècula o compost es mantenen units gràcies als enllaços químics.» (Exercici 1, opció A, 1.9)',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.9', '1.9'),
  },
  {
    kind: 'true_false',
    id: 'cg24-1a-10',
    prompt:
      '«Una mescla heterogènia té un aspecte uniforme, de manera que no s’hi poden distingir parts a simple vista.» (Exercici 1, opció A, 1.10)',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Ciències generals · Part 1 · Ex.1A · 1.10', '1.10'),
  },
]
