import React, { Component } from 'react';

const CONTACT_METHODS = [
  {
    label: 'Email',
    href: 'mailto:divclass01@gmail.com',
    icon: 'fa fa-envelope',
    detail: 'divclass01@gmail.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cbw29512',
    icon: 'fa fa-github-square',
    detail: 'github.com/cbw29512'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/divclass01/',
    icon: 'fa fa-linkedin-square',
    detail: 'linkedin.com/in/divclass01'
  },
  {
    label: 'Verify A+',
    href: 'https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url',
    icon: 'fa fa-certificate',
    detail: 'CompTIA A+ credential'
  },
  {
    label: 'Appointment',
    href: 'https://calendly.com/divclass01/60min',
    icon: 'fa fa-calendar',
    detail: 'Schedule a conversation'
  }
];

class Contact extends Component {
  renderContactMethods() {
    try {
      return CONTACT_METHODS.map((method) => (
        <a key={method.label} className="contact-card" href={method.href} target="_blank" rel="noopener noreferrer">
          <i className={method.icon} aria-hidden="true" />
          <h4>{method.label}</h4>
          <p>{method.detail}</p>
        </a>
      ));
    } catch (error) {
      console.error('Contact methods failed to render:', error);
      return <p>Contact details are temporarily unavailable.</p>;
    }
  }

  render() {
    return (
      <div className="contact-body">
        <h1 className="contact-title">Contact Chris</h1>
        <p className="contact-intro">Open to technical analyst, IBM mainframe, Python automation, web development, and support-engineering conversations.</p>
        <div className="contact-icon-container">{this.renderContactMethods()}</div>
      </div>
    );
  }
}

export default Contact;
