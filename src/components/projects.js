import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const PROJECT_GROUPS = [
  { label: 'Featured', intro: 'Best examples of current technical direction: mainframe-adjacent systems thinking, automation, web delivery, and practical tooling.', projects: [
    { title: 'Wilson Lab', summary: 'Interview-ready cyber lab orchestrator with a React dashboard, backend control plane, RBAC, audit logs, safety rails, and demo documentation.', stack: 'React, API design, Docker, RBAC, GitHub Pages', github: 'https://github.com/cbw29512/wilson-lab', demo: null, background: 'linear-gradient(135deg, #0f172a, #2563eb)' },
    { title: 'DungeonMaps', summary: 'Local LAN battle-map and token-tool foundation with a Node HTTP server, SQLite state, WebSocket sync seam, API endpoints, and smoke tests.', stack: 'Node.js, SQLite, WebSockets, API smoke tests', github: 'https://github.com/cbw29512/DungeonMaps', demo: null, background: 'linear-gradient(135deg, #422006, #ca8a04)' },
    { title: 'OpenClawOps', summary: 'Local operating workspace for tracking tasks, approvals, logs, research notes, next actions, and safe handoffs before external or risky actions.', stack: 'Ops workflow, local-first automation, approval tracking', github: 'https://github.com/cbw29512/openclawops', demo: null, background: 'linear-gradient(135deg, #020617, #4f46e5)' },
    { title: 'Resume Portfolio Refresh', summary: 'Employer-facing React portfolio with stronger mainframe/software positioning, cleaner resume content, updated links, and GitHub Pages deployment.', stack: 'React, GitHub Pages, responsive CSS, SEO metadata', github: 'https://github.com/cbw29512/react-portfolio', demo: 'https://cbw29512.github.io/react-portfolio', background: 'linear-gradient(135deg, #7f1d1d, #ea580c)' }
  ] },
  { label: 'Case Studies', intro: 'Professional work framed safely as capabilities and workflows without exposing employer-owned code or sensitive systems.', projects: [
    { title: 'IBM z/OS Storage Administration', summary: 'Enterprise storage administration focus across z/OS platform support, infrastructure analysis, documentation, and reliable operational workflows.', stack: 'IBM z/OS, storage administration, technical analysis, documentation', github: null, demo: null, background: 'linear-gradient(135deg, #0f172a, #0369a1)' },
    { title: 'Mainframe Production Support', summary: 'Production-support style troubleshooting across batch operations, system behavior, platform workflows, and cross-team issue resolution.', stack: 'JCL, SDSF concepts, batch operations, troubleshooting, support workflows', github: null, demo: null, background: 'linear-gradient(135deg, #172554, #4338ca)' },
    { title: 'Technical Analyst Workflow Documentation', summary: 'Translate messy platform behavior into clear issue notes, repeatable checks, user-facing explanations, and practical resolution paths.', stack: 'Technical analysis, documentation, defect notes, user support', github: null, demo: null, background: 'linear-gradient(135deg, #14532d, #0f766e)' },
    { title: 'Python Automation for Operations', summary: 'Use Python and lightweight scripts to organize repeatable work, inspect data, reduce manual steps, and support clearer technical workflows.', stack: 'Python, CLI thinking, automation, data organization', github: null, demo: null, background: 'linear-gradient(135deg, #1e1b4b, #7c3aed)' }
  ] },
  { label: 'Labs', intro: 'Hands-on experiments and prototypes that show range across local AI, network appliances, ecommerce-ready web work, and automation ideas.', projects: [
    { title: 'WatchPi Network Appliance', summary: 'Raspberry Pi network appliance plan focused on Pi-hole, honeypot services, monitoring, SSH access, and reliable 24/7 operation.', stack: 'Ubuntu Server, Raspberry Pi, SSH, network monitoring', github: null, demo: null, background: 'linear-gradient(135deg, #1f2937, #7c3aed)' },
    { title: 'Local AI Workstation Gear', summary: 'Structured workflow for local AI workstation gear research with product candidate queues, human review gates, and safety locks before publishing.', stack: 'Research workflow, data organization, approval gates', github: 'https://github.com/cbw29512/local-ai-workstation-gear', demo: null, background: 'linear-gradient(135deg, #111827, #047857)' },
    { title: 'HeavyClaw Avatar', summary: 'Static website for an AI automation agent offering SEO audits, content writing, lead generation, competitor analysis, landing pages, and data scraping.', stack: 'Static HTML, AI service design, marketing automation', github: 'https://github.com/cbw29512/heavyclaw-avatar', demo: null, background: 'linear-gradient(135deg, #312e81, #db2777)' },
    { title: 'Magic & Mystery Mercantile Prototypes', summary: 'Static storefront prototypes built around editable product data so a future admin/backend can manage products without redesigning the site.', stack: 'HTML, CSS, JavaScript, ecommerce-ready structure', github: null, demo: null, background: 'linear-gradient(135deg, #064e3b, #0891b2)' },
    { title: 'Revenue Recovery Workflow Prototype', summary: 'Private Python workflow prototype with test-mode webhooks, approval packets, recovery drafts, smoke tests, and markdown reporting.', stack: 'Python, CLI, test harnesses, state machines', github: null, demo: null, background: 'linear-gradient(135deg, #164e63, #0f766e)' }
  ] }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  renderProjectCard(project) {
    try {
      return (
        <Card key={project.title} shadow={5} className="project-card">
          <CardTitle className="project-card-title" style={{ background: project.background }}>
            {project.title}
          </CardTitle>
          <CardText className="project-card-body">
            <p>{project.summary}</p>
            <p className="project-stack">{project.stack}</p>
          </CardText>
          <CardActions border className="project-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button colored>GitHub</Button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button colored>Live Site</Button>
              </a>
            )}
            {!project.github && !project.demo && <span className="private-note">Professional / private work</span>}
          </CardActions>
        </Card>
      );
    } catch (error) {
      console.error('Project card failed to render:', error);
      return <p key={project.title}>Project details are temporarily unavailable.</p>;
    }
  }

  renderActiveCategory() {
    try {
      const activeGroup = PROJECT_GROUPS[this.state.activeTab] || PROJECT_GROUPS[0];
      return (
        <section className="project-section" aria-labelledby="project-section-title">
          <div className="project-section-header">
            <h1 id="project-section-title">{activeGroup.label} Projects</h1>
            <p>{activeGroup.intro}</p>
          </div>
          <div className="projects-grid">
            {activeGroup.projects.map((project) => this.renderProjectCard(project))}
          </div>
        </section>
      );
    } catch (error) {
      console.error('Project category failed to render:', error);
      return <p className="content-error">Projects are temporarily unavailable.</p>;
    }
  }

  render() {
    return (
      <div className="projects-page">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          {PROJECT_GROUPS.map((group) => <Tab key={group.label}>{group.label}</Tab>)}
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.renderActiveCategory()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
