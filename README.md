# SeleLab

Aplicació web de pràctica per a la selectivitat (PAU) a Catalunya: banc de preguntes amb enllaços als PDF oficials del Canal Universitats.

**Producció:** [https://selelab.xyz](https://selelab.xyz)

## Desenvolupament

```bash
npm install
npm run dev
```

## Producció

```bash
npm run build
```

El desplegament es fa amb Vercel en fer push a la branca principal del repositori.

### Domini i variables d’entorn

- Domini configurat: **selelab.xyz** (DNS apuntant a Vercel).
- A Vercel → Project → Settings → Environment Variables, és recomanable definir `VITE_SITE_URL=https://selelab.xyz` per a *Production* (i *Preview* si cal), perquè el codi usi la mateixa URL en build.
- Copia `.env.example` a `.env` en local si vols la mateixa variable en desenvolupament.
