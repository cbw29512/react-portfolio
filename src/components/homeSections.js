import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../data/projectData';
import { PROOF_POINTS, VALUE_PILLARS } from '../data/profileData';

class HomeSections extends Component {
  renderProofPoints() {
    try {
      return PROOF_POINTS.map((point) => (
        <article key={point.label} className="proof-card">
          <p className="proof-label">{point.label}</p>
          <h3>{point.title}</h3>
          <p>{point.description}</p>
        </article>
      ));
    } catch (error) {
      console.error('Proof points failed to render:', error);
      return <p className="content-error">Professional proof is temporarily unavailable.</p>;
    }
  }

  renderPillars() {
    try {
      return VALUE_PILLARS.map((pillar) => (
        <article key={pillar.number} className="pillar-card">
          <span>{pillar.number}</span>
          <h3>{pillar.title}</h3>
          <p>{pillar.description}</p>
        </article>
      ));
    } catch (error) {
      console.error('Value pillars failed to render:', error);
      return <p className="content-error">Solution approach is temporarily unavailable.</p>;
    }
  }

  renderProjects() {
    try {
      return FEATURED_PROJECTS.map((project) => (
        <article key={project.title} className="featured-project">
          <div className="project-heading">
            <span className="project-number">{project.number}</span>
            <p>{project.category}</p>
          </div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-value"><strong>Why it matters:</strong> {project.value}</p>
          <div className="chip-list">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                View repository <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                View live project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      ));
    } catch (error) {
      console.error('Featured projects failed to render:', error);
      return <p className="content-error">Featured work is temporarily unavailable.</p>;
    }
  }

  render() {
    try {
      return (
        <div className="home-sections">
          <section className="section section-tight" aria-labelledby="proof-title">
            <div className="section-heading">
              <p className="eyebrow">What I bring</p>
              <h2 id="proof-title">A rare combination of enterprise experience, builder instincts, and clear communication.</h2>
            </div>
            <div className="proof-grid">{this.renderProofPoints()}</div>
          </section>

          <section className="section approach-section" aria-labelledby="approach-title">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">How I work</p>
                <h2 id="approach-title">From technical complexity to a usable answer.</h2>
              </div>
              <p>Strong solutions start with understanding. They succeed when the people using them understand the value, tradeoffs, and next step.</p>
            </div>
            <div className="pillar-grid">{this.renderPillars()}</div>
          </section>

          <section className="section" aria-labelledby="featured-title">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="featured-title">Projects that show how I think.</h2>
              </div>
              <Link className="text-link" to="/projects">See all projects <span aria-hidden="true">→</span></Link>
            </div>
            <div className="featured-grid">{this.renderProjects()}</div>
          </section>

          <section className="section callout-section" aria-labelledby="callout-title">
            <div>
              <p className="eyebrow">The next chapter</p>
              <h2 id="callout-title">Ready to bring technical depth into a customer-facing solutions role.</h2>
              <p>I am targeting opportunities where discovery, demos, troubleshooting, relationship-building, and technical credibility work together.</p>
            </div>
            <Link className="button button-primary" to="/contact">Start a conversation</Link>
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
