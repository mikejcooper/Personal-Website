import React from 'react';
import { connect } from 'react-redux';
import TwoSquaresProject from './Projects/TwoSquares'
import OneSquaresProject from './Projects/OneSquare'

import UobAppImg from 'imgs/iPhone_mocks.png'
import HeatingAppImg from 'imgs/AndroidApp.png'
import EventrPlatoformImg from 'imgs/EventrPlatform.png'
import ContainersLinkImg from 'imgs/ContainersLink.png'
import ContainersDetailImg from 'imgs/ContainersDetail.png'

class Projects extends React.Component {

  render() {

    return (
      <div class="stretch flex flex-column flex-align-items-centre flex-justify-centre">

          <br/><br/>

          <OneSquaresProject

            title={"Project - AR Mobile Game"}
            description={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            video={"https://player.vimeo.com/video/222693507"}
            skills={["C#", "C++", "Unity", "Maya", "Sketch" ]}

          />

          <br/>
          <br/>

          <TwoSquaresProject

            title="More Projects"
            description1={
              "As part of a small team, we were given the challenge of proving University students living in Halls of Residence access to an application which would encourage them to use less heating. " +
              "We were able to utilise the heating system's API along with the universities unique login system so that each student could visualise their spending and how this might impact the environment. " +
              "One interesting feature is the 'Smart heating', this allowed a user to set a radius around their home where the heating would be automatically turned on/off depending on the users proximity. "}
            images1={[HeatingAppImg]}
            imagesCaptions1={["Android app"]}
            coverImage1={HeatingAppImg}
            skills1={["Android", "Google Auth", "Java", "NodeJS"]}

            description2={
              "A prototype events platform for both paid and non-paid events. " +
              "React JS was used to create the front end website and NodeJS for the Content Delivery Network (CDN). The Rest API was written in NodeJS (express 2.0), which connected to a MySQL database. " +
              "Each ran in separate docker containers, using AWS EC2 Container Services with Elastic Load Balancing and Auto Scaling"
              }
            images2={[EventrPlatoformImg, ContainersLinkImg, ContainersDetailImg]}
            imagesCaptions2={["Eventr Platform", "Docker connections", "Languages/Frameworks"]}
            coverImage2={EventrPlatoformImg}
            skills2={["ReactJS", "MySQL", "Docker", "AWS"]}

          />

          <br/>
          <br/>

          <OneSquaresProject

            title={"Project - UoB Mobile Application"}
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

          <br/><br/>


      </div>
    );
  }
}

export default Projects;
