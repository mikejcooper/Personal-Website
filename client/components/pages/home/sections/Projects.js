import React from 'react';
import { connect } from 'react-redux';
import css from './Projects.css'
import TwoSquaresProject from './Projects/TwoSquares'
import OneSquaresProject from './Projects/OneSquare'

import UobAppImg from 'imgs/iPhone_mocks.png'
import HeatingAppImg from 'imgs/androidApp.png'
import EventrPlatoformImg from 'imgs/EventrPlatform.png'
import ContainersLinkImg from 'imgs/ContainersLink.png'
import ContainersDetailImg from 'imgs/ContainersDetail.png'
import LawWebsiteImg from 'imgs/lawWebsite.png'
import Maya1Img from 'imgs/mayaRender1.png'
import Maya2Img from 'imgs/mayaRender1.png'

class Projects extends React.Component {

  render() {

    var titleStyle = {maxWidth: "650px", width: "100%"}
    var squareStyle = {maxWidth: "650px", height: "480px"}


    return (
      <div class="stretch flex flex-column flex-align-items-centre flex-justify-centre">

        <br/><br/>

        <div class="width-80" style = {titleStyle}><div class="title titles stretch-width">Project - AR Mobile Game</div></div>

        <OneSquaresProject
          style={squareStyle}
          description={
            "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
            "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
            "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
          video={"https://player.vimeo.com/video/222693507"}
          skills={["C#", "C++", "Unity", "Maya", "Sketch" ]}
          github="https://github.com/mikejcooper/Reality-Bomb---AR-Mobile-Game"
        />

        <br/>
        <br/>

        <div class="width-80" style = {titleStyle}><div class="title titles stretch-width">More Projects</div></div>

        <TwoSquaresProject
          description1={
            "As part of a small team, we were given the challenge of proving University students living in Halls of Residence access to an application which would encourage them to use less heating. " +
            "We were able to utilise the heating system's API along with the universities unique login system so that each student could visualise their spending and how this might impact the environment. " +
            "One interesting feature is the 'Smart heating', this allowed a user to set a radius around their home where the heating would be automatically turned on/off depending on the users proximity. "}
          images1={[HeatingAppImg]}
          imagesCaptions1={["Android app"]}
          coverImage1={HeatingAppImg}
          skills1={["Android", "Java", "NodeJS"]}
          github1="https://github.com/Roarster31/UoB-Halls-Android"

          description2={
            "A prototype events platform for both paid and non-paid events. " +
            "React JS was used to create the front end website and NodeJS for the Content Delivery Network (CDN). The Rest API was written in NodeJS (express 2.0), which connected to a MySQL database. " +
            "Each ran in separate docker containers, using AWS EC2 Container Services with Elastic Load Balancing and Auto Scaling"
          }
          images2={[EventrPlatoformImg, ContainersLinkImg, ContainersDetailImg]}
          imagesCaptions2={["Eventr Platform", "Docker connections", "Languages/Frameworks"]}
          coverImage2={EventrPlatoformImg}
          skills2={["ReactJS", "MySQL", "Docker", "AWS"]}
          github2="https://github.com/mikejcooper/ReactJS-Dockerised-Website"
        />


        <div class="width-80" style = {titleStyle}><div class="title titles stretch-width">Project - UoB Mobile Application</div></div>

        <OneSquaresProject
          style={squareStyle}
          description={
            "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
            "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
            "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
          images={[UobAppImg]}
          imagesCaptions={["University of Bristol Events Application"]}
          coverImage={UobAppImg}
          imageHeight={'370px'}
          skills={["NodeJS", "HTML", "CSS", "Cordova", "Google Auth", "Sketch"]}
          github="https://github.com/mikejcooper/FreshersApp"

        />

        <br/><br/>

        <div class="width-80" style = {titleStyle}><div class="title titles stretch-width">More Projects</div></div>

        <TwoSquaresProject
          description1={
            "Build website for a Bristol based Law firm. Developed in ReactJS Environment With ES6, Webpack, and Babel. Hosted on AWS linux micro instance. Renewlegal.com"
            }
          images1={[LawWebsiteImg]}
          imagesCaptions1={["Website"]}
          coverImage1={LawWebsiteImg}
          skills1={["ReactJS", "HTML", "ES6", "AWS"]}


          description2={
            "University project whereby I had to design, build and render 3D scenes. I also went on to build a Raytracer in C++ that could render much simpler versions of 3D scenes like the one created in the image above."
          }
          images2={[Maya1Img, Maya2Img]}
          imagesCaptions2={["Final Render of Character Scene. ", "Final Render of Restaurant Scene (Model Only)"]}
          coverImage2={Maya1Img}
          skills2={["Autodesk Maya", "3D Modelling"]}

        />


      </div>
    );
  }
}

export default Projects;
