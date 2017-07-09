import React from 'react';
import SkillsContainer from './SkillsContainer'



class Eduction extends React.Component {

  constructor(){
    super();
    this.state = {
      showInfo: false,
    };
    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle(showInfoBool){
      this.setState({showInfo: !showInfoBool});
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
                  <a class="cursor" onClick={() => this.handleToggle(this.state.showInfo)}>
                    {this.state.showInfo ? (
                        <div class="toggleButton">View less</div>
                      ) : (
                        <div class="toggleButton">View more</div>
                      )}
                  </a>
                </div>
              </div>

              <div class="flex flex-align-items-start flex-row stretch-width">
                <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
                <div class="flex flex-column stretch-width">
                  {this.state.showInfo ? (
                      <div class="flex flex-column stretch-width Karla-font">
                        {this.props.description}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  <SkillsContainer style={{paddingBottom: "10px"}} class="flex" skills={this.props.skills} />
                </div>
              </div>
            </div>

          ) : (
            <div style={{paddingTop: "10px"}} class="flex flex-align-items-start flex-row stretch-width">
              <div class="flex flex-align-items-start flex-justify-centre width-100px"></div>
              <SkillsContainer style={{paddingBottom: "10px"}} skills={this.props.skills} />
            </div>

          )}



        </div>


    );
  }
}

export default Eduction;

