// Data schema: each project states the problem, approach, value, and evidence.
// Keeping project content separate from rendering makes future updates safer.
export const FEATURED_PROJECTS = [
  {
    number: '01',
    category: 'Rules-driven simulation engine',
    title: 'D20 Iron Pit',
    summary: 'A browser-based D&D combat simulator built around a universal rules engine, immutable source cards, fresh per-fight state, deterministic replay, and auditable combat evidence.',
    value: 'Shows how I design a complex rules system without relying on one-off fixes: mechanics are implemented once, certified against source data, verified in both Python and the browser, and exposed through repeatable Step, Watch, Replay, and Turbo workflows.',
    evidence: [
      'Source-driven monster and hero data is promoted through explicit certification manifests',
      'Universal mechanics are implemented once instead of adding monster-specific resolver branches',
      'Python remains the reference and certification oracle while production fights run in-browser',
      'Exact-head CI, browser parity, generated artifacts, and rules audits gate supported combat behavior'
    ],
    stack: ['Python', 'JavaScript', 'HTML/CSS', 'GitHub Actions', 'Rules engine design', 'Automated testing'],
    github: 'https://github.com/cbw29512/D20-ironpit',
    demo: 'https://cbw29512.github.io/D20-ironpit/'
  },
  {
    number: '02',
    category: 'Offline-first product design',
    title: 'TomeForge',
    summary: 'An installable local-first digital tabletop journal with class-specific player tomes, a DM campaign chronicle, immutable page layouts, IndexedDB persistence, explicit backup/restore, and offline application caching.',
    value: 'Shows product architecture built around user ownership and resilience: the journal works without an account or cloud database, preserves created page structures over time, and keeps backup and restore under explicit user control.',
    evidence: [
      'Canonical local model separates journal pages, fields, and user values',
      'IndexedDB stores journal content on the user device only',
      'Service worker caches the static application shell for offline use',
      'Regression checks cover model behavior, static smoke tests, tome flows, and crest assets'
    ],
    stack: ['JavaScript', 'IndexedDB', 'PWA', 'Service Workers', 'Local-first architecture', 'Regression testing'],
    github: null,
    demo: null
  },
  {
    number: '03',
    category: 'Tabletop product platform',
    title: 'Dungeon Cards',
    summary: 'A standalone card-based tabletop adventure platform with a reusable card library, digital DM/player table, combat and initiative helpers, printable cards, and level-ready hero packs.',
    value: 'Shows how I turn a broad product idea into a testable, deployable system with a defined production boundary, reusable content, browser-based play, print support, and one canonical quality gate for regression and build verification.',
    evidence: [
      'One canonical npm test command runs every regression and library validator',
      'Production builds generate a clean deployable _site artifact',
      'GitHub Pages deploys the same artifact that passes the repository checks',
      'The production baseline is kept separate from experimental expansion work'
    ],
    stack: ['JavaScript', 'Static web apps', 'Print workflows', 'Automated regression tests', 'GitHub Pages'],
    github: 'https://github.com/cbw29512/DNDCards',
    demo: 'https://cbw29512.github.io/DNDCards/'
  }
];

export const ADDITIONAL_PROJECTS = [
  {
    title: 'Wilson Lab',
    category: 'Secure infrastructure control plane',
    summary: 'A React and FastAPI control plane for safe Docker operations with server-enforced roles, audit history, hardened packaging, and infrastructure-as-code deployment work.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Terraform'],
    github: 'https://github.com/cbw29512/wilson-lab'
  },
  {
    title: 'NetGuard SOC',
    category: 'Security engineering lab',
    summary: 'A reproducible Ubuntu security-operations lab for telemetry collection, sensors, dashboards, SOC workflows, AI-assisted experiments, and enterprise-style Docker services.',
    stack: ['Python', 'Docker', 'Linux', 'Security monitoring', 'Grafana', 'InfluxDB'],
    github: 'https://github.com/cbw29512/netguard-soc'
  },
  {
    title: 'CharacterForge',
    category: 'Full-stack application modernization',
    summary: 'A tabletop character-management application being migrated from a hardened Flask reference implementation to a Netlify, Functions, and Postgres architecture with secure sessions, authorization, migrations, accessibility checks, and print support.',
    stack: ['Python', 'Flask', 'Node.js', 'Postgres', 'Netlify Functions', 'WCAG testing'],
    github: 'https://github.com/cbw29512/CharacterForge'
  },
  {
    title: 'Web Stream Optimizer',
    category: 'Browser extension engineering',
    summary: 'A Manifest V3 browser extension that combines local DOM heuristics, declarative network rules, a maintained blocklist, privacy-conscious local state, and deterministic Chrome Web Store packaging.',
    stack: ['JavaScript', 'Chrome MV3', 'declarativeNetRequest', 'Chromium testing', 'GitHub Actions'],
    github: 'https://github.com/cbw29512/optimizer-dist'
  },
  {
    title: 'StudyHub',
    category: 'Local-first learning tool',
    summary: 'A browser-based study workspace with certification-oriented decks, a fast card builder, local browser persistence, JSON export, learning-project tracking, and static GitHub Pages delivery.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'GitHub Pages'],
    github: 'https://github.com/cbw29512/StudyHub'
  }
];
