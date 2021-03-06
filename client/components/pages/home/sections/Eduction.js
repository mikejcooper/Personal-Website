import React from 'react';
import { connect } from 'react-redux';
import css from './Eduction.css'
import me from 'imgs/me.png'
import Uni from 'imgs/uni.png'
import School from 'imgs/school.png'
import Imperial from 'imgs/Imperial.png'
import EE from 'imgs/EE.png'
import TapBooks from 'imgs/tapbooks.png'

import Container from './Containers/EduExpContainer'


class Eduction extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div class="About flex flex-column flex-space-around flex-align-items-centre stretch">

        <br/><br/>

        <div class="box flex flex-align-items-start flex-column">
          <div class="flex flex-align-items-start flex-row stretch-width">
            <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
            <div class="flex flex-column stretch-width">
              <div class="stretch-width">
                <div class="title titles">Education</div>
              </div>
            </div>
          </div>
        </div>
        <br/>

        <Container
          width={this.props.width}
          thumbnail={Uni}
          title="University of Bristol"
          subTitle="Computer Science, MEng (1st)"
          date="(current) 2014 - 2018"
          location="Bristol, UK"
          skills = {["Machine Learning", "Cryptography", "Algorithms", "OpenMP", "OpenCL"]}
          description={
            <div>
                Relevant modules:
              <ul type="circle">
                <li>Data Structures & Algorithms</li>
                <li>Machine Learning</li>
                <li>High Performance Computing</li>
                <li>Computer Graphics</li>
                <li>Computer Architecture</li>
                <li>Cryptography</li>
                <li>Applied Security</li>
                <li>Web Technologies</li>
              </ul>
            </div>
          }
        />

        <br/>


        <Container
          width={this.props.width}
          thumbnail={School}
          title="Nailsea Six Form"
          subTitle={ (this.props.width > 750) ?
              <div class="flex flex-align-items-start l-spacing flex-align-items-centre">A Levels (A*, A, B, C) &nbsp;
                <div class="flex flex-column" style={{fontSize : '10px'}}>- Maths, Biology, Further Maths, Chemistry</div>
              </div> : "A Levels (A*, A, B, C)"
          }
          date="2011 - 2013"
          location="Nailsea, UK"
        />

        <br/>


        <Container
          width={this.props.width}
          thumbnail={School}
          title="Nailsea School"
          subTitle="GCSEs (A*, 4As, 3Bs)"
          date="2007 - 2011"
          location="Nailsea, UK"
        />

        <br/>
        <div class="box flex flex-align-items-start flex-column">
          <div class="flex flex-align-items-start flex-row stretch-width">
            <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
            <div class="flex flex-column stretch-width">
              <div class="stretch-width">
                <div class="title titles">Work Experience</div>
              </div>
            </div>
          </div>
        </div>
        <br/>

        <Container
          width={this.props.width}
          thumbnail={TapBooks}
          title="Quinn Blackwell Media"
          subTitle="Technical Director"
          date="2017 - Current"
          location="Bristol, UK"
          skills = {["Swift", "Python", "Agile", "TDD", "Application Architecture"]}
          description="Leading a small team of developers, with the objective to create a new audio and reading book platform on iOS.
                       The company is in the process of obtaining seed funding and we are currently preparing to pitch to investors."
        />

        <br/>

        <Container
          width={this.props.width}
          thumbnail={Uni}
          title="University of Bristol"
          subTitle="Mobile Applications Developer"
          date="2015 - 2016 "
          location="Bristol, UK"
          skills = {["HTML", "CSS", "JavaScript"]}
          description="Created a cross-platform mobile web application for new students to plan and organise social activities.
                  The app was launched on both iOS and Android in 2015 and used by over a thousand students in the first two weeks."
        />

        <br/>

        <Container
          width={this.props.width}
          thumbnail={Imperial}
          title="Imperial Tobacco"
          subTitle="Marketing Internship"
          date="July, 2015"
          location="New York, USA"
          skills = {["Design", "Creativity"]}
          description="Undertook market research, worked on marketing and contributed to an advertising campaign as part of a potential new brand launch in the United States.
                  This experience, as part of an acquisition of another company, greatly developed my inter-personal and research skills."
        />

        <br/>


        <Container
          width={this.props.width}
          thumbnail={EE}
          title="Everything Everywhere"
          subTitle="Technology & Sales Internship"
          date="August, 2014 "
          location="Avon, UK"
          skills = {["Cooperate", "Client-Facing", "Negotiation"]}
          description="I spent time visiting SMEs as part of a Sales team, approaching both current and new EE corporate customers.
                  The role required liaising with clients in a professional and persuasive manner.
                  I also worked on beta tested new phones, reviewing the functionality, usability and any basic security flaws.
                  At the end of the internship I presented my research on the future of mobile devices and carrier services to corporate managers."
        />

        <br/><br/>


      </div>
    );
  }
}

export default Eduction;

