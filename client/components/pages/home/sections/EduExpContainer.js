import React from 'react';
import { connect } from 'react-redux';
import css from './Eduction.css'
import me from 'imgs/me.png'
import Uni from 'imgs/uni.png'
import School from 'imgs/school.png'
import Imperial from 'imgs/Imperial.png'
import EE from 'imgs/EE.png'


class Eduction extends React.Component {

  constructor(){
    super();
    this.state = {
      showInfo1: false,
      showInfo2: false,
      showInfo3: false,
      showInfo4: false,
    };
    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle(showInfoBool){
      this.setState({showInfo1: !showInfoBool});
  }



  render() {



    return (

        <div class="stretch-width">

          <div class="flex flex-align-items-start flex-row stretch-width">
            <div class="flex flex-align-items-start flex-justify-centre width-100px">
              <a href="https://www.bristol.ac.uk/"><img class="me-img" src={this.props.thumbnail}/></a>
            </div>
            <div class="flex flex-column stretch-width">
              <div class="flex flex-space-between flex-row margin-bottom-5px">
                <div class="flex flex-align-items-start bold l-spacing"> {this.props.title} </div>
                <div class="flex flex-align-items-end italic"> {this.props.date} </div>
              </div>
              <div class="flex flex-space-between flex-row margin-bottom-5px">
                <div class="flex flex-align-items-start l-spacing">{this.props.subTitle} </div>
                <div class="flex flex-align-items-end italic"> {this.props.location} </div>
              </div>
            </div>
          </div>

          {this.props.description ? (

            <div>
              <div class="flex flex-align-items-start flex-row stretch-width">
                <div class="flex flex-align-items-start flex-justify-centre width-100px">
                </div>
                <div class="flex flex-column stretch-width flex-align-items-end">
                  <a class="cursor" onClick={() => this.handleToggle(this.state.showInfo1)}>
                    {this.state.showInfo1 ? (
                        <div class="toggleButton">View less</div>
                      ) : (
                        <div class="toggleButton">View more</div>
                      )}
                  </a>
                </div>
              </div>

              <div class="flex flex-align-items-start flex-row stretch-width">
                <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
                {this.state.showInfo1 ? (
                    <div class="flex flex-column stretch-width Karla-font">
                      {this.props.description}
                    </div>
                  ) : (
                    <div></div>
                  )}
              </div>
            </div>

          ) : (

            <div style={{paddingTop: "10px"}}>
            </div>

          )}

        </div>


    );
  }
}

export default Eduction;

