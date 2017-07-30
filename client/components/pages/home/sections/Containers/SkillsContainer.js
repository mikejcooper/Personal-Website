import React from 'react';
import css from './SkillContainer.css'
import GithubIcon from 'svgs/GithubIcon'





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
          <div style={style}  class="skill">
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

    let githubDiv = (this.props.github) ?
      <div class="flex flex-align-self-end flex-justify-end github">

        <a class="" id="github1" href={this.props.github}>
          <div class="icon1 flex"><GithubIcon/></div>
        </a>
      </div>
      :
      <div></div>

      return (

        <div style={this.props.style} class="SkillsContainerWrapper flex stretch-width flex-align-items-centre">
          {this.handleSkillsProps()}
          {githubDiv}
        </div>

      );
  }
}

export default SkillsContainer;

