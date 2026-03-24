import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/historia-filosofia/ord/pau_hfil24jl.pdf'

/** Exercici 1 — textos A (Descartes, Med. II, cera) i B (Locke, Segon tractat, XIX). */
export const VERBATIM_PAU24_FILOSOFIA: Question[] = [
  {
    kind: 'true_false',
    id: 'fil24-d1',
    prompt:
      'Descartes (opció A) descriu canvis de la cera quan s’aproxima al foc: olor que s’esvaeix, canvi de color, la cera es fon, s’escalfa, etc.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d2',
    prompt:
      'Descartes pregunta si subsisteix la mateixa cera després d’aquests canvis i respon que cal confessar que subsisteix la mateixa cera.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d3',
    prompt:
      'Descartes afirma que el que es coneixia distintament de la cera no pot ser res del que s’ha notat pels sentits, perquè tot això ha canviat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d4',
    prompt:
      'Al final del raonament, Descartes diu que només resta «alguna cosa extensa, flexible i mutable» quan s’aparten les qualitats sensibles.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d5',
    prompt:
      'Descartes conclou que la percepció del tros de cera és una visió o un tacte o una imaginació.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d6',
    prompt:
      'Descartes diu que la percepció del tros de cera és una «inspecció de l’esperit».',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d7',
    prompt:
      'Descartes escriu que el tros de cera només pot ser comprès per l’enteniment o per l’esperit.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l1',
    prompt:
      'Locke (opció B) diu que quan els legisladors intenten destruir la propietat del poble o reduir els homes a esclaus, es posen en estat de guerra amb el poble.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l2',
    prompt:
      'Segons Locke, el poble resta eximit de tota obediència quan els legisladors actuen així.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l3',
    prompt:
      'Locke diu que la rebel·lió és una oposició a les persones que ocupen càrrec, no a l’autoritat.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l4',
    prompt:
      'Locke afirma que l’autoritat es basa en les constitucions i les lleis del govern.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l5',
    prompt:
      'Locke escriu que qui usa la força contra les lleis ha de ser considerat com a rebel.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l6',
    prompt:
      'Segons Locke, els qui tenen poder són menys propensos a la rebel·lió per la temptació de la força.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l7',
    prompt:
      'Locke diu que els homes, en formar el govern civil, han exclòs la força i han introduït lleis per a la defensa de la propietat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l8',
    prompt:
      'Locke afirma que la doctrina del poder del poble per nomenar un nou legislatiu és la millor defensa contra la rebel·lió.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d8',
    prompt:
      'Descartes diu que allò que coneixia distintament de la cera no era la dolçor de mel ni la blancor ni la figura, sinó un cos que es manifestava sota formes canviants.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d9',
    prompt:
      'Descartes afirma que les qualitats percebudes pel gust, l’olfacte, la vista, el tacte o l’oïda han canviat però continua havent-hi la mateixa cera.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l9',
    prompt:
      'Locke diu que qui per la força infringeix les lleis i la justifica amb la força ha de ser considerat veritablement rebel.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l10',
    prompt:
      'Locke indica que usar de nou la força contra les lleis fa tornar l’estat de guerra.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d10',
    prompt:
      'Descartes diu que el que imagina quan concep la cera és només extensió, flexibilitat i mutabilitat quan aparta el que no pertany a la cera.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l11',
    prompt:
      'Locke esmenta el refugi comú que Déu ha ofert contra la força i la violència.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l12',
    prompt:
      'Segons Locke, la manera més adient de prevenir el mal és mostrar els perills als qui estan temptats a usar la força contra les lleis.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-d11',
    prompt:
      'Descartes nega que la percepció de la cera hagi estat mai una inspecció de l’esperit.',
    correct: false,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1A', 'Ex.1A'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l13',
    prompt:
      'Locke diu que la rebel·lió és oposició a l’autoritat, no a les persones.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
  {
    kind: 'true_false',
    id: 'fil24-l14',
    prompt:
      'Locke afirma que els legisladors que envaeixen les propietats dels súbdits actuen contràriament a la missió encomanada.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2024 · Història de la filosofia · Ex.1B', 'Ex.1B'),
  },
]
