import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

// Data schema: this page explains the career bridge between enterprise support
// and software development without locking the brand to one storage-focused lane.
const ABOUT_PROFILE = {
  eyebrow: 'About Chris',
  title: 'Enterprise systems experience with modern software-building skills.',
  summary: [
    'I am an enterprise systems analyst and software developer with hands-on experience supporting IBM z/OS environments while building practical tools with Python, JavaScript, React, HTML, CSS, Git, and Linux-based workflows.',
    'My background combines production support, technical analysis, troubleshooting, documentation, workflow improvement, and modern web development.',
    'I am strongest in environments where reliability, clear communication, and problem-solving matter. I enjoy breaking down complex issues, documenting repeatable solutions, and building tools that make technical work easier to support.'
  ]
};

const VALUE_POINTS = [
  'Enterprise systems analysis and support',
  'IBM z/OS, JCL, RACF concepts, and batch workflows',
  'Python automation and practical scripting',
  'React, JavaScript, HTML, CSS, Git, and GitHub Pages',
  'Documentation, troubleshooting, testing, and user-focused delivery'
];

class About extends Component {
  renderSummary() {
    try {
      return ABOUT_PROFILE.summary.map((paragraph) => <p key={paragraph} className="hero-copy">{paragraph}</p>);
    } catch (error) {
      console.error('About summary failed to render:', error);
      return <p className="hero-copy">Professional summary is temporarily unavailable.</p>;
    }
  }

  renderValuePoints() {
    try {
      return VALUE_POINTS.map((point) => <span key={point} className="hero-skill">{point}</span>);
    } catch (error) {
      console.error('About value points failed to render:', error);
      return <span className="hero-skill">Technical problem solving</span>;
    }
  }

  render() {
    try {
      return (
        <div className="landing-page">
          <Grid className="landing-grid">
            <Cell col={12}>
              <section className="hero-card">
                <p className="eyebrow">{ABOUT_PROFILE.eyebrow}</p>
                <h1>{ABOUT_PROFILE.title}</h1>
                {this.renderSummary()}
                <div className="hero-skills">{this.renderValuePoints()}</div>
              </section>
            </Cell>
          </Grid>
        </div>
      );
    } catch (error) {
      console.error('About page failed to render:', error);
      return <p className="content-error">About details are temporarily unavailable.</p>;
    }
  }
}

export default About;
