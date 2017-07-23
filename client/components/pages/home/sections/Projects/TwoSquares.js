import React from 'react';
import css from './TwoSquares.css'
import Lightbox from './Lightbox'
import SkillsContainer from '../Containers/SkillsContainer'
import OneSquaresProject from './OneSquare'

class TwoSquares extends React.Component {

  render() {

    return (

      <div class="TwoSquares flex flex-column flex-align-items-start width-80">

        {this.props.title ?
          <div class="title titles stretch-width">{this.props.title}</div>
          :
          <div/>
        }

        <div class="flex flex-row flex-space-between stretch">

            <OneSquaresProject

              style={{maxWidth: "320px", height: "250px"}}
              description={this.props.description1}
              images={this.props.images1}
              imagesCaptions={this.props.imagesCaptions1}
              coverImage={this.props.coverImage1}
              skills={this.props.skills1}
            />


            <OneSquaresProject

              style={{maxWidth: "320px", height: "250px"}}
              description={this.props.description2}
              images={this.props.images2}
              imagesCaptions={this.props.imagesCaptions2}
              coverImage={this.props.coverImage2}
              skills={this.props.skills2}
            />

        </div>


      </div>

    );
  }
}

export default TwoSquares;


/**
 * Created by mikecooper on 21/06/2017.
 */
