import type { Question } from '../types/content'

export type SessionCtx = {
  mcq: number | null
  tf: boolean | null
  order: number[] | null
  match: number[] | null
  bucket: (0 | 1 | null)[] | null
  click: number | null
}

export function emptyCtx(): SessionCtx {
  return { mcq: null, tf: null, order: null, match: null, bucket: null, click: null }
}

export function evaluate(q: Question, ctx: SessionCtx): boolean | null {
  switch (q.kind) {
    case 'mcq':
      return ctx.mcq === null ? null : ctx.mcq === q.correctIndex
    case 'true_false':
      return ctx.tf === null ? null : ctx.tf === q.correct
    case 'order':
      return ctx.order === null ? null : ctx.order.every((idx, pos) => idx === pos)
    case 'match': {
      if (ctx.match === null) return null
      if (ctx.match.some((x) => x < 0)) return null
      const uniq = new Set(ctx.match)
      if (uniq.size !== ctx.match.length) return false
      return q.pairs.every((p, i) => ctx.match![i] === p)
    }
    case 'bucket_sort': {
      if (ctx.bucket === null) return null
      if (ctx.bucket.some((v) => v === null)) return null
      return q.correctBucket.every((c, i) => ctx.bucket![i] === c)
    }
    case 'click_word':
      return ctx.click === null ? null : ctx.click === q.correctIndex
  }
}
