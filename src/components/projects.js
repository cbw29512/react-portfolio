import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const PROJECT_GROUPS = [
  { label: '2026 Builds', projects: [
    { title: 'Wilson Lab', summary: 'Interview-ready cyber lab orchestrator with a React dashboard, backend control plane, RBAC, audit logs, safety rails, and demo documentation.', stack: 'React, API design, Docker, RBAC, GitHub Pages', github: 'https://github.com/cbw29512/wilson-lab', demo: null, background: 'linear-gradient(135deg, #0f172a, #2563eb)' },
    { title: 'DungeonMaps', summary: 'Local LAN battle-map and token-tool foundation with a Node HTTP server, SQLite state, WebSocket sync seam, API endpoints, and smoke tests.', stack: 'Node.js, SQLite, WebSockets, API smoke tests', github: 'https://github.com/cbw29512/DungeonMaps', demo: null, background: 'linear-gradient(135deg, #422006, #ca8a04)' },
    { title: 'Local AI Workstation Gear', summary: 'Structured workflow for local AI workstation gear research with product candidate queues, human review gates, and safety locks before publishing.', stack: 'Research workflow, data organization, approval gates', github: 'https://github.com/cbw29512/local-ai-workstation-gear', demo: null, background: 'linear-gradient(135deg, #111827, #047857)' }
  ] },
  { label: 'AI & Automation', projects: [
    { title: 'OpenClawOps', summary: 'Local operating workspace for tracking tasks, approvals, logs, research notes, next actions, and safe handoffs before external or risky actions.', stack: 'Ops workflow, local-first automation, approval tracking', github: 'https://github.com/cbw29512/openclawops', demo: null, background: 'linear-gradient(135deg, #020617, #4f46e5)' },
    { title: 'HeavyClaw Avatar', summary: 'Static website for an AI automation agent offering SEO audits, content writing, lead generation, competitor analysis, landing pages, and data scraping.', stack: 'Static HTML, AI service design, marketing automation', github: 'https://github.com/cbw29512/heavyclaw-avatar', demo: null, background: 'linear-gradient(135deg, #312e81, #db2777)' },
    { title: 'Revenue Recovery Workflow Prototype', summary: 'Private Python workflow prototype with test-mode webhooks, approval packets, recovery drafts, smoke tests, and markdown reporting.', stack: 'Python, CLI, test harnesses, state machines', github: null, demo: null, background: 'linear-gradient(135deg, #164e63, #0f766e)' }
  ] },
  { label: 'Web & Systems', projects: [
    { title: 'Resume Portfolio Refresh', summary: 'Employer-facing React portfolio with sharper positioning, cleaner resume content, updated links, and GitHub Pages deployment.', stack: 'React, GitHub Pages, CSS', github: 'https://github.com/cbw29512/react-portfolio', demo: 'https://cbw29512.github.io/react-portfolio', background: 'linear-gradient(135deg, #7f1d1d, #ea580c)' },
    { title: 'WatchPi Network Appliance', summary: 'Raspberry Pi network appliance plan focused on Pi-hole, honeypot services, monitoring, SSH access, and reliable 24/7 operation.', stack: 'Ubuntu Server, Raspberry Pi, SSH, network monitoring', github: null, demo: null, background: 'linear-gradient(135deg, #1f2937, #7c3aed)' },
    { title: 'Magic & Mystery Mercantile Prototypes', summary: 'Static storefront prototypes built around editable product data so a future admin/backend can manage products without redesigning the site.', stack: 'HTML, CSS, JavaScript, ecommerce-ready structure', github: null, demo: null, background: 'linear-gradient(135deg, #064e3b, #0891b2)' }
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
          <CardText>
            <p>{project.summary}</p>
            <p className="project-stack">{project.stack}</p>
          </CardText>
          <CardActions border>
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
        <div className="projects-grid">
          {activeGroup.projects.map((project) => this.renderProjectCard(project))}
        </div>
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
