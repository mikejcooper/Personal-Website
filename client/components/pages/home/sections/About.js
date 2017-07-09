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

                <div class="info-caption flex "> I'm a technically-minded, detail oriented software engineer passionate about combining functional code with beautiful design.</div>

                <br/>


                <div class="info-description flex flex-row ">
                  I'm a fourth year student at Northeastern University in Boston studying computer science and interaction design.
                  I have experience developing and designing software for the web, from simple landing pages to progressive web applications.
                    I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.

                  I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
                    I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their
                    knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                  When I'm not in front of a computer screen, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
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

