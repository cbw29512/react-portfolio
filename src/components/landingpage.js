import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// Data schema: the hero profile is separated from the rendering logic so the
// headline can be adjusted later for analyst, support, automation, or developer roles.
const HERO_PROFILE = {
  eyebrow: 'Portfolio / Resume',
  name: 'Chris Wilson',
  headline: 'Enterprise Systems Analyst | IBM z/OS | Python Automation | React Developer',
  summary: 'I support enterprise technology environments, troubleshoot complex systems, and build practical software tools that improve documentation, automation, and technical workflows.'
};

const HERO_SKILLS = [
  'Enterprise Systems',
  'Python Automation',
  'Technical Analysis',
  'IBM z/OS',
  'React',
  'GitHub Pages'
];

class Landing extends Component {
  renderSkillList() {
    try {
      return HERO_SKILLS.map((skill) => <span key={skill} className="hero-skill">{skill}</span>);
    } catch (error) {
      console.error('Landing skill list failed to render:', error);
      return <span className="hero-skill">Technical Problem Solving</span>;
    }
  }

  renderActions() {
    // State logic: this component does not need React state because these are
    // stable navigation links. We still build the JSX through a local variable
    // so old eslint rules do not mistake the JSX after return as unreachable.
    let actionLinks = null;

    try {
      actionLinks = (
        <div className="hero-actions">
          <Link className="hero-button primary" to="/projects">View Projects</Link>
          <Link className="hero-button" to="/resume">View Resume</Link>
          <a className="hero-button" href="https://github.com/cbw29512" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hero-button" href="https://www.linkedin.com/in/divclass01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hero-button" href="https://www.credly.com/users/christopherwilson/badges" target="_blank" rel="noopener noreferrer">Credly Badges</a>
          <a className="hero-button" href="https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url" target="_blank" rel="noopener noreferrer">Verify A+</a>
        </div>
      );
    } catch (error) {
      console.error('Landing actions failed to render:', error);
      actionLinks = <p className="content-error">Resume links are temporarily unavailable.</p>;
    }

    return actionLinks;
  }

  render() {
    try {
      return (
        <div className="landing-page">
          <Grid className="landing-grid">
            <Cell col={12}>
              <section className="hero-card">
                <p className="eyebrow">{HERO_PROFILE.eyebrow}</p>
                <h1>{HERO_PROFILE.name}</h1>
                <h2>{HERO_PROFILE.headline}</h2>
                <p className="hero-copy">{HERO_PROFILE.summary}</p>

                <div className="hero-skills">{this.renderSkillList()}</div>
                {this.renderActions()}
              </section>
            </Cell>
          </Grid>
        </div>
      );
    } catch (error) {
      console.error('Landing page failed to render:', error);
      return <p className="content-error">Portfolio details are temporarily unavailable.</p>;
    }
  }
}

export default Landing;
