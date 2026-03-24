import { FAQ_SEO_ITEMS } from '../data/faqSeo'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Secció FAQ visible per a rastrejadors (HTML estàtic al build). */
export function buildStaticFaqSectionHtml(): string {
  const rows = FAQ_SEO_ITEMS.map(
    (item) =>
      `      <div class="seo-faq__item">\n        <dt class="seo-faq__q">${escapeHtml(item.q)}</dt>\n        <dd class="seo-faq__a">${escapeHtml(item.a)}</dd>\n      </div>`,
  ).join('\n')
  return `    <section id="faq-seo" class="seo-faq" aria-label="Preguntes freqüents sobre la selectivitat i SeleLab">\n      <h2 class="seo-faq__title">Preguntes freqüents (FAQ)</h2>\n      <p class="seo-faq__lead">Tests de sele, selectivitat (PAU) i ús de SeleLab.</p>\n      <dl class="seo-faq__list">\n${rows}\n      </dl>\n    </section>`
}
