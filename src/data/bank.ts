import type { Activity, Subject } from '../types/content'
import { getVerbatimPool } from './examArchive'
import { getInteractiveQuestions } from './workshop/interactiveBySubject'

function bankExamPool(subjectId: string) {
  return getVerbatimPool(subjectId).map((q) => ({
    ...q,
    id: `bank-${q.id}`,
  }))
}

function pauActivity(subjectId: string): Activity[] {
  const questions = bankExamPool(subjectId)
  if (questions.length === 0) return []
  return [
    {
      id: `${subjectId}-pau-enunciat`,
      title: 'Proves d’accés — enunciats oficials',
      blurb:
        'Només preguntes extretes dels PDF d’examen publicats al Canal Universitats. Cada ítem indica la convocatòria i enllaça al full original.',
      inspiredBy: 'Generalitat de Catalunya — models PAU / selectivitat (enunciats)',
      estimatedMinutes: Math.min(90, Math.max(12, Math.ceil(questions.length * 1.1))),
      activityKind: 'official',
      questions,
    },
  ]
}

function practicaActivity(subjectId: string): Activity[] {
  const raw = getInteractiveQuestions(subjectId)
  if (raw.length === 0) return []
  const questions = raw.map((q) => ({
    ...q,
    id: `bank-${q.id}`,
  }))
  return [
    {
      id: `${subjectId}-practica-interactiva`,
      title: 'Pràctica interactiva',
      blurb:
        'Banc SeleLab per a aquesta matèria: opció múltiple, V/F, ordenar, relacionar… Pensat per reforçar abans dels PDF oficials (no en són transcripció).',
      inspiredBy: 'SeleLab · exercicis de reforç',
      estimatedMinutes: Math.min(120, Math.max(20, Math.ceil(questions.length * 0.85))),
      activityKind: 'interactive',
      questions,
    },
  ]
}

function activitiesFor(subjectId: string) {
  return [...pauActivity(subjectId), ...practicaActivity(subjectId)]
}

/**
 * Banc estrictament alineat amb exàmens publicats: cap pregunta sense `examSource` (vegeu `examArchive/`).
 */
const baseSubjects: Subject[] = [
  {
    id: 'catala',
    name: 'Llengua catalana i literatura',
    short: 'Català',
    area: 'general',
    accent: 'border-l-4 border-l-[#b8a060]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('catala'),
  },
  {
    id: 'castella',
    name: 'Llengua castellana i literatura',
    short: 'Castellà',
    area: 'general',
    accent: 'border-l-4 border-l-[#c4706a]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('castella'),
  },
  {
    id: 'angles',
    name: 'Llengua estrangera: anglès',
    short: 'Anglès',
    area: 'general',
    accent: 'border-l-4 border-l-[#6a9ec4]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('angles'),
  },
  {
    id: 'historia',
    name: "Història d'Espanya / Història",
    short: 'Història',
    area: 'humanitats',
    accent: 'border-l-4 border-l-[#d4a03c]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('historia'),
  },
  {
    id: 'filosofia',
    name: 'Filosofia',
    short: 'Filosofia',
    area: 'humanitats',
    accent: 'border-l-4 border-l-[#9a8b9e]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('filosofia'),
  },
  {
    id: 'matematiques',
    name: 'Matemàtiques',
    short: 'Matemàtiques',
    area: 'ciencies',
    accent: 'border-l-4 border-l-[#4db8c4]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('matematiques'),
  },
  {
    id: 'fisica',
    name: 'Física',
    short: 'Física',
    area: 'ciencies',
    accent: 'border-l-4 border-l-[#6b8fc9]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('fisica'),
  },
  {
    id: 'quimica',
    name: 'Química',
    short: 'Química',
    area: 'ciencies',
    accent: 'border-l-4 border-l-[#9bc85c]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('quimica'),
  },
  {
    id: 'biologia',
    name: 'Biologia',
    short: 'Biologia',
    area: 'ciencies',
    accent: 'border-l-4 border-l-[#6fb07a]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('biologia'),
  },
  {
    id: 'cmc',
    name: 'Ciències per al món contemporani',
    short: 'CMC',
    area: 'ciencies',
    accent: 'border-l-4 border-l-[#d97a5c]',
    description:
      'Ítems del model «Ciències generals» PAU (mapat a aquest perfil de ciència integrada).',
    activities: activitiesFor('cmc'),
  },
  {
    id: 'historia-art',
    name: "Història de l'art",
    short: 'H. de l’art',
    area: 'artistica',
    accent: 'border-l-4 border-l-[#c98a9b]',
    description: 'Només materials extrets dels models oficials de prova d’accés.',
    activities: activitiesFor('historia-art'),
  },
]

export const subjects: Subject[] = baseSubjects

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id)
}

export function getActivity(subjectId: string, activityId: string) {
  const s = getSubject(subjectId)
  const a = s?.activities.find((x) => x.id === activityId)
  return s && a ? { subject: s, activity: a } : undefined
}

/** Recompte d’ítems al banc oficial vs pràctica interactiva (per a una assignatura). */
export function getSubjectQuestionCounts(subjectId: string): {
  official: number
  interactive: number
} {
  const s = getSubject(subjectId)
  if (!s) return { official: 0, interactive: 0 }
  let official = 0
  let interactive = 0
  for (const a of s.activities) {
    const n = a.questions.length
    if (a.activityKind === 'interactive') interactive += n
    else official += n
  }
  return { official, interactive }
}
