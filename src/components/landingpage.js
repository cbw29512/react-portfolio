import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icon, InlineIcon } from '@iconify/react';
import codewarsIcon from '@iconify/icons-simple-icons/codewars';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://thumbs.dreamstime.com/z/developer-icon-element-profession-avatar-mobile-concept-web-apps-detailed-can-be-used-white-background-132593755.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML | CSS | JavaScript | Python | React | Redux | Django | PostgreSQL | </p>

        <div className="social-links">
        
          {/* Linkiden */}
          <a href="https://www.linkedin.com/in/cbwdivclass01" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>

          {/* GitLab */}
          <a href="http://gitlab.com/cbw29512" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-gitlab" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/cbw29512" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Codewars */}
          <a href="https://www.codewars.com/dashboard" rel="noopener noreferrer" target="_blank">
          <Icon icon={codewarsIcon} width="66" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
