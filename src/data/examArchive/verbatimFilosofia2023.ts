import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/historia-filosofia/ord/pau_hfil23jl.pdf'

/** Exercici 1 — textos A (Descartes, Med. VI) i B (Plató, República IV). */
export const VERBATIM_PAU23_FILOSOFIA: Question[] = [
  {
    kind: 'true_false',
    id: 'fil23-d1',
    prompt:
      'Segons el text de Descartes (opció A), el cos, per la seva naturalesa, és sempre divisible.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d2',
    prompt:
      'Descartes diu que, quan considera el seu esperit com a «només una cosa que pensa», no hi pot distingir cap part.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d3',
    prompt:
      'Descartes afirma que, si perdés un peu o un braç, se suprimiria una part del seu esperit.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d4',
    prompt:
      'Descartes escriu que les facultats de voler, sentir i entendre es poden dir pròpiament «parts» de l’esperit.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d5',
    prompt:
      'Segons Descartes, cap cos extens deixa de ser divisible en parts en el pensament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d6',
    prompt:
      'El fragment de Descartes conclou que l’esperit o l’ànima humana és totalment diferent del cos.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p1',
    prompt:
      'En el text de Plató (opció B), es diu que governar correspon a la part racional de l’ànima.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p2',
    prompt:
      'Plató assigna a la part «fogosa» el paper de sotmetre la part concupiscible sense raó.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p3',
    prompt:
      'El text de Plató anomena «coratjós» qui manté el que indica la raó sobre el que ha de témer malgrat plaers o dolors.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p4',
    prompt:
      'Segons el diàleg, la temprança és la unanimitat i harmonia de les tres parts quan la raó governa i les altres obeeixen.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p5',
    prompt:
      'Plató diu que la part concupiscible és naturalment insaciable de béns i ocupa la porció més gran de l’ànima.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p6',
    prompt:
      'El text pregunta si hi ha algun punt borrós en la visió de la justícia respecte del que es va trobar que era a la ciutat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p7',
    prompt:
      'En el fragment, la resposta a si la justícia individual difereix de la de la ciutat és «No ho crec».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d7',
    prompt:
      'Descartes diu que concebé el seu esperit com una cosa «única i íntegra».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d8',
    prompt:
      'Descartes afirma que l’esperit està unit a tot el cos però que perdre un membre no en treu cap part a l’esperit.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p8',
    prompt:
      'Plató diu que la part racional té «previsió sobre tota l’ànima».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p9',
    prompt:
      'El text identifica com a savi qui posseeix el coneixement del que convé a cadascuna de les tres parts.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p10',
    prompt:
      'Segons Plató, un home és just pel que s’ha dit «tantes vegades» al text sobre la ciutat i l’individu.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d9',
    prompt:
      'Descartes contraposa que l’esperit és «del tot indivisible» i el cos és divisible.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d10',
    prompt:
      'Descartes escriu que és un únic esperit el que vol, sent i entén.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p11',
    prompt:
      'Plató diu que la part fogosa ha de ser súbdita i aliada de la part racional.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p12',
    prompt:
      'El fragment de Plató afirma que la temprança és el mateix en la ciutat i en l’individu.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p13',
    prompt:
      'Plató descriu la justícia com a acord entre les parts perquè la raó governi.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-d11',
    prompt:
      'Descartes indica que el coneixement del cos com a divisible basta per mostrar que l’esperit és diferent del cos.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p14',
    prompt:
      'En el text de Plató, es diu que la part fogosa ha d’obeir el que la raó indica sobre el que s’ha de témer.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil23-p15',
    prompt:
      'Plató afirma que la part concupiscible és la més gran espacialment dins l’ànima.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
]
