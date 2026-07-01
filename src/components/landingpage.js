import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

const HERO_SKILLS = [
  'Python Automation',
  'Technical Analysis',
  'IBM Z / z/OS',
  'React',
  'GitHub Pages',
  'Credly Badges'
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

  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <section className="hero-card">
              <p className="eyebrow">Portfolio / Resume</p>
              <h1>Chris Wilson</h1>
              <h2>Technical Analyst | IBM Mainframe | Python Automation</h2>
              <p className="hero-copy">
                I build practical tools, troubleshoot complex systems, and turn messy workflows into clear, useful software.
              </p>

              <div className="hero-skills">{this.renderSkillList()}</div>

              <div className="hero-actions">
                <Link className="hero-button primary" to="/projects">View Projects</Link>
                <Link className="hero-button" to="/resume">View Resume</Link>
                <a className="hero-button" href="https://github.com/cbw29512" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="hero-button" href="https://www.linkedin.com/in/divclass01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="hero-button" href="https://www.credly.com/users/christopherwilson/badges" target="_blank" rel="noopener noreferrer">Credly Badges</a>
                <a className="hero-button" href="https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url" target="_blank" rel="noopener noreferrer">Verify A+</a>
              </div>
            </section>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
