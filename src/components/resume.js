import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { CAPABILITY_GROUPS, CREDENTIALS, EXPERIENCE } from '../data/profileData';

class Resume extends Component {
  renderExperience() {
    try {
      return EXPERIENCE.map((item) => (
        <article key={`${item.company}-${item.role}`} className="timeline-item">
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-meta">
            <span>{item.status}</span>
            <p>{item.company}</p>
          </div>
          <div>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ));
    } catch (error) {
      console.error('Experience timeline failed to render:', error);
      return <p className="content-error">Experience is temporarily unavailable.</p>;
    }
  }

  renderCapabilities() {
    try {
      return CAPABILITY_GROUPS.map((group) => (
        <article key={group.title} className="capability-card">
          <h3>{group.title}</h3>
          <div className="chip-list compact">
            {group.items.map((item) => <span key={item}>{item}</span>)}
          </div>
        </article>
      ));
    } catch (error) {
      console.error('Capabilities failed to render:', error);
      return <p className="content-error">Capabilities are temporarily unavailable.</p>;
    }
  }

  renderCredentials() {
    try {
      return CREDENTIALS.map((credential) => (
        <li key={credential}>
          <span aria-hidden="true">✓</span>
          {credential}
        </li>
      ));
    } catch (error) {
      console.error('Credentials failed to render:', error);
      return <li>Verified technical training</li>;
    }
  }

  render() {
    try {
      return (
        <div className="page page-resume">
          <Helmet>
            <title>Experience & Capabilities | Chris Wilson</title>
            <meta name="description" content="Chris Wilson's enterprise systems experience, technical capabilities, credentials, and transition toward sales engineering and solutions consulting." />
          </Helmet>

          <section className="page-hero resume-hero">
            <p className="eyebrow">Experience and capabilities</p>
            <h1>Enterprise reliability, modern software skills, and a customer-focused next step.</h1>
            <p>My background connects production support, systems programming, practical development, and clear technical communication. I am now applying that foundation to solutions-oriented roles.</p>
            <div className="target-role-row" aria-label="Target roles">
              <span>Sales Engineer</span>
              <span>Solutions Consultant</span>
              <span>Technical Account Manager</span>
              <span>Customer-facing technical roles</span>
            </div>
          </section>

          <section className="section section-no-top resume-layout" aria-labelledby="experience-title">
            <div>
              <div className="section-heading">
                <p className="eyebrow">Career history</p>
                <h2 id="experience-title">Experience built in high-reliability environments.</h2>
              </div>
              <div className="timeline">{this.renderExperience()}</div>
            </div>

            <aside className="credential-panel">
              <p className="eyebrow">Credentials</p>
              <h2>Continuous learning with verified foundations.</h2>
              <ul>{this.renderCredentials()}</ul>
              <a className="text-link" href="https://www.credly.com/users/christopherwilson/badges" target="_blank" rel="noopener noreferrer">
                View verified badges <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </section>

          <section className="section muted-section" aria-labelledby="capabilities-title">
            <div className="section-heading">
              <p className="eyebrow">Capabilities</p>
              <h2 id="capabilities-title">The tools matter. How they support the solution matters more.</h2>
            </div>
            <div className="capability-grid">{this.renderCapabilities()}</div>
          </section>
        </div>
      );
    } catch (error) {
      console.error('Experience page failed to render:', error);
      return <p className="content-error">Experience details are temporarily unavailable.</p>;
    }
  }
}

export default Resume;
