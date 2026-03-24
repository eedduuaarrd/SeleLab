import type { ExamSource } from '../../types/content'

/** PAU 2025 — Llengua catalana i literatura — sèrie 0 (enunciat). Generalitat de Catalunya. */
export const PAU25_CATALA_SERIE0_PDF =
  'https://universitats.gencat.cat/web/.content/01_acces_i_admissio/proves-acces-PAU-PAP/ambits/llengua-catalana-i-literatura/01_pau25_catala_0.pdf'

/** Mateix model, ruta actual del Canal Universitats (2025). */
export const PAU25_LLCA_JUNY_PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/llengua-catalana/ord/pau_llca25jl.pdf'

export const MODELS_PAU_INDEX = 'https://universitats.gencat.cat/ca/pau/models-examen-anys-anteriors/'

/** PAU 2024 — Llengua catalana i literatura — convocatòria ordinària (enunciat sèrie 1). */
export const PAU24_CATALA_ORD_JL_PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/llengua-catalana/ord/pau_llca24jl.pdf'

/** PAU 2024 — Anglès — convocatòria ordinària (enunciat sèrie 1-A). */
export const PAU24_ANGLES_ORD_JL_PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024/angles/ord/pau_angl24jl.pdf'

/** PAU 2023 — Anglès — convocatòria ordinària (enunciat sèrie 1-A). */
export const PAU23_ANGLES_ORD_JL_PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2023/angles/ord/pau_angl23jl.pdf'

export function examSrc(pdfUrl: string, label: string, reference?: string): ExamSource {
  return { label, pdfUrl, reference }
}
