import React, { Component } from 'react';

// Data schema: contact methods are declarative so links can be changed without
// touching the rendering logic.
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
    label: 'Credly Badges',
    href: 'https://www.credly.com/users/christopherwilson/badges',
    icon: 'fa fa-certificate',
    detail: 'Full badge portfolio'
  },
  {
    label: 'Verify A+',
    href: 'https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url',
    icon: 'fa fa-check-circle',
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
    try {
      return (
        <div className="contact-body">
          <h1 className="contact-title">Contact Chris</h1>
          <p className="contact-intro">Open to technical analyst, systems support, Python automation, web development, support engineering, and mainframe development conversations.</p>
          <div className="contact-icon-container">{this.renderContactMethods()}</div>
        </div>
      );
    } catch (error) {
      console.error('Contact page failed to render:', error);
      return <p className="content-error">Contact details are temporarily unavailable.</p>;
    }
  }
}

export default Contact;
