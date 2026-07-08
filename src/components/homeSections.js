import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Data schema: these sections make the homepage feel more intentional by showing
// target roles, proof points, and a recruiter-friendly career story.
const ROLE_TARGETS = [
  {
    title: 'Technical / Systems Analyst',
    description: 'Analyze issues, document repeatable fixes, support production workflows, and communicate clearly across technical teams.'
  },
  {
    title: 'Python Automation Developer',
    description: 'Build practical scripts, workflow tools, dashboards, and repeatable checks that reduce manual effort and improve reliability.'
  },
  {
    title: 'Support Engineer / App Support',
    description: 'Troubleshoot complex systems, connect users with answers, and turn messy technical behavior into clear resolution paths.'
  },
  {
    title: 'React / Full-Stack Developer',
    description: 'Create user-focused web apps with React, JavaScript, HTML, CSS, GitHub delivery, API thinking, and database fundamentals.'
  }
];

const PROOF_POINTS = [
  {
    metric: 'Enterprise',
    label: 'IBM z/OS support experience'
  },
  {
    metric: 'Builder',
    label: 'Python, React, JavaScript, GitHub projects'
  },
  {
    metric: 'Operator',
    label: 'Troubleshooting, documentation, and production workflows'
  }
];

const FEATURED_STORY = {
  eyebrow: 'What makes this different',
  title: 'I bridge enterprise support and practical software development.',
  description: 'My background is not just classroom coding and not just systems support. I understand production reliability, documentation, troubleshooting, and the need for tools that make technical work easier to repeat, explain, and maintain.'
};

class HomeSections extends Component {
  renderRoleTargets() {
    let roleCards = null;

    try {
      roleCards = ROLE_TARGETS.map((role) => (
        <article key={role.title} className="value-card">
          <h3>{role.title}</h3>
          <p>{role.description}</p>
        </article>
      ));
    } catch (error) {
      console.error('Homepage role targets failed to render:', error);
      roleCards = <p className="content-error">Target role details are temporarily unavailable.</p>;
    }

    return roleCards;
  }

  renderProofPoints() {
    let proofCards = null;

    try {
      proofCards = PROOF_POINTS.map((point) => (
        <article key={point.metric} className="proof-card">
          <strong>{point.metric}</strong>
          <span>{point.label}</span>
        </article>
      ));
    } catch (error) {
      console.error('Homepage proof points failed to render:', error);
      proofCards = <p className="content-error">Proof points are temporarily unavailable.</p>;
    }

    return proofCards;
  }

  renderFeaturedStory() {
    let story = null;

    try {
      story = (
        <section className="feature-band" aria-labelledby="feature-band-title">
          <div>
            <p className="eyebrow">{FEATURED_STORY.eyebrow}</p>
            <h2 id="feature-band-title">{FEATURED_STORY.title}</h2>
            <p>{FEATURED_STORY.description}</p>
          </div>
          <div className="feature-actions">
            <Link className="hero-button primary" to="/resume">Read Resume</Link>
            <Link className="hero-button" to="/projects">See Project Proof</Link>
          </div>
        </section>
      );
    } catch (error) {
      console.error('Homepage featured story failed to render:', error);
      story = <p className="content-error">Featured story is temporarily unavailable.</p>;
    }

    return story;
  }

  render() {
    try {
      return (
        <div className="home-more" aria-label="Career focus and proof">
          <section className="proof-grid" aria-label="Professional proof points">
            {this.renderProofPoints()}
          </section>

          {this.renderFeaturedStory()}

          <section className="target-section" aria-labelledby="target-section-title">
            <div className="project-section-header">
              <p className="eyebrow">Career Targets</p>
              <h1 id="target-section-title">Roles this portfolio is built for.</h1>
              <p>Broad enough to open doors, focused enough to make the value clear.</p>
            </div>
            <div className="value-grid">{this.renderRoleTargets()}</div>
          </section>
        </div>
      );
    } catch (error) {
      console.error('Homepage sections failed to render:', error);
      return <p className="content-error">Homepage details are temporarily unavailable.</p>;
    }
  }
}

export default HomeSections;
