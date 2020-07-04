import React, { Component } from 'react';
import '../App.css'

class About extends Component {
  render() {
    return(
  
      <div className="aboutmebg-container">
        <img
        className="aboutmebg" 
        src={process.env.PUBLIC_URL+"https://i.imgur.com/CJbPo7W.jpg"} 
        alt="aboutmebg"
        />
      </div>  
    
    )
  }
}

export default About;
