import React, { Component } from 'react';
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
// import aplus from './images/AplusLogoCertified.png'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        {/* <Grid className="contact-grid"> */}
          {/* <Cell col={2}>
            <h2>Chris Wilson</h2>
            <img
              alt="avatar"
              src="https://clipartart.com/images/professional-icon-clipart-1.jpg" 
              style={{height: '100px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

          </Cell> */}
          {/* <Cell col={8}> */}
            <h1 classname='contactmeh2'>Contact Me</h1>
            
            <hr/>

            <div className="contact-icon-container">
            <div className="contact-icon">
              {/* <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> */}

                  <a href ="mailto:divclass01@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  </a>
                  <h4>E-mail</h4>
                    {/* </ListItemContent>
                </ListItem> */}
              
              </div>  
              
              <div className="contact-icon">
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> */}
                  <a href ="https://us02web.zoom.us/j/4217775819" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa fa-search" aria-hidden="true"/>
                    </a>
                    <h4>Zoom</h4>
              </div>
                  
              <div className="contact-icon">
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> */}
                  <a href ="https://calendly.com/divclass01/60min" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    </a>
                    <h4>Appointment</h4>
              </div>
                
                  {/* </ListItemContent>
                </ListItem>
              </List> */}
              {/* <p>https://us02web.zoom.us/j/4217775819</p> */}
            </div>
          {/* </Cell>
        </Grid> */}
      </div>
    )
  }
}

export default Contact;
