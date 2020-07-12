import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        
            <h1 classname='contactmeh2'>Contact Me</h1>
            
            <hr/>

            <div className="contact-icon-container">

            <div className="contact-icon">
                
                  <a href ="https://calendly.com/divclass01/60min" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    </a>
                    <h4>Appointment</h4>
              </div>

            <div className="contact-icon">
             
                  <a href ="mailto:divclass01@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  </a>
                  <h4>E-mail</h4>
                    
              </div>  
              
              <div className="contact-icon">
               
                  <a href ="https://us02web.zoom.us/j/4217775819" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa fa-search" aria-hidden="true"/>
                    </a>
                    <h4>Zoom</h4>
              </div>
            </div>
      </div>
    )
  }
}

export default Contact;
