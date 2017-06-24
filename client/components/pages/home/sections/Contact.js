import React from 'react';
import css from './Contact.css'
import LinkedInIcon from 'svgs/LinkedInIcon'
import GithubIcon from 'svgs/GithubIcon'
import FacebookIcon from 'svgs/FacebookIcon'
import MailIcon from 'svgs/MailIcon'

class Contact extends React.Component {




  render() {
    return (
      <div class="Contact flex flex-column flex-justify-centre flex-align-items-centre stretch">

        <br/><br/>

        <div class="top-info flex flex-justify-centre flex-align-items-centre">
          <div class="titles"> Get in Contact </div>
        </div>

        <div class="social-media flex flex-grow flex-justify-centre flex-align-items-centre">

          <div class="flex flex-row">
            <div id="holder">
              <div id="divide"></div>
              <div id="social">

                <a class="flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre" id="linkedin" href="https://www.linkedin.com/in/mike-cooper-7767aa37/">
                  <div class="icon flex"><LinkedInIcon/></div>
                </a>


                <a class="flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre" id="github" href="https://github.com/mikejcooper">
                  <div class="icon flex"><GithubIcon/></div>
                </a>

                <a class="flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre" id="facebook" href="https://www.facebook.com/mikejcooper">
                  <div class="icon flex"><FacebookIcon/></div>
                </a>

                <a class="flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre" id="mail" href="mailto:mike@mjcooper.co.uk">
                  <div class="icon flex"><MailIcon/></div>
                </a>

              </div>
            </div>
          </div>

        </div>


        <br/><br/>

      </div>
    );
  }
}

export default Contact;

