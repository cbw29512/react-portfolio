import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Helmet} from "react-helmet";

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid"style={{overflowY: 'scroll'}}>
          <Cell col={12}>
            
          <div><h1 className="landingpage-title">Hello!</h1></div> 
          
          <div className="application">
            <Helmet>
            <script type="text/javascript" 
            src="https://platform.linkedin.com/badges/js/profile.js" 
            async defer></script>
            </Helmet>
          </div>
          
          <div 
          class="LI-profile-badge"  
          data-version="v1" 
          data-size="large" 
          data-locale="en_US" 
          data-type="horizontal" 
          data-theme="dark" 
          data-vanity="cbwdivclass01">
          <a class="LI-simple-link" href='https://www.linkedin.com/in/cbwdivclass01?trk=profile-badge'>Chris Wilson</a></div>

          {/* <img
              src="https://i.imgur.com/2yrb3Gq.gif"
              alt="avatar"
              className="avatar-img"
            /> */}
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p> HTML | CSS | JavaScript | Python | React | Redux | Django | PostgreSQL </p>

        <div className="social-links">
        
          
            <div>
            {/* Linkiden */}  
            <a href="https://www.linkedin.com/in/cbwdivclass01" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/cbwdivclass01" rel="noopener noreferrer" target="_blank">
            <p className="landingpage-links">Linkedin</p>
            </a>
            </div>
          
            <div>
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
            <a href="http://github.com/cbw29512" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a href="http://github.com/cbw29512" rel="noopener noreferrer" target="_blank">
            <p className="landingpage-links">GitHub</p>
            </a>
            </div>

            <div>  
            {/* Codewars */}
            <a href="https://www.codewars.com/users/cbw29512" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-code" aria-hidden="true" />
            </a>
            <a href="" rel="noopener noreferrer" target="_blank">
            <p className="landingpage-links">CodeWars</p>
            </a>
            <div>
            
            
              </div>
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
