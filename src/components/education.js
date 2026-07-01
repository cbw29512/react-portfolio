import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    const hasDate = this.props.startYear || this.props.endYear;
    const dateText = [this.props.startYear, this.props.endYear].filter(Boolean).join(' - ');

    return(
      <Grid className="resume-item">
        {hasDate && (
          <Cell col={4}>
            <p>{dateText}</p>
          </Cell>
        )}
        <Cell col={hasDate ? 8 : 12}>
          <h4>{this.props.schoolDescription}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.schoolName}</h6>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
