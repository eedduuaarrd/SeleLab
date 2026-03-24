export type QuestionKind = 'mcq' | 'true_false' | 'order' | 'match' | 'bucket_sort' | 'click_word'

/** Origen oficial: cada pregunta ha de correspondre a un examen publicat (enunciat en PDF). */
export type ExamSource = {
  /** Identificació de l’examen (convocatòria, assignatura, sèrie, apartat). */
  label: string
  /** PDF de l’enunciat (prova) al Canal Universitats. */
  pdfUrl: string
  /** Referència a l’apartat (ex.: «4.1»). */
  reference?: string
}

export type McqQuestion = {
  kind: 'mcq'
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation?: string
  examSource: ExamSource
}

export type TrueFalseQuestion = {
  kind: 'true_false'
  id: string
  prompt: string
  correct: boolean
  explanation?: string
  examSource: ExamSource
}

export type OrderQuestion = {
  kind: 'order'
  id: string
  prompt: string
  /** Ordre correcte de dalt a baix */
  items: string[]
  explanation?: string
  examSource: ExamSource
}

export type MatchQuestion = {
  kind: 'match'
  id: string
  prompt: string
  left: string[]
  right: string[]
  /** Para cada índex de `left`, l’índex de `right` correcte */
  pairs: number[]
  explanation?: string
  examSource: ExamSource
}

/** Classifica cada element en un dels dos grups (ex.: conceptes de llengua vs literatura). */
export type BucketSortQuestion = {
  kind: 'bucket_sort'
  id: string
  prompt: string
  bucketA: string
  bucketB: string
  items: string[]
  /** Per a cada índex d’`items`: 0 = bucket A, 1 = bucket B */
  correctBucket: (0 | 1)[]
  explanation?: string
  examSource: ExamSource
}

/** Pica la paraula o fragment correcte dins la seqüència (tokens separats). */
export type ClickWordQuestion = {
  kind: 'click_word'
  id: string
  prompt: string
  /** Cada token es mostra com a element clicable (inclou espais com a '' si cal) */
  tokens: string[]
  correctIndex: number
  explanation?: string
  examSource: ExamSource
}

export type Question =
  | McqQuestion
  | TrueFalseQuestion
  | OrderQuestion
  | MatchQuestion
  | BucketSortQuestion
  | ClickWordQuestion

export type ActivityKind = 'official' | 'interactive'

export type Activity = {
  id: string
  title: string
  blurb: string
  /** Inspirat en exàmens reals (any o convocatòria) */
  inspiredBy: string
  estimatedMinutes: number
  questions: Question[]
  /** `official` = ítems dels PDF PAU; `interactive` = pràctica SeleLab per assignatura */
  activityKind?: ActivityKind
}

export type SubjectArea = 'general' | 'ciencies' | 'humanitats' | 'artistica'

export type Subject = {
  id: string
  name: string
  short: string
  area: SubjectArea
  /** Classe Tailwind per accents de targeta */
  accent: string
  description: string
  activities: Activity[]
}
