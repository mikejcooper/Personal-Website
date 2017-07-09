import React from 'react';
import css from './SkillContainer.css'




class SkillsContainer extends React.Component {

  constructor(){
    super();
    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle(){

  }

  handleSkillsProps(){

    if(this.props.skills == null){
      return [];
    }

    var skills = [];
    var style = {marginRight:'15px'};
    var classString = "SkillsContainer stretch-width flex";

    if(this.props.spread) {
      style = {};
      classString += " flex-space-between";
    }

    this.props.skills.forEach(function(skill){
      skills.push(
        <div key={skills.length}>
          <div style={style} class="skill">
            {skill}
          </div>
        </div>
      )
    });

    return(
        <div class={classString}>
            {skills}
        </div>
    );
  }


  render() {

      return (

        <div style={this.props.style} class="flex stretch-width">
          {this.handleSkillsProps()}
        </div>

      );
  }
}

export default SkillsContainer;

