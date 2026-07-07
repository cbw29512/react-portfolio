import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

// Data schema: keep the resume content in structured arrays so the page can be tuned
// for different target roles without rewriting the component rendering logic.
const PROFILE_SUMMARY = [
  'Enterprise systems analyst and software developer focused on IBM z/OS, technical analysis, Python automation, practical web apps, and reliable support workflows.',
  'I connect production support experience with modern development: clear documentation, repeatable troubleshooting, GitHub-based delivery, and tools that make technical work easier to support.',
  'Open to roles in systems analysis, application support, Python automation, web development, support engineering, and mainframe development.'
];

const CREDENTIALS = [
  { schoolDescription: 'Credly Badge Portfolio', schoolName: 'CompTIA A+ and IBM digital badges' },
  { schoolDescription: 'CompTIA A+ Hardware/Software', schoolName: 'CompTIA' },
  { schoolDescription: 'IBM Mainframe Digital Badges', schoolName: 'IBM SkillsBuild / Interskill / Franklin Skills' },
  { schoolDescription: 'CS50 Web Programming with Python and JavaScript', schoolName: 'Harvard University / edX' },
  { schoolDescription: 'Responsive Web Design', schoolName: 'freeCodeCamp' }
];

const TRAINING = [
  { schoolDescription: 'IBM z/OS Mainframe Apprenticeship Program', schoolName: 'Franklin Apprenticeship Program / IBM' },
  { schoolDescription: 'Full-Stack Web Development Bootcamp', schoolName: 'Kenzie Academy' },
  { schoolDescription: 'Associate Degree, Machine Tool Technology', schoolName: 'Northeastern Technical College' }
];

const EXPERIENCE = [
  {
    jobName: 'Analyst | ICE Mortgage Technology',
    jobDescription: 'Support IBM z/OS enterprise environments through technical analysis, troubleshooting, documentation, workflow support, and operational reliability practices.'
  },
  {
    jobName: 'Systems Software Programmer | ICE Mortgage Technology',
    jobDescription: 'Developed and maintained systems software within IBM z/OS environments while supporting production workflows, updates, issue analysis, and technical documentation.'
  },
  {
    jobName: 'Systems Software Programmer | Black Knight',
    jobDescription: 'Built and supported systems software for enterprise mainframe platforms with a focus on reliability, maintainability, and clear support processes.'
  },
  {
    jobName: 'Python Automation & Web Projects | Independent Developer',
    jobDescription: 'Build GitHub-hosted tools, prototype web apps, automation scripts, and lightweight dashboards using Python, JavaScript, React, HTML/CSS, Git, and Linux-based workflows.'
  }
];

const SKILL_GROUPS = [
  {
    title: 'Enterprise Systems',
    items: ['IBM z/OS', 'JCL', 'RACF concepts', 'GDPS concepts', 'z/OS system services', 'z/OS Connect EE', 'Batch operations', 'SDSF concepts', 'DFSMS concepts', 'Production support']
  },
  {
    title: 'Software Development',
    items: ['Python automation', 'Full-stack web development', 'React', 'JavaScript', 'Front-end engineering', 'Back-end services', 'Object-oriented programming', 'API fundamentals', 'Automation workflows']
  },
  {
    title: 'Web & Delivery',
    items: ['HTML', 'CSS', 'Responsive design', 'Git', 'GitHub', 'GitHub Pages', 'SQL fundamentals', 'Django fundamentals', 'Linux', 'Docker basics']
  },
  {
    title: 'Professional Practice',
    items: ['Technical analysis', 'Documentation', 'Testing', 'Debugging', 'Agile teamwork', 'Security awareness', 'Support workflows', 'Troubleshooting', 'User-focused delivery']
  }
];

class Resume extends Component {
  renderEducation(items) {
    try {
      return items.map((item) => <Education key={`${item.schoolName}-${item.schoolDescription}`} schoolDescription={item.schoolDescription} schoolName={item.schoolName} />);
    } catch (error) {
      console.error('Resume education failed to render:', error);
      return <p>Education details are temporarily unavailable.</p>;
    }
  }

  renderExperience(items) {
    try {
      return items.map((item) => <Experience key={item.jobName} jobName={item.jobName} jobDescription={item.jobDescription} />);
    } catch (error) {
      console.error('Resume experience failed to render:', error);
      return <p>Experience details are temporarily unavailable.</p>;
    }
  }

  renderSkillGroups(items) {
    try {
      return items.map((group) => <Skills key={group.title} title={group.title} items={group.items} />);
    } catch (error) {
      console.error('Resume skills failed to render:', error);
      return <p>Skills are temporarily unavailable.</p>;
    }
  }

  render() {
    try {
      return (
        <div className="resume-bg">
          <Grid>
            <Cell col={4} className="resume-left-col">
              <h2>Chris Wilson</h2>
              <h4>Enterprise Systems Analyst | Python Automation | React Developer</h4>
              <hr />
              {PROFILE_SUMMARY.map((line) => <p key={line}>{line}</p>)}
              <h2>Credentials</h2>
              {this.renderEducation(CREDENTIALS)}
              <h2>Training & Education</h2>
              {this.renderEducation(TRAINING)}
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Experience</h2>
              {this.renderExperience(EXPERIENCE)}
              <hr />
              <h2>Core Skills</h2>
              <p className="section-intro">Grouped by enterprise systems, software development, delivery tools, and professional support strengths.</p>
              {this.renderSkillGroups(SKILL_GROUPS)}
            </Cell>
          </Grid>
        </div>
      );
    } catch (error) {
      console.error('Resume page failed to render:', error);
      return <p className="content-error">Resume details are temporarily unavailable.</p>;
    }
  }
}

export default Resume;
