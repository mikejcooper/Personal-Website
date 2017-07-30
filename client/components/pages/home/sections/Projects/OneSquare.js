import React from 'react';
import css from './OneSquare.css'
import Lightbox from './Lightbox'
import SkillsContainer from '../Containers/SkillsContainer'
import Waypoint from 'react-waypoint'
import Linkify from 'react-linkify'





class OneSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classState: "" };
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
  }

  handleWaypointEnter(){
    this.setState({ classState: " animate"})

    console.log("here")
  }

  handleWaypointLeave(){

  }


  render() {

    let Skills = (this.props.github) ? <SkillsContainer skills={this.props.skills} spread={false} github={this.props.github}/> : <SkillsContainer skills={this.props.skills} spread={false}/>


    return (

      <div style={this.props.style} class={"OneSquare stretch flex flex-column flex-align-items-start width-80 " + this.state.classState}>

        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        />

        <div class="flex flex-column flex-space-between stretch">

          <div class="square-container flex flex-row flex-space-between stretch">

            <div class="square flex flex-column stretch">

              {this.props.video ?
                <div class="iframe-container stretch">
                  <iframe class="iframe" src={this.props.video} width="640" height="360" allowFullScreen></iframe>
                </div>
              :
                <div class="iframe-container stretch">
                  <div class="iframe">
                  <Lightbox images={this.props.images} imagesCaptions={this.props.imagesCaptions} coverImage={this.props.coverImage}/>
                  </div>
                </div>
              }

              <div class="flex bottom-text">
                <Linkify>
                  {this.props.description}
                </Linkify>
              </div>

              <div class="flex flex-align-items-start flex-align-items-centre bottom-skills">
                {Skills}
                </div>

            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default OneSquare;


/**
 * Created by mikecooper on 21/06/2017.
 */
