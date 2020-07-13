import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Helmet} from "react-helmet";

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid"style={{overflowY: 'scroll'}}>
          <Cell col={12}>
            
          <div><h1 className="landingpage-title">
          
          <div className="application">
            <Helmet>
            <script type="text/javascript" 
            src="https://platform.linkedin.com/badges/js/profile.js" 
            async defer></script>
            </Helmet>
          </div>
          </h1></div> 

          <div
          class="LI-profile-badge"  
          data-version="v1" 
          data-size="large" 
          data-locale="en_US" 
          data-type="horizontal" 
          data-theme="light" 
          data-vanity="cbwdivclass01">
          <a class="LI-simple-link" href='https://www.linkedin.com/in/cbwdivclass01?trk=profile-badge'>Chris Wilson</a></div>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p> GIT | HTML | CSS | JavaScript | Python | React | Redux | Django | PostgreSQL </p>

        <div className="social-links">
          
            <div className="icon-gitlab">
            {/* GitLab */}
            <a href="http://gitlab.com/cbw29512" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-gitlab" aria-hidden="true" />
            </a>
            <a href="http://gitlab.com/cbw29512" rel="noopener noreferrer" target="_blank">
            <p className="landingpage-links">GitLab</p>
            </a>
            </div>
          
            <div>
            {/* Github */}
            <a className="icon-github"href="http://github.com/cbw29512" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a href="http://github.com/cbw29512" rel="noopener noreferrer" target="_blank">
            <p className="landingpage-links">GitHub</p>
            </a>
            </div>
            <div> 
            </div>
          </div>
          </div>  
        </Cell>
      </Grid>   
    </div>  
  
    )
  }
}

export default Landing;
