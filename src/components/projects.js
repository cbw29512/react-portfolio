import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ADDITIONAL_PROJECTS, FEATURED_PROJECTS } from '../data/projectData';

class Projects extends Component {
  renderStack(stack) {
    try {
      return stack.map((item) => <span key={item}>{item}</span>);
    } catch (error) {
      console.error('Project technology list failed to render:', error);
      return <span>Technical project</span>;
    }
  }

  renderFeaturedProjects() {
    try {
      return FEATURED_PROJECTS.map((project) => (
        <article key={project.title} className="case-study-card">
          <div className="case-study-topline">
            <span>{project.number}</span>
            <p>{project.category}</p>
          </div>
          <h2>{project.title}</h2>
          <p className="case-study-summary">{project.summary}</p>
          <div className="case-study-detail">
            <h3>Business and user value</h3>
            <p>{project.value}</p>
          </div>
          <div className="chip-list">{this.renderStack(project.stack)}</div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub repository <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      ));
    } catch (error) {
      console.error('Featured case studies failed to render:', error);
      return <p className="content-error">Case studies are temporarily unavailable.</p>;
    }
  }

  renderAdditionalProjects() {
    try {
      return ADDITIONAL_PROJECTS.map((project) => (
        <article key={project.title} className="lab-card">
          <p className="lab-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="chip-list compact">{this.renderStack(project.stack)}</div>
          {project.github && (
            <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          )}
        </article>
      ));
    } catch (error) {
      console.error('Additional projects failed to render:', error);
      return <p className="content-error">Additional work is temporarily unavailable.</p>;
    }
  }

  render() {
    try {
      return (
        <div className="page page-projects">
          <Helmet>
            <title>Selected Work | Chris Wilson</title>
            <meta name="description" content="Technical case studies and practical projects by Chris Wilson across enterprise systems, automation, cybersecurity, networking, and web applications." />
          </Helmet>

          <section className="page-hero">
            <p className="eyebrow">Selected work</p>
            <h1>Projects built around real users, safer workflows, and maintainable systems.</h1>
            <p>These are not just technology lists. Each project reflects how I clarify a problem, shape an approach, build evidence, and communicate why the solution matters.</p>
          </section>

          <section className="section section-no-top" aria-labelledby="case-studies-title">
            <div className="section-heading">
              <p className="eyebrow">Featured case studies</p>
              <h2 id="case-studies-title">The strongest examples of my current direction.</h2>
            </div>
            <div className="case-study-grid">{this.renderFeaturedProjects()}</div>
          </section>

          <section className="section muted-section" aria-labelledby="labs-title">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Additional labs</p>
                <h2 id="labs-title">Experiments that expand my range.</h2>
              </div>
              <p>Infrastructure, local AI, networking, automation, and service-design work that supports continuous learning.</p>
            </div>
            <div className="lab-grid">{this.renderAdditionalProjects()}</div>
          </section>
        </div>
      );
    } catch (error) {
      console.error('Projects page failed to render:', error);
      return <p className="content-error">Projects are temporarily unavailable.</p>;
    }
  }
}

export default Projects;
