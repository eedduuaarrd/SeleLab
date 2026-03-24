/**
 * Domini públic de producció: https://selelab.xyz
 * (sobreescrivible amb `VITE_SITE_URL` a Vercel o `.env` local.)
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() || 'https://selelab.xyz'

export const SITE_ORIGIN = new URL(SITE_URL).origin

/** Versió de l’app (JSON-LD, manifest); alinear amb `package.json` en releases. */
export const APP_VERSION = '1.0.0'
