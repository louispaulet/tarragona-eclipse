# Eclipse Tarragona 2026

A single-purpose website for the total solar eclipse visible from Tarragona on
12 August 2026. It includes a live countdown, the local eclipse timeline,
viewing advice, and essential eye-safety guidance.

Live site: [louispaulet.github.io/tarragona-eclipse](https://louispaulet.github.io/tarragona-eclipse/)

## Local development

Requirements:

- Node.js 22.13 or newer
- npm

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

## GitHub Pages

The site is exported as static files and published to the `gh-pages` branch with
the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

Build the static export without publishing:

```bash
npm run build:pages
```

Build and deploy:

```bash
npm run deploy
```

The deployment configuration accounts for the repository path at
`/tarragona-eclipse/` and adds `.nojekyll` so GitHub Pages serves Next.js assets
from `_next` correctly.

## Eclipse safety

Use certified ISO 12312-2 eclipse glasses whenever any part of the Sun is
visible. Remove them only during complete totality and put them back on as soon
as direct sunlight reappears. Optical equipment requires a purpose-built solar
filter fitted to its front.

For current local guidance, consult the
[Ajuntament de Tarragona](https://www.tarragona.cat/eclipsi/eclipsi) and
[IGN España](https://eclipses.ign.es/).
