import React from 'react';
import AugmentBackGround from 'imgs/rb.png'
import css from './RealityBomb.css'




class Projects extends React.Component {

  render() {

    return (

      <div class="RealityBomb flex flex-column flex-align-items-start width-80">
        <br/>
        <br/>

        <div class="title titles stretch-width">Project 1 - AR Mobile Game</div>

        <div class="flex flex-column flex-align-items-centre stretch">
          <div class="iframe-container stretch">
            <iframe class="iframe" src="https://player.vimeo.com/video/222693507"  width="640" height="360" allowFullScreen></iframe>
          </div>
          <div class="text-container stretch flex flex-align-items-centre flex-justify-centre">
            <div class="text stretch">
              Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
              The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              This was a project I worked on during my third year of Univeristy as part of a team of five people.
            </div>
          </div>
        </div>

        <br/>
        <br/>

      </div>

    );
  }
}

export default Projects;


/**
 * Created by mikecooper on 21/06/2017.
 */
