import type { ExamSource, Question } from '../../types/content'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/llengua-catalana/ord/pau_llca23jl.pdf'

function src(ref: string, short: string): ExamSource {
  return {
    label: `PAU 2023 · ordinària · sèrie 1 · ${short}`,
    pdfUrl: PDF,
    reference: ref,
  }
}

/** Opció A — comprensió 1.1 i lectura 1.5.2 (La plaça del Diamant). Pauta: pau_llca23jp.pdf */
export const VERBATIM_PAU23_CATALA: Question[] = [
  {
    kind: 'true_false',
    id: 'c23-a-1-1a',
    prompt: '«Joe Galàxia escriu, quan està a punt de morir, a una senyora de Berga.»',
    correct: true,
    examSource: src('1.1 opció A a', 'comprensió 1.1 a'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-1b',
    prompt: '«La dona de Joe Galàxia era molt prima.»',
    correct: false,
    examSource: src('1.1 opció A b', 'comprensió 1.1 b'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-1c',
    prompt: '«Per les seves actuacions, Joe Galàxia i la seva parella cobraven molts diners.»',
    correct: true,
    examSource: src('1.1 opció A c', 'comprensió 1.1 c'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-1d',
    prompt: '«En la funció, Joe Galàxia i la seva dona travessaven una roda de foc.»',
    correct: true,
    examSource: src('1.1 opció A d', 'comprensió 1.1 d'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-1e',
    prompt: '«Mai no calia fer cap adaptació al canó.»',
    correct: false,
    examSource: src('1.1 opció A e', 'comprensió 1.1 e'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-5-2a',
    prompt: '«La plaça del Diamant està escrita en tercera persona.»',
    correct: false,
    examSource: src('1.5.2 opció A a', 'lectura 1.5.2 a'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-5-2b',
    prompt: '«La Natàlia és òrfena de pare i mare.»',
    correct: false,
    examSource: src('1.5.2 opció A b', 'lectura 1.5.2 b'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-5-2c',
    prompt: '«La Natàlia sempre s’aturava a la botiga per mirar les nines.»',
    correct: true,
    examSource: src('1.5.2 opció A c', 'lectura 1.5.2 c'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-5-2d',
    prompt: '«En Quimet tracta la Natàlia d’una manera molt possessiva.»',
    correct: true,
    examSource: src('1.5.2 opció A d', 'lectura 1.5.2 d'),
  },
  {
    kind: 'true_false',
    id: 'c23-a-1-5-2e',
    prompt:
      '«L’Antoni, l’adroguer, abans de casar-s’hi, va oferir a la Natàlia de treballar de dependenta.»',
    correct: true,
    examSource: src('1.5.2 opció A e', 'lectura 1.5.2 e'),
  },
]
