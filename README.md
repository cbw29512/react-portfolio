# Chris Wilson Portfolio

Modern, responsive portfolio for Chris Wilson, focused on enterprise technology, technical solutions, sales engineering, solutions consulting, and customer-facing technical work.

## Live site

https://cbw29512.github.io/react-portfolio/

## Current experience

- Focused value proposition and recruiter-friendly navigation
- Featured technical case studies with user and business context
- Enterprise experience timeline and verified training
- Responsive layouts for desktop, tablet, and mobile
- Keyboard focus indicators, skip navigation, semantic headings, and reduced-motion support
- Per-route titles and descriptions through React Helmet
- Automated production build and GitHub Pages deployment

## Architecture

The project currently uses a legacy Create React App foundation with React Router hash-based routing. Content is separated from rendering in:

- `src/data/profileData.js`
- `src/data/projectData.js`

Styles are split into focused modules under `src/styles/`, with each source file kept below 150 lines where practical.

## Local development

```bash
npm ci --legacy-peer-deps
npm start
```

## Production build

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

On Windows PowerShell:

```powershell
$env:NODE_OPTIONS='--openssl-legacy-provider'
npm run build
```

## Deployment

- Pull requests run `.github/workflows/portfolio-ci.yml`.
- Merges to `master` run `.github/workflows/deploy-portfolio.yml`.
- The deployment workflow builds the production bundle and publishes it to the `gh-pages` branch.

## Known modernization work

The current build remains on an old Create React App and React dependency chain. A future controlled migration should move the site to a supported React release and a modern build or static-site framework while preserving the current design, accessibility behavior, and GitHub Pages deployment.
