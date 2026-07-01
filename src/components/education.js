import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid className="resume-item">
        <Cell col={12}>
          <h4>{this.props.schoolDescription}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.schoolName}</h6>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
