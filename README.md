# Eclipse Andalucía 2027

A focused guide to the total solar eclipse visible from southern Spain on
2 August 2027. It includes a live countdown, official IGN timings for key
locations, travel and viewing advice, and essential eye-safety guidance.

The guide and About page are available in Spanish, Catalan, French, and
English. Spanish is the fallback language, while supported browser preferences
are selected automatically. The complete Tarragona 2026 edition remains
available as an archive.

Live site: [eclipse-2026.thefrenchartist.dev](https://eclipse-2026.thefrenchartist.dev/)

## Routes

The static site uses `HashRouter` so every client-side route works on GitHub
Pages without server rewrites:

- `/#/` — 2027 countdown, path highlights, viewing guide, and safety information
- `/#/about` — the purpose and evolution of the project
- `/#/archive/2026` — archived Tarragona 2026 guide
- `/#/archive/2026/about` — archived Tarragona 2026 About page

Add `?lang=ca`, `?lang=es`, `?lang=fr`, or `?lang=en` to any hash route to link
directly to a translation, for example `/#/?lang=fr`.

## Content

Current 2027 copy is in `app/locales/eclipse-2027.ts`. The original files in
`app/locales/ca.ts`, `es.ts`, `fr.ts`, and `en.ts` power the 2026 archive.

Timings and totality-path information come from the Instituto Geográfico
Nacional (IGN):

- [Eclipse total de Sol del 2 de agosto de 2027](https://eclipses.ign.es/eclipse-total-sol-de-2-de-agosto-2027.html)
- [IGN eclipse portal](https://eclipses.ign.es/)

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

## Deployment

Build and publish the GitHub Pages edition:

```bash
npm run deploy
```

The project also contains OpenAI Sites hosting metadata and can be built with
`npm run build` for its Cloudflare-compatible deployment artifact.

## Eclipse safety

Use certified ISO 12312-2 eclipse glasses whenever any part of the Sun is
visible. Remove them only during complete totality and put them back on as soon
as direct sunlight reappears. Optical equipment requires a purpose-built solar
filter fitted to its front.
