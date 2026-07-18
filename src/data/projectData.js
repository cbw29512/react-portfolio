// Data schema: each project states the problem, approach, value, and evidence.
// This mirrors the case-study structure used by strong technical portfolios.
export const FEATURED_PROJECTS = [
  {
    number: '01',
    category: 'Secure infrastructure control plane',
    title: 'Wilson Lab',
    summary: 'A security-conscious control plane with a live React dashboard, FastAPI backend, Viewer/Admin access, safe Docker operations, durable audit history, hardened cloud packaging, and Oracle infrastructure as code.',
    value: 'Shows how I translate privileged infrastructure access into an understandable customer experience: clear demo-versus-live state, server-enforced roles, explicit confirmation, narrow operations, outage-safe behavior, repeatable deployment, and proof that technical and nontechnical stakeholders can review.',
    evidence: [
      '3 verification levels: health, read-only, and full operation',
      '3 allowlisted actions: start, stop, and restart',
      '34 backend dependencies audited with 0 known vulnerabilities',
      'Validated OCI Terraform, Caddy configuration, and non-root API image'
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Terraform', 'Oracle Cloud', 'Caddy'],
    caseStudy: 'https://github.com/cbw29512/wilson-lab/blob/main/docs/CASE_STUDY.md',
    github: 'https://github.com/cbw29512/wilson-lab',
    demo: 'https://cbw29512.github.io/wilson-lab/'
  },
  {
    number: '02',
    category: 'Local-first real-time application',
    title: 'DungeonMaps',
    summary: 'A responsive tabletop control room that creates real SQLite-backed campaign rooms, monitors the local API and WebSocket seam, and establishes the product foundation for shared maps, tokens, and fog of war.',
    value: 'Shows how I turn a broad user vision into staged delivery: authoritative state first, a stable API and synchronization contract, then a polished usable dashboard with automated proof across the browser, server, database, and WebSocket layers.',
    evidence: [
      '3 integrated smoke suites: dashboard/HTTP, WebSocket, and API/SQLite',
      'Invalid game-system input rejected before database writes',
      'CI boots the product against an isolated temporary SQLite database',
      'Trusted-local-network security boundary documented before remote deployment'
    ],
    stack: ['Node.js', 'Express', 'SQLite', 'WebSockets', 'JavaScript', 'GitHub Actions'],
    caseStudy: 'https://github.com/cbw29512/DungeonMaps/blob/main/docs/CASE_STUDY.md',
    github: 'https://github.com/cbw29512/DungeonMaps',
    demo: null
  },
  {
    number: '03',
    category: 'Automation operations',
    title: 'OpenClawOps',
    summary: 'A local-first operating workspace for approvals, tasks, logs, research notes, and safe handoffs around automated work.',
    value: 'Focuses on responsible automation: human review, traceable notes, clear next actions, and approval before external or risky steps occur.',
    stack: ['Workflow design', 'Local-first', 'Approval gates', 'Operational logging'],
    github: 'https://github.com/cbw29512/openclawops',
    demo: null
  }
];

export const ADDITIONAL_PROJECTS = [
  {
    title: 'WatchPi Network Appliance',
    category: 'Infrastructure',
    summary: 'A Raspberry Pi appliance plan for network-wide DNS filtering, lightweight monitoring, honeypot services, SSH administration, and reliable 24/7 operation.',
    stack: ['Ubuntu Server', 'Raspberry Pi', 'Networking', 'Security']
  },
  {
    title: 'Network Command Center',
    category: 'Local AI / networking',
    summary: 'A passive network-observability concept that combines mirrored traffic, device inventory, DNS context, and AI-generated summaries without sitting inline or automatically blocking traffic.',
    stack: ['Docker', 'Packet analysis', 'Local AI', 'Observability']
  },
  {
    title: 'Local AI Workstation Gear',
    category: 'Research workflow',
    summary: 'A structured research and review workflow for local-AI workstation equipment with candidate queues, human approval gates, and safer publishing controls.',
    stack: ['Research systems', 'Data organization', 'Review workflows'],
    github: 'https://github.com/cbw29512/local-ai-workstation-gear'
  },
  {
    title: 'HeavyClaw Avatar',
    category: 'Marketing technology',
    summary: 'A static service website exploring how an AI automation agent could package SEO, content, lead-generation, landing-page, and data services.',
    stack: ['HTML', 'CSS', 'Service design', 'Marketing automation'],
    github: 'https://github.com/cbw29512/heavyclaw-avatar'
  }
];
