import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const PROJECT_GROUPS = [
  { label: 'Featured', projects: [
    { title: 'Resume Portfolio Refresh', summary: 'Employer-facing React portfolio with sharper positioning, cleaner resume content, and GitHub Pages deployment.', stack: 'React, GitHub Pages, CSS', github: 'https://github.com/cbw29512/react-portfolio', demo: 'https://cbw29512.github.io/react-portfolio', background: 'linear-gradient(135deg, #0f172a, #2563eb)' },
    { title: 'Revenue Recovery Workflow Prototype', summary: 'Local workflow prototype with test-mode webhooks, approval gates, recovery packets, and automated reports.', stack: 'Python, CLI, Markdown reports', github: 'https://github.com/cbw29512/hermes-money-factory', demo: 'https://cbw29512.github.io/hermes-money-factory/', background: 'linear-gradient(135deg, #111827, #047857)' },
    { title: 'WatchPi Network Appliance', summary: 'Raspberry Pi network appliance plan focused on Pi-hole, honeypot services, monitoring, SSH access, and reliable 24/7 operation.', stack: 'Ubuntu Server, Raspberry Pi, SSH, Network Security', github: null, demo: null, background: 'linear-gradient(135deg, #1f2937, #7c3aed)' }
  ] },
  { label: 'Web', projects: [
    { title: 'Magic & Mystery Mercantile Prototypes', summary: 'Static storefront prototypes built around editable product data so a future admin/backend can manage products without redesigning the site.', stack: 'HTML, CSS, JavaScript, ecommerce-ready structure', github: null, demo: null, background: 'linear-gradient(135deg, #312e81, #db2777)' },
    { title: 'StudyHub', summary: 'Certification study dashboard concept with pages for learning tracks, decks, notes, and repeatable study workflows.', stack: 'HTML, CSS, JavaScript, GitHub', github: 'https://github.com/cbw29512/StudyHub', demo: null, background: 'linear-gradient(135deg, #064e3b, #0891b2)' },
    { title: 'Nerd Scroll', summary: 'GitHub Pages site project with static docs output, simple local server workflow, and deployable front-end assets.', stack: 'Static site, GitHub Pages, HTML/CSS', github: 'https://github.com/cbw29512/nerd-scroll', demo: 'https://cbw29512.github.io/nerd-scroll/', background: 'linear-gradient(135deg, #7f1d1d, #ea580c)' }
  ] },
  { label: 'Tools', projects: [
    { title: 'Printable Tabletop Tools', summary: 'Printable monster-card and encounter support concepts focused on readable combat information and practical table use.', stack: 'Print layout, content systems', github: null, demo: null, background: 'linear-gradient(135deg, #422006, #ca8a04)' },
    { title: 'Local AI Workstation Lab', summary: 'Ubuntu/NVIDIA/Ollama workstation experiments for local coding models, long-context testing, and practical developer workflows.', stack: 'Ubuntu, NVIDIA, Ollama, Python environments', github: null, demo: null, background: 'linear-gradient(135deg, #020617, #4f46e5)' },
    { title: 'Workflow Test Harness', summary: 'Validated local workflow pieces including webhook simulation, duplicate guards, state transitions, CLI smoke tests, and summary reporting.', stack: 'Python, tests, state machine design', github: 'https://github.com/cbw29512/hermes-money-factory', demo: null, background: 'linear-gradient(135deg, #164e63, #0f766e)' }
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
