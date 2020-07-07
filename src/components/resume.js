import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      
      <div>
        <Grid>
          <Cell col={4}>
            
            <h2 style={{paddingTop: '1em'}}>Chris Wilson</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid red', width: '100%'}}/>
            <p>Seeking a position as a Full Stack Web Developer where I can solve
problems, and provide end-to-end solutions from vision to a production
ready experience. I bring a team oriented mindset, and mission ready
drive to any project. My daily goal is to be prepared to develop services
and functionality for use by web applications.</p>
            <hr style={{borderTop: '3px solid red', width: '100%'}}/>
            <h2>Certifications</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Kenzie Academy"
              schoolDescription="Full Stack Web Developer"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Free Code Camp"
                 schoolDescription="Responsive Web Design"
                  />

                <Education
                 startYear={2002}

                 schoolName="CompTIA"
                 schoolDescription="A+ Hardware/Software Certification"
                  /> 

                <div style={{textAlign: 'center', cursor:'pointer'}}>
                  <a href="https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url">
                  <img
                    src='https://i.imgur.com/Z4LrLXQ.jpg'
                    alt="avatar"
                    style={{height: '250px'}}
                  />
                  </a> <p style={{fontSize:'18px'}}>Click to Verify!</p>
                  </div>

            <br />
            <hr style={{borderTop: '3px solid red', width: '100%'}}/>
      
              <h2>Skills</h2>
              <Skills
                skill="Computer Troubleshooting"
                progress={100}
                barnumber="100%"
                />
              <Skills
                skill="HTML/CSS"
                progress={90}
                barnumber="90%"
                />
                <Skills
                  skill="Javascript/Python"
                  progress={70}
                  barnumber="70%"
                  />
                  <Skills
                    skill="React/Redux"
                    progress={50}
                    barnumber="50%"
                    />
                    <Skills
                      skill="Django/PostgreSQL"
                      progress={50}
                      barnumber="50%"
                      />

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{paddingTop: '1em'}}>Education</h2>  
    
                <Education
                 startYear={1995}
                 endYear={2000}
                 schoolName="Department of Labor"
                 schoolDescription="Apprenticeship Program for Machine Setup Operators"
                  />   

                <Education
                 startYear={1995}
                 endYear={1998}
                 schoolName="North Eastern Technical College"
                 schoolDescription="Associate degree Machine Tool Technology"
                  />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              
              jobName="Truck Driver | Koch Bro., ARD, Schneider, Werner"
              jobDescription="Route plan and safely navigate a semi-truck with various
              equipment and freight. Ensured superior customer interaction and on-time delivery.
              Ensured DOT compliance for the load."
              />

              <Experience
                
                jobName="Shop/Support Manager | Walmart, Edwards Wood Products"
                jobDescription="Ensured workers followed company SOP.
                Full time member of the new hire board and safety committee.
                Trained, Counseled and Coached workers as needed."
                />

               <Experience
              
               jobName="Process Technician, QC | Aaroco, Schaeffler Group"
               jobDescription="Operate precision measuring machine and equipment.
               Assisted with updating SOP, paperwork compliance in a lean
               manufacturing environment. Operated several machines in a manufacturing environment within
               SOP and OSHA regulations."
               />

                <Experience
                
                jobName="Anti-Terrorist Adversary Team | Secuitas Security Services"
                jobDescription="Weapons and tactics instructor for the Robinson Nuclear power
                plant security force. Traveled as a team to four sites: SC, NC, GA, FL.
                Member of the new hire board and safety committee.
                Assisted in creating and writing SOP for security drills."
                />
              <Experience
                jobName="Military | 31B / 11B SPC"
                jobDescription="Honorable Discharge"
                />
              <Experience
                jobName="SC State Guard | Drill Instructor SSG"
                jobDescription="Volunteer"
                />    
          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Resume;
