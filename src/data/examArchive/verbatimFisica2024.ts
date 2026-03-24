import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/fisica/ord/pau_fisi24jl.pdf'

/** P1–P7 — descripció dels enunciats (sèrie 1). */
export const VERBATIM_PAU24_FISICA_EXTRA: Question[] = [
  {
    kind: 'true_false',
    id: 'fi24-x1',
    prompt:
      'El problema 1 es refereix a la missió BepiColombo i al satèl·lit MPO que orbita Mercuri amb radi orbital mitjà de 3 360 km.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x2',
    prompt:
      'El P1 dóna la massa de Mercuri MM = 3,285 × 10²³ kg i G = 6,67 × 10⁻¹¹ N m² kg⁻².',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x3',
    prompt:
      'El P1 demana calcular quantes voltes fa el MPO al voltant de Mercuri en un any terrestre.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x4',
    prompt:
      'El P2 descriu una massa de 0,5 kg penjada d’una molla vertical i una segona massa en un disc que gira a 6,41 rad/s.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x5',
    prompt:
      'El P2 indica que el centre de la massa del disc és a 19 cm del centre del disc.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x6',
    prompt:
      'El P3 estableix un camp elèctric prop de la superfície terrestre de mòdul constant 150 N/C.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x7',
    prompt:
      'El P3 dóna el radi de la Terra RT = 6,37 × 10⁶ m i la densitat de l’aigua ρ = 10³ kg/m³.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x8',
    prompt:
      'L’examen diu que cada problema val 2,5 punts i que cal respondre quatre de set problemes.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x9',
    prompt:
      'El P1 b) esmenta una energia disponible de 4,5 × 10⁹ J per a maniobres del satèl·lit.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x10',
    prompt:
      'El P2 diu que les ombres de les dues masses segueixen el mateix moviment harmònic simple.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x11',
    prompt:
      'El P3 b) demana la força elèctrica sobre un electró lliure a la vora de la superfície terrestre.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x12',
    prompt:
      'El P1 a) demana deduir la velocitat orbital en funció del radi i la massa del planeta.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x13',
    prompt:
      'El P2 a) demana l’equació de la posició vertical de les ombres en funció del temps.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x14',
    prompt:
      'El P3 a) suggereix modelar la Terra com una esfera carregada uniformement per calcular la càrrega total.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x15',
    prompt:
      'El P1 indica que l’any terrestre és de 365,25 dies.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x16',
    prompt:
      'El P2 estableix que a t = 0 s es deixa anar la massa de la molla des de baix i la massa del disc passa pel punt més baix.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x17',
    prompt:
      'El P3 recorda que la superfície esfèrica és 4πr² i el volum d’esfera (4/3)πr³.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x18',
    prompt:
      'El P1 b) demana l’energia mecànica d’un satèl·lit en òrbita circular només en funció de G, el radi i les masses.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x19',
    prompt:
      'El P2 b) demana representar energia mecànica, potencial i cinètica en funció de la posició vertical.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P2', 'P2'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x20',
    prompt:
      'El P3 diu que la superfície terrestre és principalment aigua amb ions que li donen càrrega neta negativa.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x21',
    prompt:
      'L’enunciat general diu que si es respon a més de quatre problemes només es corregeixen els quatre primers.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x22',
    prompt:
      'El P1 es refereix explícitament al Mercury Planetary Orbiter (MPO) construït per l’ESA.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x23',
    prompt:
      'El P3 dóna la massa de l’electró me = 9,11 × 10⁻³¹ kg i |e| = 1,602 × 10⁻¹⁹ C.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P3', 'P3'),
  },
  {
    kind: 'true_false',
    id: 'fi24-x24',
    prompt:
      'El P1 a) demana calcular la velocitat orbital del MPO mentre orbita Mercuri.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Física · P1', 'P1'),
  },
]
