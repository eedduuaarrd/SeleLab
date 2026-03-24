import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/matematiques/ord/pau_mate23jl.pdf'

/** Enunciats literals (sèrie 1) — contrastables amb el PDF. */
export const VERBATIM_PAU23_MATEMATIQUES: Question[] = [
  {
    kind: 'true_false',
    id: 'ma23-n1',
    prompt:
      'La nota de l’enunciat diu que una matriu quadrada s’anomena idempotent si coincideix amb el seu quadrat.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q2 nota', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n2',
    prompt:
      'La qüestió 2 demana comprovar que dues matrius C i D són idempotents si C·D = C i D·C = D.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n3',
    prompt:
      'La qüestió 1 demana calcular a, b, c i d de f(x) = ax³ + bx² + cx + d sabent que la recta tangent en el punt d’inflexió (1, 0) és y = –3x + 3.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n4',
    prompt:
      'La qüestió 1 estableix que la funció té un extrem relatiu en el punt de la gràfica d’abscissa x = 0.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n5',
    prompt:
      'La qüestió 5 descriu un jardí rectangular amb un tancat de 8 m² per al gos, adossat al mur.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n6',
    prompt:
      'La qüestió 5 indica que el preu de la tanca és de 2,5 €/m.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n7',
    prompt:
      'La qüestió 6 defineix dos plans π1: x + y = 3 i π2: x – z = –2.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q6', 'Q6'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n8',
    prompt:
      'La qüestió 6 demana trobar el pla π3 perpendicular a π1 i π2 que passa pel punt P = (4, 1, 2).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q6', 'Q6'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n9',
    prompt:
      'La qüestió 4 planteja un sistema lineal que depèn del paràmetre λ.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n10',
    prompt:
      'La qüestió 3 indica que la derivada d’una funció f passa pel punt A = (0, 3).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n11',
    prompt:
      'L’enunciat general diu que cal respondre a quatre de les sis qüestions.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n12',
    prompt:
      'L’enunciat permet l’ús de calculadora però no de dispositius que emmagatzemin dades o transmetin informació.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n13',
    prompt:
      'La qüestió 6 demana calcular el punt Q de la recta intersecció de π1 i π2 més proper a P.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q6', 'Q6'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n14',
    prompt:
      'La qüestió 5 pregunta per les dimensions del tancat que minimitzen el cost amb el costat tocant al mur.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n15',
    prompt:
      'La qüestió 2 demana calcular les matrius A·B i B·A a partir de dues matrius donades A i B.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q2', 'Q2'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n16',
    prompt:
      'La qüestió 4 demana, per al cas λ = –1, resoldre el sistema i interpretar-lo geomètricament.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n17',
    prompt:
      'La qüestió 3 demana calcular l’equació de la recta tangent a f′(x) en x = 3.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n18',
    prompt:
      'La qüestió 1 utilitza la condició que (1, 0) és punt d’inflexió de f.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q1', 'Q1'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n19',
    prompt:
      'La qüestió 5 planteja un tancat rectangular o quadrat de 8 m² d’àrea.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n20',
    prompt:
      'La qüestió 6 defineix r com la recta intersecció de π1 i π2.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q6', 'Q6'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n21',
    prompt:
      'L’enunciat diu que cada qüestió val 2,5 punts.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · instruccions', '—'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n22',
    prompt:
      'La qüestió 3 diu que f′ és la derivada d’una funció f derivable que passa per A = (0, 3).',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q3', 'Q3'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n23',
    prompt:
      'La qüestió 4 demana discutir el sistema per als diferents valors de λ.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q4', 'Q4'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n24',
    prompt:
      'La qüestió 5 b) pregunta quant es pot estalviar si un vèrtex del tancat coincideix amb un vèrtex del jardí.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q5', 'Q5'),
  },
  {
    kind: 'true_false',
    id: 'ma23-n25',
    prompt:
      'La qüestió 6 b) demana l’equació vectorial de la recta r.',
    correct: true,
    examSource: examSrc(PDF, 'PAU 2023 · Matemàtiques · Q6', 'Q6'),
  },
]
