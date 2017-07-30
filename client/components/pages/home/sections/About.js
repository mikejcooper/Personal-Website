import React from 'react';
import { connect } from 'react-redux';
import css from './About.css'
import me from 'imgs/me.png'
import AboutAnimation from './AboutAnimation'


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

          <div class="flex flex-column">
            <div class="flex flex-align-items-start flex-row flex-align-items-centre stretch-width">
              <div class="flex flex-align-items-start flex-justify-centre width-100px">
                <img class="me-img img-circle" src={me}/>
              </div>
              <div class="flex flex-column stretch-width  ">

                <div class="info-title flex white  ">Hey, I'm Mike! </div>

              </div>
            </div>

           <br/>

            <div class="flex flex-align-items-start flex-row flex-align-items-centre stretch-width">
              <div class="flex flex-align-items-start flex-justify-centre width-100px">
                {/*<img class="me-img img-circle" src={me}/>*/}
              </div>
              <div class="flex flex-column stretch-width  ">

                <div class="info-caption flex "> I'm a technically-minded, detail oriented software engineer passionate about combining technical challenges with functional code and creative design.</div>

                <br/>


                <div class="info-description flex flex-column ">

                  <AboutAnimation
                    right={true}
                    width="75%"
                  >
                    <div>
                      I'm a fourth year student at <b>Bristol University</b> studying computer science.
                      I have experience developing and designing software for the <b>web</b> and <b>mobile</b>, from simple landing pages to progressive web applications.
                    </div>

                  </AboutAnimation>


                  <br/>

                  <AboutAnimation
                    right={true}
                    width="85%"
                  >
                    <div>
                      I strive to create software that not only functions efficiently under the hood, but also provides intuitive user experiences.
                      I'm continuously learning new and better ways to create seamless user experiences with clean, <b>efficient</b>, and <b>scalable</b> code.
                    </div>
                  </AboutAnimation>

                  <br/>


                  <AboutAnimation
                    right={true}
                    width="95%"
                  >
                    <div>
                      At the end of the day, my primary goal is to work on challenging projects and create something useful.
                      And when I'm not in front of a computer screen, I'm probably <b>skiing</b>, travelling, eating, or playing <b>korfball</b>.
                    </div>

                  </AboutAnimation>


                </div>


              </div>
            </div>
          </div>

        </div>



        <br/><br/>

      </div>
    );
  }
}

export default About;

