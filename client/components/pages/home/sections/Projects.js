import React from 'react';
import { connect } from 'react-redux';
import TwoSquaresProject from './Projects/TwoSquares'
import OneSquaresProject from './Projects/OneSquare'

import iPhoneMocks from 'imgs/iPhone_mocks.png'

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
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images1={[iPhoneMocks, iPhoneMocks]}
            imagesCaptions1={["jnjn", "nkjn"]}
            coverImage1={iPhoneMocks}
            skills1={["C#", "C++", "Unity", "Maya", "Sketch" ]}

            description2={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images2={[iPhoneMocks, iPhoneMocks]}
            imagesCaptions2={["jnjn", "nkjn"]}
            coverImage2={iPhoneMocks}
            skills2={["C#", "C++", "Unity", "Maya", "Sketch" ]}

          />

          <br/>

          <TwoSquaresProject

            description1={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images1={[iPhoneMocks, iPhoneMocks]}
            imagesCaptions1={["jnjn", "nkjn"]}
            coverImage1={iPhoneMocks}
            skills1={["C#", "C++", "Unity", "Maya", "Sketch" ]}

            description2={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images2={[iPhoneMocks, iPhoneMocks]}
            imagesCaptions2={["jnjn", "nkjn"]}
            coverImage2={iPhoneMocks}
            skills2={["C#", "C++", "Unity", "Maya", "Sketch" ]}

          />

          <br/>
          <br/>

          <OneSquaresProject

            title={"Project - UoB Mobile Application"}
            description={
              "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." +
              "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." +
              "This was a project I worked on during my third year of Univeristy as part of a team of five people."}
            images={[iPhoneMocks, iPhoneMocks]}
            imagesCaptions={["jnjn", "nkjn"]}
            coverImage={iPhoneMocks}
            imageHeight={'370px'}
            skills={["C#", "C++", "Unity", "Maya", "Sketch" ]}

          />

          <br/><br/>


      </div>
    );
  }
}

export default Projects;
