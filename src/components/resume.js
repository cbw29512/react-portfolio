import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

const PROFILE_SUMMARY = [
  'Mainframe storage analyst and software builder focused on IBM z/OS, technical analysis, Python automation, practical web apps, and reliable support workflows.',
  'I connect enterprise platform work with modern development: clear documentation, working tools, GitHub-based delivery, and systems that are easy to support.'
];

const CREDENTIALS = [
  { schoolDescription: 'Credly credential portfolio with CompTIA A+ and IBM digital badges', schoolName: 'Credly' },
  { schoolDescription: 'CompTIA A+ Hardware/Software', schoolName: 'CompTIA' },
  { schoolDescription: 'IBM mainframe learning credentials and digital badges', schoolName: 'IBM SkillsBuild / Interskill / Franklin Skills' },
  { schoolDescription: 'CS50 Web Programming with Python/JavaScript', schoolName: 'Harvard University / edX' },
  { schoolDescription: 'Responsive Web Design', schoolName: 'freeCodeCamp' }
];

const TRAINING = [
  { schoolDescription: 'IBM z/OS Mainframe Apprenticeship Program completed during first Black Knight year', schoolName: 'Franklin Apprenticeship Program / IBM' },
  { schoolDescription: 'Full-Stack Web Development Bootcamp', schoolName: 'Kenzie Academy' },
  { schoolDescription: 'Associate Degree, Machine Tool Technology', schoolName: 'Northeastern Technical College' }
];

const EXPERIENCE = [
  { jobName: 'Analyst, Mainframe Storage | ICE Mortgage Technology', jobDescription: 'Administer IBM z/OS enterprise storage systems and supporting infrastructure while analyzing platform and workflow issues.' },
  { jobName: 'Systems Software Programmer | ICE Mortgage Technology', jobDescription: 'Developed and maintained systems software within the IBM z/OS environment.' },
  { jobName: 'Systems Software Programmer | Black Knight', jobDescription: 'Built and supported systems software for enterprise mainframe platforms.' },
  { jobName: 'Python Automation & Web Projects | Independent Developer', jobDescription: 'Build GitHub-hosted tools, prototype web apps, automation scripts, and lightweight dashboards using Python, JavaScript, React, HTML/CSS, Git, and Linux-based workflows.' }
];

const SKILL_GROUPS = [
  {
    title: 'Mainframe & Enterprise',
    items: ['IBM z/OS', 'JCL', 'Mainframe storage administration', 'RACF', 'GDPS', 'z/OS system services', 'z/OS Connect EE', 'Batch operations', 'SDSF', 'DFSMS concepts']
  },
  {
    title: 'Software & AI',
    items: ['Python automation', 'Full-stack web development', 'React', 'JavaScript', 'Front-end engineering', 'Back-end services', 'Object-oriented programming', 'AI project development', 'Automation workflows']
  },
  {
    title: 'Web & Delivery',
    items: ['HTML', 'CSS', 'Responsive design', 'Git', 'GitHub', 'GitHub Pages', 'SQL fundamentals', 'Django fundamentals', 'Linux', 'Docker basics']
  },
  {
    title: 'Practice',
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
    return (
      <div className="resume-bg">
        <Grid>
          <Cell col={4} className="resume-left-col">
            <h2>Chris Wilson</h2>
            <h4>Mainframe Storage Analyst | Software & AI Developer</h4>
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
            <p className="section-intro">Grouped by current enterprise, software, delivery, and support strengths.</p>
            {this.renderSkillGroups(SKILL_GROUPS)}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
