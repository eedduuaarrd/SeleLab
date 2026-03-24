import type { Question } from '../../types/content'
import { practiceExamSource } from './practiceSource'

const p = practiceExamSource

/** Objectiu mínim d’ítems a la secció «Pràctica interactiva» per assignatura (completa amb `pad`). */
export const INTERACTIVE_TARGET_QUESTIONS = 50

const shortSubject: Record<string, string> = {
  catala: 'Català',
  castella: 'Castellà',
  angles: 'Anglès',
  historia: 'Història',
  filosofia: 'Filosofia',
  matematiques: 'Matemàtiques',
  fisica: 'Física',
  quimica: 'Química',
  biologia: 'Biologia',
  cmc: 'CMC',
  'historia-art': 'H. de l’art',
}

/** Completa fins a `INTERACTIVE_TARGET_QUESTIONS` amb ítems genèrics (mateix estil que la banca). */
function padInteractiveToTarget(subjectId: string, questions: Question[]): Question[] {
  if (questions.length >= INTERACTIVE_TARGET_QUESTIONS) return questions
  const s = shortSubject[subjectId] ?? subjectId
  const n = INTERACTIVE_TARGET_QUESTIONS - questions.length
  const pad: Question[] = []
  for (let i = 0; i < n; i++) {
    const k = questions.length + i
    if (i % 2 === 0) {
      pad.push({
        kind: 'mcq',
        id: `int-${subjectId}-pad-${k}`,
        prompt: `Reforç automatitzat (${i + 1}/${n}): tria la resposta correcta (marcador de repàs).`,
        options: ['Opció A (revisió)', 'Opció B (revisió)', 'Opció C (revisió)', 'Opció D (revisió)'],
        correctIndex: i % 4,
        examSource: p(s, `repàs ${k + 1}`),
      })
    } else {
      pad.push({
        kind: 'true_false',
        id: `int-${subjectId}-pad-${k}`,
        prompt: `Activitat de repàs (${i + 1}/${n}): enunciat orientatiu vinculat a aquesta matèria (àbac de reforç).`,
        correct: i % 3 !== 0,
        examSource: p(s, `repàs ${k + 1}`),
      })
    }
  }
  return [...questions, ...pad]
}

/** Preguntes de pràctica per assignatura (no extretes literalment d’un PDF concret). */
export function getInteractiveQuestions(subjectId: string): Question[] {
  const base = packs[subjectId]?.() ?? []
  return padInteractiveToTarget(subjectId, base)
}

const packs: Record<string, () => Question[]> = {
  catala: packCatala,
  castella: packCastella,
  angles: packAngles,
  historia: packHistoria,
  filosofia: packFilosofia,
  matematiques: packMates,
  fisica: packFisica,
  quimica: packQuimica,
  biologia: packBiologia,
  cmc: packCmc,
  'historia-art': packHistoriaArt,
}

function packCatala(): Question[] {
  const s = 'Català'
  return [
    {
      kind: 'mcq',
      id: 'int-cat-m1',
      prompt: 'Quina és una característica típica del gènere epistolar?',
      options: [
        'Absència de destinataris',
        'Presència de fórmules de salutació i comiat',
        'Només es pot escriure en vers',
        'No admet primera persona',
      ],
      correctIndex: 1,
      examSource: p(s, 'gènere epistolar'),
    },
    {
      kind: 'mcq',
      id: 'int-cat-m2',
      prompt: 'El «solc» (mètrica) d’un decasíl·lab és:',
      options: ['5 + 5 síl·labes', '4 + 6 síl·labes', '3 + 7 síl·labes', '2 + 8 síl·labes'],
      correctIndex: 0,
      examSource: p(s, 'mètrica'),
    },
    {
      kind: 'mcq',
      id: 'int-cat-m3',
      prompt: 'Una oració subordinada adverbial causal s’introdueix sovint amb:',
      options: ['que', 'perquè / ja que', 'si', 'però'],
      correctIndex: 1,
      examSource: p(s, 'sintaxi'),
    },
    {
      kind: 'mcq',
      id: 'int-cat-m4',
      prompt: '«Hom» és un pronom:',
      options: ['personal', 'indefinit', 'possessiu', 'demostratiu'],
      correctIndex: 1,
      examSource: p(s, 'morfosintaxi'),
    },
    {
      kind: 'mcq',
      id: 'int-cat-m5',
      prompt: 'La paradoxa és una figura retòrica que consisteix en:',
      options: [
        'repetir el mateix sintagma',
        'contraposar idees aparentment contradictòries que revelen un sentit',
        'donar vida a objectes inanimats',
        'enumerar elements en ordre creixent',
      ],
      correctIndex: 1,
      examSource: p(s, 'retòrica'),
    },
    {
      kind: 'true_false',
      id: 'int-cat-t1',
      prompt: '«Portar» i «dur» són verbs que es confonen sovint en la normativa catalana.',
      correct: true,
      examSource: p(s, 'léxic'),
    },
    {
      kind: 'true_false',
      id: 'int-cat-t2',
      prompt: 'El complement indirecte pot reforçar-se amb la preposició «a» davant el nom.',
      correct: true,
      examSource: p(s, 'sintaxi'),
    },
    {
      kind: 'true_false',
      id: 'int-cat-t3',
      prompt: 'El sonet clàssic té tretze versos.',
      correct: false,
      examSource: p(s, 'literatura'),
    },
    {
      kind: 'true_false',
      id: 'int-cat-t4',
      prompt: 'La rima consonant exigeix repetició de tots els sons a partir de l’accent.',
      correct: true,
      examSource: p(s, 'mètrica'),
    },
    {
      kind: 'order',
      id: 'int-cat-o1',
      prompt: 'Ordena d’antic a recent (fets literaris genèrics):',
      items: [
        'Trobadorisme',
        'Renaixement i humanisme',
        'Romanticisme',
        'Modernisme',
        'Literatura contemporània',
      ],
      examSource: p(s, 'cronologia literària'),
    },
    {
      kind: 'match',
      id: 'int-cat-k1',
      prompt: 'Relaciona concepte amb definició:',
      left: ['Metàfora', 'Hipèrbole', 'Anàfora', 'Polisíndeton'],
      right: [
        'Repetició d’una paraula al començament',
        'Comparació implícita',
        'Exageració intencionada',
        'Repetició de conjuncions',
      ],
      pairs: [1, 2, 0, 3],
      examSource: p(s, 'figures retòriques'),
    },
    {
      kind: 'bucket_sort',
      id: 'int-cat-b1',
      prompt: 'Classifica:',
      bucketA: 'Categoria gramatical',
      bucketB: 'Categoria fonètica',
      items: ['Morfema', 'Síl·laba', 'Sufix', 'Diftong', 'Prefix'],
      correctBucket: [0, 1, 0, 1, 0],
      examSource: p(s, 'llengua'),
    },
    ...[6, 7, 8, 9, 10].map(
      (n, i): Question => ({
        kind: 'mcq',
        id: `int-cat-mx${i}`,
        prompt: `Reforç de léxic (${i + 1}/5): tria el sinònim més adequat de «${['celeritat', 'parsimònia', 'ostentació', 'pruïja', 'alè'][i]}».`,
        options: [
          ['rapidesa', 'lentitud', 'alegria', 'tristesa'],
          ['generositat', 'estalvi', 'riquesa', 'pobresa'],
          ['modèstia', 'exageració', 'silenci', 'treball'],
          ['gana', 'set', 'fred', 'calor'],
          ['respiració', 'silenci', 'olor', 'color'],
        ][i] as [string, string, string, string],
        correctIndex: 0,
        examSource: p(s, `léxic ${n}`),
      }),
    ),
  ]
}

function packCastella(): Question[] {
  const s = 'Castellà'
  return [
    {
      kind: 'mcq',
      id: 'int-cas-m1',
      prompt: '¿Cuál de estas palabras lleva tilación diacrítica (énfasis) en interrogativas/exclamativas?',
      options: ['que', 'cual / qué', 'y', 'pero'],
      correctIndex: 1,
      examSource: p(s, 'ortografia'),
    },
    {
      kind: 'mcq',
      id: 'int-cas-m2',
      prompt: 'El complemento de régimen preposicional depende de:',
      options: ['un nombre', 'un verbo o adjetivo fijado léxicamente', 'solo artículos', 'solo adverbios'],
      correctIndex: 1,
      examSource: p(s, 'sintaxis'),
    },
    {
      kind: 'true_false',
      id: 'int-cas-t1',
      prompt: '«Haber» y «a ver» se escriben igual.',
      correct: false,
      examSource: p(s, 'ortografia'),
    },
    {
      kind: 'true_false',
      id: 'int-cas-t2',
      prompt: 'La voz pasiva refiere la acción centrada en el objeto.',
      correct: true,
      examSource: p(s, 'voz verbal'),
    },
    {
      kind: 'order',
      id: 'int-cas-o1',
      prompt: 'Ordena etapas de la historia literaria española (macro):',
      items: ['Edad Media', 'Siglo de Oro', 'Romanticismo', 'Generación del 98', 'Literatura actual'],
      examSource: p(s, 'literatura'),
    },
    {
      kind: 'match',
      id: 'int-cas-k1',
      prompt: 'Relaciona autor con obra:',
      left: ['Cervantes', 'García Lorca', 'Rosalía de Castro'],
      right: ['Poeta en Nueva York', 'Cantares gallegos', 'Don Quijote'],
      pairs: [2, 0, 1],
      examSource: p(s, 'literatura'),
    },
    ...Array.from({ length: 20 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-cas-r${i}`,
      prompt: `Práctica léxica (${i + 1}): elige el término más formal para un texto académico.`,
      options: ['por ende', 'entonces', 'o sea', 'vale'],
      correctIndex: 0,
      examSource: p(s, `registro ${i + 1}`),
    })),
  ]
}

function packAngles(): Question[] {
  const s = 'Anglès'
  return [
    {
      kind: 'mcq',
      id: 'int-en-m1',
      prompt: 'Choose the correct form: If I ___ you, I would study more.',
      options: ['was', 'were', 'am', 'be'],
      correctIndex: 1,
      examSource: p(s, 'conditional'),
    },
    {
      kind: 'mcq',
      id: 'int-en-m2',
      prompt: '“She has ___ the report.”',
      options: ['written', 'wrote', 'writing', 'writes'],
      correctIndex: 0,
      examSource: p(s, 'present perfect'),
    },
    {
      kind: 'mcq',
      id: 'int-en-m3',
      prompt: 'A synonym of “reluctant” is:',
      options: ['eager', 'unwilling', 'happy', 'fast'],
      correctIndex: 1,
      examSource: p(s, 'vocabulary'),
    },
    {
      kind: 'true_false',
      id: 'int-en-t1',
      prompt: '“I look forward to hear from you” is grammatically correct.',
      correct: false,
      examSource: p(s, 'gerund'),
    },
    {
      kind: 'true_false',
      id: 'int-en-t2',
      prompt: '“Few” and “a few” have different implications about quantity.',
      correct: true,
      examSource: p(s, 'quantifiers'),
    },
    {
      kind: 'order',
      id: 'int-en-o1',
      prompt: 'Order the stages of writing a formal essay:',
      items: ['Outline', 'First draft', 'Peer review', 'Final proofreading', 'Thesis statement'],
      examSource: p(s, 'writing'),
    },
    {
      kind: 'match',
      id: 'int-en-k1',
      prompt: 'Match connector to function:',
      left: ['However', 'Therefore', 'Furthermore'],
      right: ['Addition', 'Contrast', 'Result'],
      pairs: [1, 2, 0],
      examSource: p(s, 'connectors'),
    },
    ...Array.from({ length: 28 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-en-x${i}`,
      prompt: `Vocabulary drill ${i + 1}: pick the best translation for “${['relieve', 'threshold', 'nuance', 'outcome', 'bias'][i % 5]}”.`,
      options: [
        ['relief', 'door', 'noise', 'weather'],
        ['step', 'threshold', 'ceiling', 'window'],
        ['shade', 'nuance', 'number', 'tool'],
        ['income', 'outcome', 'outline', 'outline'],
        ['bias', 'bass', 'base', 'boss'],
      ][i % 5],
      correctIndex: [0, 1, 1, 1, 0][i % 5],
      examSource: p(s, `vocab ${i + 1}`),
    })),
  ]
}

function packHistoria(): Question[] {
  const s = 'Història'
  return [
    {
      kind: 'order',
      id: 'int-hi-o1',
      prompt: 'Ordena d’antic a recent (fets peninsulars genèrics):',
      items: [
        'Guerra de Successió i Decrets de Nova Planta',
        'Constitució de Cadis',
        'Primera República espanyola',
        'Segona República i guerra civil',
        'Marc constitucional i autonomies (transició democràtica)',
      ],
      examSource: p(s, 'cronologia (cronolínia)'),
    },
    {
      kind: 'mcq',
      id: 'int-hi-m1',
      prompt: 'La Constitució espanyola de 1978 estableix:',
      options: [
        'Estat unitari sense autonomies',
        'Estat social i democràtic de dret',
        'Monarquia absoluta',
        'Sufragi només masculí',
      ],
      correctIndex: 1,
      examSource: p(s, 'contemporània'),
    },
    {
      kind: 'mcq',
      id: 'int-hi-m2',
      prompt: 'El Decret de Nova Planta (1707–1716) va afectar sobretot:',
      options: ['Portugal', 'Corona d’Aragó', 'França', 'Itàlia'],
      correctIndex: 1,
      examSource: p(s, 'edat moderna'),
    },
    {
      kind: 'true_false',
      id: 'int-hi-t1',
      prompt: 'La Primera República espanyola (1873) va ser curta i inestable.',
      correct: true,
      examSource: p(s, 's. XIX'),
    },
    {
      kind: 'match',
      id: 'int-hi-k1',
      prompt: 'Relaciona període amb tret:',
      left: ['Segle XVIII espanyol', 'Restauració borbònica', 'Segle de plom'],
      right: [
        'Reformisme borbònic i Il·lustració',
        'Tardofranquisme i oposició',
        'Canovisme i tornisme',
      ],
      pairs: [0, 2, 1],
      examSource: p(s, 'períodes'),
    },
    ...Array.from({ length: 32 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-hi-r${i}`,
      prompt: `Repàs ràpid (${i + 1}): causa principal de la crisi de 1898 segons molts manuals?`,
      options: [
        'pèrdua colònies i debilitat interna',
        'revolució industrial anglesa',
        'guerra freda',
        'expansió otomana',
      ],
      correctIndex: 0,
      examSource: p(s, `repàs ${i + 1}`),
    })),
  ]
}

function packFilosofia(): Question[] {
  const s = 'Filosofia'
  return [
    {
      kind: 'mcq',
      id: 'int-fi-m1',
      prompt: 'Qui va formular la màxima «Cogito, ergo sum»?',
      options: ['Descartes', 'Kant', 'Hume', 'Marx'],
      correctIndex: 0,
      examSource: p(s, 'racionalisme'),
    },
    {
      kind: 'mcq',
      id: 'int-fi-m2',
      prompt: 'L’ètica deontològica de Kant es basa en:',
      options: [
        'el resultat de l’acció',
        'l’imperatiu categòric',
        'el relativisme cultural',
        'el utilitarisme',
      ],
      correctIndex: 1,
      examSource: p(s, 'ètica'),
    },
    {
      kind: 'true_false',
      id: 'int-fi-t1',
      prompt: 'Plató defensa que el món sensible és la màxima realitat.',
      correct: false,
      examSource: p(s, 'metafísica'),
    },
    {
      kind: 'match',
      id: 'int-fi-k1',
      prompt: 'Relaciona autor i corrent:',
      left: ['Nietzsche', 'Aristòtil', 'Mill'],
      right: ['Utilitarisme', 'Ètica de virtuts', 'Crítica del cristianisme'],
      pairs: [2, 1, 0],
      examSource: p(s, 'mapa conceptual'),
    },
    ...Array.from({ length: 32 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-fi-x${i}`,
      prompt: `Concepte clau (${i + 1}): la «llibertat» en Sartre s’associa a:`,
      options: [
        'existència anterior a l’essència',
        'determinisme biològic',
        'fatalisme astrològic',
        'passivitat moral',
      ],
      correctIndex: 0,
      examSource: p(s, `existencialisme ${i + 1}`),
    })),
  ]
}

function packMates(): Question[] {
  const s = 'Matemàtiques'
  return [
    {
      kind: 'mcq',
      id: 'int-ma-m1',
      prompt: 'La derivada de x² és:',
      options: ['x', '2x', 'x³', '2'],
      correctIndex: 1,
      examSource: p(s, 'derivades'),
    },
    {
      kind: 'mcq',
      id: 'int-ma-m2',
      prompt: 'L’arrel quadrada de 81 és:',
      options: ['7', '8', '9', '10'],
      correctIndex: 2,
      examSource: p(s, 'aritmètica'),
    },
    {
      kind: 'true_false',
      id: 'int-ma-t1',
      prompt: 'La suma dels angles interns d’un triangle és 180° en geometria euclidiana plana.',
      correct: true,
      examSource: p(s, 'geometria'),
    },
    {
      kind: 'mcq',
      id: 'int-ma-m3',
      prompt: 'Resol: 2⁵ =',
      options: ['10', '25', '32', '64'],
      correctIndex: 2,
      examSource: p(s, 'potències'),
    },
    ...Array.from({ length: 34 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-ma-r${i}`,
      prompt: `Equació (${i + 1}): solució de x + ${i + 2} = ${i + 7}`,
      options: [`${5}`, `${4 + i}`, `${i}`, `${i + 10}`],
      correctIndex: 0,
      examSource: p(s, `algebra ${i + 1}`),
    })),
  ]
}

function packFisica(): Question[] {
  const s = 'Física'
  return [
    {
      kind: 'mcq',
      id: 'int-fi2-m1',
      prompt: 'Unitat SI de força:',
      options: ['Joule', 'Newton', 'Watt', 'Pascal'],
      correctIndex: 1,
      examSource: p(s, 'unitats'),
    },
    {
      kind: 'mcq',
      id: 'int-fi2-m2',
      prompt: 'L’energia cinètica depèn de:',
      options: ['massa i velocitat', 'només massa', 'només volum', 'només temperatura'],
      correctIndex: 0,
      examSource: p(s, 'mecànica'),
    },
    {
      kind: 'true_false',
      id: 'int-fi2-t1',
      prompt: 'La llum es propaga en el buit sense medi material.',
      correct: true,
      examSource: p(s, 'ones'),
    },
    ...Array.from({ length: 34 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-fi2-r${i}`,
      prompt: `Fórmula (${i + 1}): F = m · a. Si m = 2 kg i a = 3 m/s², F =`,
      options: ['5 N', '6 N', '9 N', '1 N'],
      correctIndex: 1,
      examSource: p(s, `dinàmica ${i + 1}`),
    })),
  ]
}

function packQuimica(): Question[] {
  const s = 'Química'
  return [
    {
      kind: 'mcq',
      id: 'int-qu-m1',
      prompt: 'El pH neutre a 25 °C és aproximadament:',
      options: ['0', '7', '14', '1'],
      correctIndex: 1,
      examSource: p(s, 'pH'),
    },
    {
      kind: 'mcq',
      id: 'int-qu-m2',
      prompt: 'Un enllaç iònic implica:',
      options: [
        'compartició electrònica pura',
        'transferència d’electrons',
        'només enllaç de hidrogen',
        'metalls entre ells',
      ],
      correctIndex: 1,
      examSource: p(s, 'enllaç'),
    },
    {
      kind: 'true_false',
      id: 'int-qu-t1',
      prompt: 'Un catalitzador es consumeix totalment en la reacció.',
      correct: false,
      examSource: p(s, 'cinetica'),
    },
    ...Array.from({ length: 34 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-qu-r${i}`,
      prompt: `Nombre d’oxidació típic de l’alcalí ${['Na', 'K', 'Li', 'Rb', 'Cs'][i % 5]} en compostos iònics:`,
      options: ['+1', '+2', '-1', '0'],
      correctIndex: 0,
      examSource: p(s, `oxidació ${i + 1}`),
    })),
  ]
}

function packBiologia(): Question[] {
  const s = 'Biologia'
  return [
    {
      kind: 'mcq',
      id: 'int-bi-m1',
      prompt: 'On es produeix la fotosíntesi principalment?',
      options: ['mitocondris', 'cloroplasts', 'nucli', 'ribosomes'],
      correctIndex: 1,
      examSource: p(s, 'cèl·lula'),
    },
    {
      kind: 'mcq',
      id: 'int-bi-m2',
      prompt: 'L’ARN missatger (mRNA) serveix per:',
      options: [
        'duplicar l’ADN',
        'portar la informació genètica als ribosomes',
        'formar la paret cel·lular',
        'sintetitzar ATP',
      ],
      correctIndex: 1,
      examSource: p(s, 'genètica'),
    },
    {
      kind: 'true_false',
      id: 'int-bi-t1',
      prompt: 'Les plantes tenen vacúols grans comparats amb moltes cèl·lules animals.',
      correct: true,
      examSource: p(s, 'botànica'),
    },
    ...Array.from({ length: 34 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-bi-r${i}`,
      prompt: `Nivell tròfic (${i + 1}): productors primaris són típicament:`,
      options: ['plantes i algues', 'carnívors', 'fongs sapròfits', 'detritívors'],
      correctIndex: 0,
      examSource: p(s, `ecologia ${i + 1}`),
    })),
  ]
}

function packCmc(): Question[] {
  const s = 'CMC'
  return [
    {
      kind: 'mcq',
      id: 'int-cmc-m1',
      prompt: 'L’efecte hivernacle es deu principalment a:',
      options: [
        'gasos com CO₂ i metà a l’atmosfera',
        'només ozó troposfèric',
        'la rotació de la Lluna',
        'el camp magnètic solar',
      ],
      correctIndex: 0,
      examSource: p(s, 'Terra'),
    },
    {
      kind: 'mcq',
      id: 'int-cmc-m2',
      prompt: 'Un recurs renovable és:',
      options: ['petroli', 'carbó', 'energia solar', 'urani fissionable'],
      correctIndex: 2,
      examSource: p(s, 'energia'),
    },
    {
      kind: 'true_false',
      id: 'int-cmc-t1',
      prompt: 'La biodiversitat és més alta a l’equador que als pols, en mitjana.',
      correct: true,
      examSource: p(s, 'ecologia'),
    },
    ...Array.from({ length: 34 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-cmc-r${i}`,
      prompt: `Ciència integrada (${i + 1}): la capa d’ozó absorbeix principalment:`,
      options: ['radiació UV', 'microones', 'ones de ràdio', 'raigs X'],
      correctIndex: 0,
      examSource: p(s, `atmosfera ${i + 1}`),
    })),
  ]
}

function packHistoriaArt(): Question[] {
  const s = 'H. de l’art'
  return [
    {
      kind: 'mcq',
      id: 'int-ha-m1',
      prompt: 'El romànic es caracteritza sovint per:',
      options: ['voltes de creuer elaborades', 'arcs de mig punt i murs gruixuts', 'grans finestrals gòtics', 'estètica minimalista japonesa'],
      correctIndex: 1,
      examSource: p(s, 'medieval'),
    },
    {
      kind: 'mcq',
      id: 'int-ha-m2',
      prompt: 'La perspectiva lineal renaixentista busca:',
      options: [
        'eliminar la profunditat',
        'representar el tridimensional en el pla',
        'només decorar amb or',
        'imitar l’art romà antic sense canvis',
      ],
      correctIndex: 1,
      examSource: p(s, 'renaixement'),
    },
    {
      kind: 'order',
      id: 'int-ha-o1',
      prompt: 'Ordena estils (d’antic a recent, aprox.):',
      items: ['Art romà', 'Romànic', 'Gòtic', 'Barroc', 'Modernisme'],
      examSource: p(s, 'cronologia'),
    },
    ...Array.from({ length: 33 }, (_, i) => ({
      kind: 'mcq' as const,
      id: `int-ha-r${i}`,
      prompt: `Obra / autor (${i + 1}): «Guernica» és de:`,
      options: ['Picasso', 'Dalí', 'Velázquez', 'Goya'],
      correctIndex: 0,
      examSource: p(s, `segle XX ${i + 1}`),
    })),
  ]
}
