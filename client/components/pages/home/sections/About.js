import React from 'react';
import { connect } from 'react-redux';
import css from './About.css'
import me from 'imgs/me.png'

class About extends React.Component {


  render() {
    return (
      <div class="About flex flex-column flex-space-around flex-align-items-centre stretch">

        <br/><br/>

{/*-----------About me-------------*/}

        <div class="box flex flex-align-items-start flex-column flex flex-align-items-start flex-column">

          <div class="flex flex-align-items-start flex-row stretch-width">
            <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
            <div class="flex flex-column stretch-width">
              <div class="stretch-width">
                <div class="title titles">ME</div>
                {/*<div class="bar-line">{this.renderSVGLine()}</div>*/}
              </div>
            </div>
          </div>

          <div class="flex flex-align-items-start flex-row stretch-width">
            <div class="flex flex-align-items-start flex-justify-centre width-100px">
              <img class="me-img img-circle" src={me}/>
            </div>
            <div class="flex flex-column stretch-width">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            </div>
          </div>
        </div>


        <br/><br/>

      </div>
    );
  }
}

export default About;

