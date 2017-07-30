import React from 'react';
import css from './AboutAnimation.css'
import Waypoint from 'react-waypoint'

class AboutAnimation extends React.Component{
  constructor(props) {
    super(props);
    this.state = { animationState: "", classState: " left-box" };
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
  }

  componentWillMount(){
    if(this.props.left){
      this.setState({ classState: " left-box"})
    } else if(this.props.right){
      this.setState({ classState: " right-box"})
    } else {
      console.log("Specify left or right animation type : Bool")
    }
  }


  handleWaypointEnter(){
    if(this.props.left){
      this.setState({ animationState: " left-in "})
    } else if(this.props.right){
      this.setState({ animationState: " right-in"})
    }
  }

  handleWaypointLeave(){
    // if(this.props.left){
    //   this.setState({ animationState: " left-out"})
    // } else if(this.props.right){
    //   this.setState({ animationState: " right-out"})
    // }
  }

  render() {

    return(
    <div class="flex flex-column flex-align-items-start stretch-width">
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      />
      <div style={{backgroundColor: this.props.backgroundColor, width: this.props.width}} class={"flex flex-justify-centre " + this.state.classState + this.state.animationState}>
        {this.props.children}
      </div>
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      />

    </div>
    )
  }
}

export default AboutAnimation;

