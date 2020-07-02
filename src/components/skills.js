import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <div className='resumebars'>
        <Cell col={12} >
          <div className="skills">{this.props.skill}</div> 
          <ProgressBar style={{margin: 'left', width: '100px'}} progress={this.props.progress} />
          <div className="barnumber">{this.props.barnumber}</div>
        </Cell>
        </div>
      </Grid>
    )
  }
}

export default Skills;
