/**
 * Selecat.cat indexa els mateixos PDF de PAU / selectivitat que publica el Canal Universitats
 * (codis `pau_*` = nom del fitxer a `examens-AAAA/<matèria>/ord/`).
 *
 * Aquí resolem l’URL directa al PDF de la Generalitat quan el prefix de matèria és conegut.
 * Per a la resta, useu el visor de Selecat (`selecatViewUrl`).
 */

export const GENCAT_PAU_EXAMENS_BASE =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors'

export const SELECAT_BASE_URL = 'https://selecat.cat'

/** Prefix del codi Selecat (`pau_llca25jl` → `llca`) → carpeta sota `examens-AAAA/`. */
export const SELECAT_PREFIX_TO_GENCAT_FOLDER: Record<string, string> = {
  llca: 'llengua-catalana',
  lles: 'llengua-castellana',
  angl: 'angles',
  hist: 'historia',
  hfil: 'historia-filosofia',
  hart: 'historia-art',
  mate: 'matematiques',
  fisi: 'fisica',
  quim: 'quimica',
  biol: 'biologia',
  cien: 'ciencies-generals',
  diss: 'disseny',
  lica: 'literatura-catalana',
  geog: 'geografia',
  alem: 'alemany',
}

export function parseSelecatCode(
  code: string,
): { prefix: string; yy: string; suffix: string } | null {
  const m = /^pau_([a-z]+)(\d{2})(jl|jp|sl|sp)$/.exec(code.trim())
  if (!m) return null
  return { prefix: m[1], yy: m[2], suffix: m[3] }
}

export function selecatViewUrl(code: string): string {
  return `${SELECAT_BASE_URL}/view.php?p=${encodeURIComponent(code)}`
}

/** URL al PDF oficial al web de la Generalitat, o `null` si el prefix no està mapat. */
export function gencatPdfUrlFromSelecatCode(code: string): string | null {
  const p = parseSelecatCode(code)
  if (!p) return null
  const folder = SELECAT_PREFIX_TO_GENCAT_FOLDER[p.prefix]
  if (!folder) return null
  const year = 2000 + parseInt(p.yy, 10)
  const filename = `${code}.pdf`
  return `${GENCAT_PAU_EXAMENS_BASE}/examens-${year}/${folder}/ord/${filename}`
}
