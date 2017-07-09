import React from 'react';
import css from './OneSquare.css'
import Lightbox from './Lightbox'
import SkillsContainer from '../Containers/SkillsContainer'



class OneSquare extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (

      <div class="OneSquare stretch flex flex-column flex-align-items-start width-80">

        <div class="title titles stretch-width">{this.props.title}</div>

        <div class="flex flex-column flex-space-between stretch">

          <div class="square-container flex flex-row flex-space-between">

            <div class="square flex flex-column">

              {this.props.video ?
                <div class="iframe-container stretch">
                  <iframe class="iframe" src={this.props.video} width="640" height="360" allowFullScreen></iframe>
                </div>
              :
                <div class="top" style={{height: this.props.imageHeight}}>
                  <Lightbox images={this.props.images} imagesCaptions={this.props.imagesCaptions} coverImage={this.props.coverImage}/>
                </div>
              }

              <div class="bottom">
                Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game.
                The real world can be scanned in with a Microsoft Kinect and used as in-game maps.
              </div>
              <div class="bottom-skills stretch-width">
                <SkillsContainer skills={this.props.skills} spread={false}/>
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
