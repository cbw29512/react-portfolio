// Data schema: each project states the problem, approach, value, and evidence.
// This mirrors the case-study structure used by strong technical portfolios.
export const FEATURED_PROJECTS = [
  {
    number: '01',
    category: 'Cybersecurity platform',
    title: 'Wilson Lab',
    summary: 'An interview-ready cyber lab orchestrator that turns complex lab controls into a safer, operator-friendly experience.',
    value: 'Demonstrates product thinking through role-based access, audit visibility, safety rails, backend orchestration, and clear demo documentation.',
    stack: ['React', 'API design', 'Docker', 'RBAC', 'Audit logging'],
    github: 'https://github.com/cbw29512/wilson-lab',
    demo: null
  },
  {
    number: '02',
    category: 'Real-time application',
    title: 'DungeonMaps',
    summary: 'A local-network battle-map foundation with shared state, API endpoints, token tooling, and a path toward real-time synchronization.',
    value: 'Shows how I break a broad user need into a maintainable architecture using a lightweight server, SQLite state, WebSocket planning, and smoke tests.',
    stack: ['Node.js', 'SQLite', 'WebSockets', 'REST APIs', 'Testing'],
    github: 'https://github.com/cbw29512/DungeonMaps',
    demo: null
  },
  {
    number: '03',
    category: 'Automation operations',
    title: 'OpenClawOps',
    summary: 'A local-first operating workspace for approvals, tasks, logs, research notes, and safe handoffs around automated work.',
    value: 'Focuses on responsible automation: human review, traceable decisions, clear next actions, and controlled execution before risky steps occur.',
    stack: ['Workflow design', 'Local-first', 'Approval gates', 'Auditability'],
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
