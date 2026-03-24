import type { ExamSource } from '../../types/content'
import { MODELS_PAU_INDEX } from '../examArchive/constants'

/** Origen genèric per a preguntes de pràctica (enllaç al portal de models PAU). */
export function practiceExamSource(subjectShort: string, ref: string): ExamSource {
  return {
    label: `Pràctica interactiva · ${subjectShort} · ${ref}`,
    pdfUrl: MODELS_PAU_INDEX,
    reference: ref,
  }
}
