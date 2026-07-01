import React, { Component } from 'react';

class Skills extends Component {
  renderSkillItems() {
    try {
      return this.props.items.map((item) => <span key={item} className="skill-chip">{item}</span>);
    } catch (error) {
      console.error('Skill items failed to render:', error);
      return <span className="skill-chip">Technical problem solving</span>;
    }
  }

  render() {
    return(
      <section className="skill-group" aria-labelledby={`skill-group-${this.props.title}`}>
        <h4 id={`skill-group-${this.props.title}`}>{this.props.title}</h4>
        <div className="skill-chip-list">{this.renderSkillItems()}</div>
      </section>
    )
  }
}

export default Skills;
