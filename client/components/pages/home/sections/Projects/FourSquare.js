import React from 'react';
import css from './FourSquare.css'
import Lightbox from './Lightbox'
import SkillsContainer from '../Containers/SkillsContainer'


class FourSquare extends React.Component {

  render() {

    return (

      <div class="FourSquares stretch flex flex-column flex-align-items-start width-80">

        <div class="title titles stretch-width">More projects</div>

        <div class="flex flex-column flex-space-between stretch">

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
          <br/>
          <div class="square-container flex flex-row flex-space-between">

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={this.props.images3} imagesCaptions={this.props.imagesCaptions3} coverImage={this.props.coverImage3}/>
              </div>
              <div class="bottom">
                {this.props.description3}
              </div>
              <div class="bottom-skills ">
                <SkillsContainer skills={this.props.skills3} spread={true}/>
              </div>
            </div>

            <div class="square flex flex-column">
              <div class="top">
                <Lightbox images={this.props.images4} imagesCaptions={this.props.imagesCaptions4} coverImage={this.props.coverImage4}/>
              </div>
              <div class="bottom">
                {this.props.description4}
              </div>
              <div class="bottom-skills ">
                <SkillsContainer skills={this.props.skills4} spread={true}/>
              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default FourSquare;


/**
 * Created by mikecooper on 21/06/2017.
 */
