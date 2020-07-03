import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import aplus from './images/AplusLogoCertified.png'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={2}>
            {/* <h2>Chris Wilson</h2>
            <img
              alt="avatar"
              src="https://clipartart.com/images/professional-icon-clipart-1.jpg" 
              style={{height: '100px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p> */}

          </Cell>
          <Cell col={8}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
              
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    Per Request
                  </ListItemContent>
                </ListItem> */}

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    Per Request
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    divclass01@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa fa-search" aria-hidden="true"/>
                    https://us02web.zoom.us/j/4217775819
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
