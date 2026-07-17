import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { CONTACT_LINKS } from '../data/profileData';

class Contact extends Component {
  renderContactLinks() {
    try {
      return CONTACT_LINKS.map((method) => (
        <a key={method.label} className="contact-card" href={method.href} target="_blank" rel="noopener noreferrer">
          <i className={method.icon} aria-hidden="true" />
          <div>
            <h2>{method.label}</h2>
            <p>{method.detail}</p>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
      ));
    } catch (error) {
      console.error('Contact methods failed to render:', error);
      return <a className="contact-card" href="mailto:divclass01@gmail.com">Email Chris Wilson</a>;
    }
  }

  render() {
    try {
      return (
        <div className="page page-contact">
          <Helmet>
            <title>Contact Chris Wilson</title>
            <meta name="description" content="Contact Chris Wilson about sales engineering, solutions consulting, technical account management, enterprise systems, automation, or customer-facing technology opportunities." />
          </Helmet>

          <section className="contact-hero">
            <p className="availability-pill">
              <span aria-hidden="true" />
              Open to remote opportunities
            </p>
            <p className="eyebrow">Let&apos;s connect</p>
            <h1>Looking for someone who can understand the technology and explain the value?</h1>
            <p>I am interested in customer-facing technical roles where discovery, troubleshooting, demonstrations, communication, and relationship-building come together.</p>
            <a className="button button-primary" href="mailto:divclass01@gmail.com">Email Chris</a>
          </section>

          <section className="section section-no-top" aria-label="Contact options">
            <div className="contact-grid">{this.renderContactLinks()}</div>
          </section>
        </div>
      );
    } catch (error) {
      console.error('Contact page failed to render:', error);
      return <p className="content-error">Contact details are temporarily unavailable.</p>;
    }
  }
}

export default Contact;
