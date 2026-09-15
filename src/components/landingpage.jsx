import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomeSections from './homeSections';
import { HERO_TAGS, SITE_PROFILE } from '../data/profileData';

class Landing extends Component {
  renderTags() {
    try {
      return HERO_TAGS.map((tag) => <span key={tag} className="hero-tag">{tag}</span>);
    } catch (error) {
      console.error('Hero tags failed to render:', error);
      return <span className="hero-tag">Technical problem solving</span>;
    }
  }

  render() {
    try {
      return (
        <div className="page-home">
          <Helmet>
            <title>Chris Wilson | Enterprise Technology & Technical Solutions</title>
            <meta
              name="description"
              content="Chris Wilson combines enterprise systems experience, technical troubleshooting, Python automation, and web development with clear solution communication."
            />
          </Helmet>

          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-glow hero-glow-one" aria-hidden="true" />
            <div className="hero-glow hero-glow-two" aria-hidden="true" />

            <div className="hero-content">
              <p className="availability-pill">
                <span aria-hidden="true" />
                {SITE_PROFILE.availability}
              </p>

              <p className="eyebrow">{SITE_PROFILE.eyebrow}</p>
              <h1 id="hero-title">{SITE_PROFILE.headline}</h1>
              <p className="hero-summary">{SITE_PROFILE.summary}</p>

              <div className="hero-actions">
                <Link className="button button-primary" to="/projects">Explore my work</Link>
                <Link className="button button-secondary" to="/resume">View experience</Link>
              </div>

              <div className="hero-tags" aria-label="Core strengths">
                {this.renderTags()}
              </div>
            </div>

            <aside className="hero-panel" aria-label="Professional focus">
              <div className="hero-monogram" aria-hidden="true">
                <span>CW</span>
              </div>
              <p className="panel-kicker">Professional focus</p>
              <h2>Technical discovery, solution design, and confident communication.</h2>
              <ul className="check-list">
                <li>Enterprise systems perspective</li>
                <li>Hands-on software and automation</li>
                <li>Customer-focused explanations</li>
                <li>Reliable documentation and follow-through</li>
              </ul>
              <p className="panel-location">{SITE_PROFILE.location}</p>
            </aside>
          </section>

          <HomeSections />
        </div>
      );
    } catch (error) {
      console.error('Landing page failed to render:', error);
      return <p className="content-error">Portfolio details are temporarily unavailable.</p>;
    }
  }
}

export default Landing;
