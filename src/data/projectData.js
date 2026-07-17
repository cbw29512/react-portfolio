// Data schema: each project states the problem, approach, value, and evidence.
// This mirrors the case-study structure used by strong technical portfolios.
export const FEATURED_PROJECTS = [
  {
    number: '01',
    category: 'Secure infrastructure platform',
    title: 'Wilson Lab',
    summary: 'A security-conscious infrastructure control plane with a live React dashboard, FastAPI backend, Viewer/Admin access, validated inventory, safe container operations, and durable audit history.',
    value: 'Demonstrates end-to-end product judgment: a public demo that survives API outages, server-enforced authorization, explicit confirmations, allowlisted Docker actions, automated frontend/backend/deployment testing, hardened cloud packaging, and validated Oracle infrastructure as code. The dashboard is live in demo mode while final cloud account and DNS activation remain external steps.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Terraform', 'Oracle Cloud', 'Caddy'],
    github: 'https://github.com/cbw29512/wilson-lab',
    demo: 'https://cbw29512.github.io/wilson-lab/'
  },
  {
    number: '02',
    category: 'Real-time application',
    title: 'DungeonMaps',
    summary: 'A local-network battle-map foundation with shared state, API endpoints, token-tool planning, and a path toward real-time synchronization.',
    value: 'Shows how I break a broad user need into a maintainable foundation using a lightweight Node server, SQLite state, a WebSocket seam, API endpoints, and smoke tests.',
    stack: ['Node.js', 'SQLite', 'WebSockets', 'REST APIs', 'Testing'],
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
