import React from 'react';
import css from './FourSquare.css'
import LawWebsite from 'imgs/lawWebsite.png'
import Lightbox from './Lightbox'

import img1 from 'imgs/EE.png'
import img2 from 'imgs/rb.png'

const images = [
  img1,
  img2,
];

const imagesCaptions = [
  "hello world 1",
  "hello world 2",
];




class FourSquare extends React.Component {

  render() {

    let LawCoverStyle = { backgroundImage: 'url(' + LawWebsite + ')' }



    return (

      <div class="FourSquares stretch flex flex-column flex-align-items-start width-80">

        <div class="test">
          <Lightbox images={images} imagesCaptions={imagesCaptions}/>
        </div>

        <br/>

        <div class="title titles stretch-width">More projects</div>

        <div class="flex flex-column flex-space-between stretch">

          <div class="square-container flex flex-row flex-space-between">

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={images} imagesCaptions={imagesCaptions} coverImage={LawWebsite}/>
              </div>
              <div class="bottom">
                Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
                The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              </div>
            </div>

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={images} imagesCaptions={imagesCaptions} coverImage={LawWebsite}/>
              </div>
              <div class="bottom">
                Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
                The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              </div>
            </div>

          </div>
          <br/>
          <div class="square-container flex flex-row flex-space-between">

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={images} imagesCaptions={imagesCaptions} coverImage={LawWebsite}/>
              </div>
              <div class="bottom">
                Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
                The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              </div>
            </div>

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={images} imagesCaptions={imagesCaptions} coverImage={LawWebsite}/>
              </div>
              <div class="bottom">
                Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
                The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              </div>
            </div>

          </div>

        </div>

        <br/>

      </div>

    );
  }
}

export default FourSquare;


/**
 * Created by mikecooper on 21/06/2017.
 */
