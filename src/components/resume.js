import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

const PROFILE_SUMMARY = [
  'Technical analyst and builder focused on Python automation, practical web apps, and reliable support workflows.',
  'I connect business problems to working software: clear documentation, clean interfaces, GitHub-based delivery, and systems that are easy to maintain.'
];

const CERTIFICATIONS = [
  { startYear: '2019', endYear: '2020', schoolDescription: 'CS50 Web Programming with Python/JavaScript', schoolName: 'Harvard University / edX' },
  { startYear: '2019', endYear: '2020', schoolDescription: 'Responsive Web Design', schoolName: 'freeCodeCamp' },
  { startYear: '2002', endYear: '', schoolDescription: 'A+ Hardware/Software', schoolName: 'CompTIA' }
];

const EDUCATION = [
  { startYear: '2026', endYear: 'Present', schoolName: 'Franklin Apprenticeship Program / IBM', schoolDescription: 'z/OS Mainframe Apprenticeship Program' },
  { startYear: '2019', endYear: '2020', schoolName: 'Kenzie Academy', schoolDescription: 'Full-Stack Web Development Bootcamp' },
  { startYear: '1995', endYear: '1998', schoolName: 'Northeastern Technical College', schoolDescription: 'Associate Degree, Machine Tool Technology' }
];

const EXPERIENCE = [
  {
    jobName: 'Mortgage / Technical Analyst | ICE Mortgage Technology',
    jobDescription: 'Analyze platform and workflow issues, troubleshoot data behavior, document defects, and coordinate practical resolutions between users and technical teams.'
  },
  {
    jobName: 'Python Automation & Web Projects | Independent Developer',
    jobDescription: 'Build GitHub-hosted tools, prototype web apps, automation scripts, and lightweight dashboards using Python, JavaScript, React, HTML/CSS, Git, and Linux-based workflows.'
  },
  {
    jobName: 'Full-Time Remote Student | Kenzie Academy',
    jobDescription: 'Completed an accelerated software engineering program focused on front-end and back-end development, consumer-ready applications, Git workflows, and remote collaboration.'
  },
  {
    jobName: 'Operations, Logistics & Technical Support Leadership',
    jobDescription: 'Led and supported teams across logistics, manufacturing, security, and quality-control environments with SOP documentation, training, troubleshooting, compliance, and customer-focused delivery.'
  },
  {
    jobName: 'Military & Service Background',
    jobDescription: 'U.S. Army 31B / 11B experience and SC State Guard instructor background; brings discipline, documentation, and mission-focused execution to technical work.'
  }
];

const SKILLS = [
  { skill: 'Python Automation', progress: 90, barnumber: '90%' },
  { skill: 'JavaScript / React', progress: 85, barnumber: '85%' },
  { skill: 'HTML / CSS / Responsive Design', progress: 90, barnumber: '90%' },
  { skill: 'Git / GitHub / GitHub Pages', progress: 90, barnumber: '90%' },
  { skill: 'SQL / Django Fundamentals', progress: 75, barnumber: '75%' },
  { skill: 'Linux / Docker / Deployment Basics', progress: 75, barnumber: '75%' },
  { skill: 'Technical Analysis & Documentation', progress: 95, barnumber: '95%' },
  { skill: 'Mainframe / z/OS Fundamentals', progress: 70, barnumber: '70%' }
];

class Resume extends Component {
  renderEducation(items) {
    try {
      return items.map((item) => (
        <Education
          key={`${item.schoolName}-${item.schoolDescription}`}
          startYear={item.startYear}
          endYear={item.endYear}
          schoolDescription={item.schoolDescription}
          schoolName={item.schoolName}
        />
      ));
    } catch (error) {
      console.error('Resume education failed to render:', error);
      return <p>Education details are temporarily unavailable.</p>;
    }
  }

  renderExperience(items) {
    try {
      return items.map((item) => (
        <Experience
          key={item.jobName}
          jobName={item.jobName}
          jobDescription={item.jobDescription}
        />
      ));
    } catch (error) {
      console.error('Resume experience failed to render:', error);
      return <p>Experience details are temporarily unavailable.</p>;
    }
  }

  renderSkills(items) {
    try {
      return items.map((item) => (
        <Skills
          key={item.skill}
          skill={item.skill}
          progress={item.progress}
          barnumber={item.barnumber}
        />
      ));
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
            <h4>Technical Analyst | Python Automation | Web Developer</h4>
            <hr />
            {PROFILE_SUMMARY.map((line) => <p key={line}>{line}</p>)}

            <h2>Certifications</h2>
            {this.renderEducation(CERTIFICATIONS)}

            <h2>Core Skills</h2>
            {this.renderSkills(SKILLS)}
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            {this.renderEducation(EDUCATION)}

            <hr />

            <h2>Experience</h2>
            {this.renderExperience(EXPERIENCE)}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
