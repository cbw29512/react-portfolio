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
- Automated dependency audit, production build, and GitHub Pages deployment

## Architecture

The portfolio uses React 18 with Vite, React Router hash-based routing, Vitest regressions, and static GitHub Pages delivery. Hash routing keeps all application routes compatible with project-site hosting without server rewrites.

Content is separated from rendering in:

- `src/data/profileData.js`
- `src/data/projectData.js`

Styles are split into focused modules under `src/styles/`, with each source file kept below 150 lines where practical.

## Local development

Requires Node.js 20.19+.

```bash
npm install
npm start
```

## Verification

```bash
npm test
npm audit --audit-level=high
npm run build
```

The production artifact is generated in `build/`.

## Deployment

- Pull requests run `.github/workflows/portfolio-ci.yml`.
- CI must pass route/data regressions, the dependency audit, and the production build before merge.
- Merges to `master` run `.github/workflows/deploy-portfolio.yml`.
- Deployment reruns the same verification gates before publishing the `build/` artifact to the `gh-pages` branch.

## Repository hygiene

Generated dependencies and build artifacts are not committed. `node_modules/`, `build/`, caches, local environment files, editor folders, and logs are excluded through `.gitignore`.
