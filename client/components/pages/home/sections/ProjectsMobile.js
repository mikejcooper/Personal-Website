import React from 'react';
import { connect } from 'react-redux';
import OneSquaresProject from './Projects/OneSquare'

import UobAppImg from 'imgs/iPhone_mocks.png'
import HeatingAppImg from 'imgs/androidApp.png'
import EventrPlatoformImg from 'imgs/EventrPlatform.png'
import ContainersLinkImg from 'imgs/ContainersLink.png'
import ContainersDetailImg from 'imgs/ContainersDetail.png'

class ProjectsMobile extends React.Component {

  constructor() {
    super();
  }

  scaleContainerSquares(width) {
    var style = {maxWidth: "650px", height: "500px"}

    if(width > 600){
      style = {maxWidth: "650px", height: "450px"}
    }
    else if(width > 500){
      style = {maxWidth: "650px", height: "400px"}
    }
    else if(width > 400){
      style = {maxWidth: "650px", height: "350px"}
    }
    else if(width > 300){
      style = {maxWidth: "650px", height: "300px"}
    } else {
      style = {maxWidth: "650px", height: width}
    }
    return style
  }

  render() {

    var style = this.scaleContainerSquares(this.props.width)

    return (
      <div class="stretch flex flex-column flex-align-items-centre flex-justify-centre">

          <br/>

        <div class="width-80"><div class="title titles stretch-width" >Project - AR Mobile Game</div></div>

        <OneSquaresProject
            style={style}
            description={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            video={"https://player.vimeo.com/video/222693507"}
            skills={["C#", "C++", "Unity", "Maya", "Sketch" ]}

          />

          <br/>

        <div class="width-80"><div class="title titles stretch-width">More Projects</div></div>



        <OneSquaresProject
            style={style}
            description={
              "As part of a small team, we were given the challenge of proving University students living in Halls of Residence access to an application which would encourage them to use less heating. " +
              "We were able to utilise the heating system's API along with the universities unique login system so that each student could visualise their spending and how this might impact the environment. " +
              "One interesting feature is the 'Smart heating', this allowed a user to set a radius around their home where the heating would be automatically turned on/off depending on the users proximity. "}
            images={[HeatingAppImg]}
            imagesCaptions={["Android app"]}
            coverImage={HeatingAppImg}
            skills={["Android", "GAuth", "Java", "NodeJS"]}

          />

          <br/>

          <OneSquaresProject
            style={style}
            description={
              "A prototype events platform for both paid and non-paid events. " +
              "React JS was used to create the front end website and NodeJS for the Content Delivery Network (CDN). The Rest API was written in NodeJS (express 2.0), which connected to a MySQL database. " +
              "Each ran in separate docker containers, using AWS EC2 Container Services with Elastic Load Balancing and Auto Scaling"
            }
            images={[EventrPlatoformImg, ContainersLinkImg, ContainersDetailImg]}
            imagesCaptions={["Eventr Platform", "Docker connections", "Languages/Frameworks"]}
            coverImage={EventrPlatoformImg}
            skills={["ReactJS", "MySQL", "Docker", "AWS"]}

          />

        <br/>

        <div class="width-80"><div class="title titles stretch-width" >Project - UoB Mobile Application</div></div>

        <OneSquaresProject
            style={style}
            description={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images={[UobAppImg, UobAppImg]}
            imagesCaptions={["jnjn", "nkjn"]}
            coverImage={UobAppImg}
            imageHeight={'370px'}
            skills={["NodeJS", "HTML", "CSS", "Cordova", "Google Auth", "Sketch"]}

          />

          <br/>


      </div>
    );
  }
}

export default ProjectsMobile;
