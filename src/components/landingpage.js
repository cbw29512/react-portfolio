import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { Icon } from '@iconify/react';
// import codewarsIcon from '@iconify/icons-cib/codewars';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid"style={{overflowY: 'scroll'}}>
          <Cell col={12}>
            
          <div><h1 className="landingpage-title">Hello! My name is Chris Wilson.</h1></div> 
          <img
              src="https://image.shutterstock.com/image-vector/headshot-icon-vector-male-default-260nw-535853218.jpg"
              alt="avatar"
              className="avatar-img"
            />
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
