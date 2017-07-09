import React from 'react';
import css from './TwoSquares.css'
import Lightbox from './Lightbox'
import SkillsContainer from '../Containers/SkillsContainer'


class TwoSquares extends React.Component {

  render() {

    return (

      <div class="TwoSquares stretch flex flex-column flex-align-items-start width-80">

        {this.props.title ?
          <div class="title titles stretch-width">{this.props.title}</div>
          :
          <div/>
        }

        <div class="TwoSquares-container flex flex-column flex-space-between stretch">

          <div class="square-container flex flex-row flex-space-between">

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={this.props.images1} imagesCaptions={this.props.imagesCaptions1} coverImage={this.props.coverImage1}/>
              </div>
              <div class="bottom">
                {this.props.description1}
              </div>
              <div class="bottom-skills ">
                <SkillsContainer skills={this.props.skills1} spread={true}/>
              </div>
            </div>

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={this.props.images2} imagesCaptions={this.props.imagesCaptions2} coverImage={this.props.coverImage2}/>
              </div>
              <div class="bottom">
                {this.props.description2}
              </div>
              <div class="bottom-skills ">
                <SkillsContainer skills={this.props.skills2} spread={true}/>
              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default TwoSquares;


/**
 * Created by mikecooper on 21/06/2017.
 */
