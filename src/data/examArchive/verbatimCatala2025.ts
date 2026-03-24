import type { ExamSource, Question } from '../../types/content'
import { PAU25_CATALA_SERIE0_PDF } from './constants'

function src(ref: string, short: string): ExamSource {
  return {
    label: `PAU 2025 · sèrie 0 · ${short}`,
    pdfUrl: PAU25_CATALA_SERIE0_PDF,
    reference: ref,
  }
}

/**
 * Ítems amb enunciat transcripció del PDF oficial (comprensió lectora, V/F, gramàtica amb opcions).
 * Les respostes correctes segueixen la pauta de correcció del mateix model; contrasta sempre amb el PDF.
 */
export const VERBATIM_PAU25_CATALA: Question[] = [
  // 1.1 — comprensió lectora (text Geoffrey Hinton)
  {
    kind: 'true_false',
    id: 'p25-v-1-1a',
    prompt:
      'Després de llegir el text: «Hinton i les seves recerques de fa més de 40 anys són la base dels sistemes actuals d’IA.»',
    correct: true,
    examSource: src('1.1.a', '1.1 a'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-1-1b',
    prompt: '«ChatGPT no té res a veure amb la intel·ligència artificial (IA).»',
    correct: false,
    examSource: src('1.1.b', '1.1 b'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-1-1c',
    prompt: '«Hinton encara treballa a Google.»',
    correct: false,
    examSource: src('1.1.c', '1.1 c'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-1-1d',
    prompt: '«Hinton va vendre la seva empresa a OpenAI.»',
    correct: false,
    examSource: src('1.1.d', '1.1 d'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-1-1e',
    prompt: '«Molts dels vídeos, fotos i textos fets amb IA són falsos.»',
    correct: true,
    examSource: src('1.1.e', '1.1 e'),
  },
  // 2.2.2 — fet literari
  {
    kind: 'true_false',
    id: 'p25-v-2-2-2a',
    prompt: '«El conte és un exemple de text expositiu.»',
    correct: false,
    examSource: src('2.2.2.a', '2.2.2 a'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-2b',
    prompt:
      '«L’epítet és un adjectiu que aporta una informació significativa essencial.»',
    correct: true,
    examSource: src('2.2.2.b', '2.2.2 b'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-2c',
    prompt: '«Terra baixa, d’Àngel Guimerà, és un drama realista.»',
    correct: true,
    examSource: src('2.2.2.c', '2.2.2 c'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-2d',
    prompt: '«L’expressió ubi sunt és un tòpic literari.»',
    correct: true,
    examSource: src('2.2.2.d', '2.2.2 d'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-2e',
    prompt: '«Tradicionalment, les obres de teatre acostumen a tenir quatre actes.»',
    correct: false,
    examSource: src('2.2.2.e', '2.2.2 e'),
  },
  // 2.2.4
  {
    kind: 'true_false',
    id: 'p25-v-2-2-4a',
    prompt:
      '«La interrogació retòrica consisteix en una pregunta que no espera cap resposta de ningú.»',
    correct: true,
    examSource: src('2.2.4.a', '2.2.4 a'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-4b',
    prompt: '«Joan Maragall va ser un autor avantguardista.»',
    correct: false,
    examSource: src('2.2.4.b', '2.2.4 b'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-4c',
    prompt: '«Els versos de set síl·labes s’anomenen heptasíl·labs.»',
    correct: true,
    examSource: src('2.2.4.c', '2.2.4 c'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-4d',
    prompt:
      '«La crítica literària és un gènere literari en què els autors narren històries fictícies per entretenir el lector.»',
    correct: false,
    examSource: src('2.2.4.d', '2.2.4 d'),
  },
  {
    kind: 'true_false',
    id: 'p25-v-2-2-4e',
    prompt: '«El tòpic literari homo viator vol dir «home viatger».»',
    correct: true,
    examSource: src('2.2.4.e', '2.2.4 e'),
  },
  // 3.1 — reflexió lingüística (opcions com al full)
  {
    kind: 'mcq',
    id: 'p25-v-3-1-1',
    prompt:
      'Indiqueu l’anàlisi correcta del sintagma subratllat: «Semblava que a les autoritats de la Tercera República no els importava gaire aquell tros de França perdut al sud.» (no els importava)',
    options: [
      'Complement agent',
      'Complement o objecte indirecte',
      'Atribut',
      'Complement de l’adjectiu',
    ],
    correctIndex: 1,
    explanation: 'Contrastar amb la pauta oficial del PDF.',
    examSource: src('3.1.1', '3.1.1'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-1-2',
    prompt:
      '«Mentre que en anys anteriors els nous dispositius, el 5G o la realitat virtual acaparaven totes les mirades, aquest cop els robots han estat els protagonistes dels estands de les companyies nascudes a Catalunya que s’han exposat al congrés.» — Anàlisi de «que s’han exposat al congrés»:',
    options: [
      'Oració subordinada substantiva de complement directe',
      'Oració subordinada adjectiva o de relatiu de complement del nom',
      'Oració subordinada substantiva de subjecte',
      'Construcció o clàusula d’infinitiu temporal',
    ],
    correctIndex: 1,
    examSource: src('3.1.2', '3.1.2'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-1-3',
    prompt:
      '«Al Congrés, Keybotic hi exposa el seu gos robot autònom, que fa inspeccions industrials.» — Anàlisi de «hi»:',
    options: [
      'Complement o objecte indirecte',
      'Complement o objecte directe',
      'Subjecte',
      'Complement circumstancial (o adjunt)',
    ],
    correctIndex: 3,
    examSource: src('3.1.3', '3.1.3'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-1-4',
    prompt:
      '«Amb el balandrejar del carro, els bidons de llauna picaven els uns contra els altres. La noia era l’encarregada de vigilar que mantinguessin l’estabilitat.» — Anàlisi de «que mantinguessin l’estabilitat»:',
    options: [
      'Oració subordinada substantiva de complement directe',
      'Oració subordinada adjectiva o de relatiu de complement del nom',
      'Oració subordinada substantiva de subjecte',
      'Construcció o clàusula d’infinitiu temporal',
    ],
    correctIndex: 0,
    examSource: src('3.1.4', '3.1.4'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-1-5',
    prompt: '«[…] els cerdans del nord no se sentien gens ni mica francesos.» — Funció de «els cerdans del nord»:',
    options: ['Subjecte', 'Atribut', 'Complement del nom', 'Complement predicatiu'],
    correctIndex: 0,
    examSource: src('3.1.5', '3.1.5'),
  },
  // 3.2.1 — paraules entre parèntesis (forma correcta)
  {
    kind: 'mcq',
    id: 'p25-v-3-2-1a',
    prompt:
      'Completeu amb la forma adequada: «Si no vols gastar gaires diners, no vinguis amb avió ___ amb tren» (SINÓ / SI NO).',
    options: ['SINÓ', 'SI NO', 'si', 'sí'],
    correctIndex: 1,
    examSource: src('3.2.1.a', '3.2.1 a'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-1b',
    prompt:
      '«No siguis exigent! No tinc ___ de temps per perdre.» (TAN / TANT)',
    options: ['TAN', 'TANT', 'tanta', 'tants'],
    correctIndex: 1,
    examSource: src('3.2.1.b', '3.2.1 b'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-1c',
    prompt:
      '«Avui beurem aigua de vi. No n’he sabut trobar ___ les ampolles.» (ENLLOC / EN LLOC)',
    options: ['ENLLOC', 'EN LLOC', 'en lo', 'en loç'],
    correctIndex: 0,
    examSource: src('3.2.1.c', '3.2.1 c'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-1e',
    prompt:
      '«—Encara no sé ___ hem vingut. —Quan vingui el vostre cap us explicarà el ___ de la reunió.» (PERQUÈ / PER QUÈ) — Primera lletra buida:',
    options: ['PERQUÈ', 'PER QUÈ', 'per que', 'perquè'],
    correctIndex: 1,
    examSource: src('3.2.1.e', '3.2.1 e'),
  },
  // 3.2.2 — formes verbals (una opció correcta per ítem)
  {
    kind: 'mcq',
    id: 'p25-v-3-2-2a',
    prompt:
      '«He volgut posar tota la roba a la maleta, però no m’hi ha ___» (CABRE). Trieu la forma correcta:',
    options: ['cabut', 'cabuda', 'cabré', 'cabrem'],
    correctIndex: 0,
    examSource: src('3.2.2.a', '3.2.2 a'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-2b',
    prompt: '«Nois! No ___ a terra que us embrutareu.» (SEURE). Forma correcta (imperatiu):',
    options: ['seieu', 'seu', 'seguis', 'sessió'],
    correctIndex: 1,
    examSource: src('3.2.2.b', '3.2.2 b'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-2c',
    prompt:
      '«Si fos per mi, encara ___ més cotxes de Barcelona.» (TREURE). Forma verbal adequada:',
    options: ['treuria', 'trauria', 'tregui', 'tragués'],
    correctIndex: 0,
    examSource: src('3.2.2.c', '3.2.2 c'),
  },
  {
    kind: 'mcq',
    id: 'p25-v-3-2-2e',
    prompt: '«Què passaria si es ___ tot el gel del planeta?» (FONDRE). Forma correcta:',
    options: ['fonia', 'fondria', 'fondés', 'fonàs'],
    correctIndex: 1,
    examSource: src('3.2.2.e', '3.2.2 e'),
  },
  // 2.1.1 — tema del poema (enunciat literal; opcions pedagògiques)
  {
    kind: 'mcq',
    id: 'p25-v-2-1-1',
    prompt: '«Quin és el tema del poema «Lo Pi de Formentor» de Miquel Costa i Llobera?»',
    options: [
      'La glorificació de l’arbre com a símbol de resistència i sublimació',
      'La crítica social de la burgesia mallorquina',
      'La descripció d’una odissea mitològica',
      'El conflicte bèl·lic entre dues viles costaneres',
    ],
    correctIndex: 0,
    examSource: src('2.1.1', '2.1.1'),
  },
]
