import React from 'react';
import css from './AnimationExample.css'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

// const CSSTransitionGroup = React.addons.CSSTransitionGroup;
// const TransitionGroup = React.addons.TransitionGroup;

import Waypoint from 'react-waypoint'

class AnimationExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = { animateLeft: "", animateRight: "" };
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
  }


  handleWaypointEnter(){
    if(this.props.left){
      this.setState({ animationState: " left-in"})
    } else if(this.props.right){
      this.setState({ animationState: " right-in"})
    }
  }

  handleWaypointLeave(){
    if(this.props.left){
      this.setState({ animationState: " left-out"})
    } else if(this.props.right){
      this.setState({ animationState: " right-out"})
    }
  }




  render() {

    let classSlideNames = ""
    let text = this.props.text;

    if(this.props.left){
      classSlideNames = " left-box"
    } else if(this.props.right){
      classSlideNames = " right-box"
    }





    return(
    <div class="flex flex-column stretch-width">
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      />
      <div class={"left-box flex" + this.state.animateState}>
        I'm a fourth year student at Bristol University studying computer science.
        I have experience developing and designing software for the web and mobile, from simple landing pages to progressive web applications.
      </div>
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      />

    </div>
    )
  }
}

export default AnimationExample;


{/*<CSSTransitionGroup*/}
  {/*transitionName="example"*/}
  {/*transitionEnterTimeout={1000}*/}
  {/*transitionLeaveTimeout={1000}*/}
{/*>*/}
  {/*{ this.state.visible ? <div className='panel' /> : null }*/}
{/*</CSSTransitionGroup>*/}