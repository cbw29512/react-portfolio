# Chris Wilson Portfolio

Modern, responsive portfolio for Chris Wilson, focused on enterprise systems, software engineering, automation, technical solutions, and practical problem solving.

## Live site

https://cbw29512.github.io/react-portfolio/

## Current experience

- Recruiter-friendly navigation and broad technical positioning
- Featured technical case studies with user, architecture, and business context
- Enterprise experience timeline and verified training
- Responsive layouts for desktop, tablet, and mobile
- Keyboard focus indicators, skip navigation, semantic headings, and reduced-motion support
- Per-route titles and descriptions through React Helmet
- Regression tests for every route, project data, contact data, and public-link structure
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

## Verification

```bash
CI=true NODE_OPTIONS=--openssl-legacy-provider npm test -- --runInBand
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

On Windows PowerShell:

```powershell
$env:CI='true'
$env:NODE_OPTIONS='--openssl-legacy-provider'
npm test -- --runInBand
npm run build
```

## Deployment

- Pull requests run `.github/workflows/portfolio-ci.yml`.
- CI must pass route/data regressions and the production build before merge.
- Merges to `master` run `.github/workflows/deploy-portfolio.yml`.
- Deployment reruns the same regression tests before building and publishing the `gh-pages` branch.

## Known modernization work

The current build remains on an old Create React App and React dependency chain. A future controlled migration should move the site to a supported React release and a modern build or static-site framework while preserving the current design, accessibility behavior, and GitHub Pages deployment.
