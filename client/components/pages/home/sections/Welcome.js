import React from 'react';
import SketchIcon from 'svgs/SketchIcon'
import SoftwareDeveloper from 'svgs/SoftwareDeveloper'
import LightBulb from 'svgs/LightBulb'
import ComputerIcon from 'svgs/ComputerIcon'



class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {

    let animationStyle = {
      height: '20vh'
    };

    let animationStyleSmall = {
      height: '12vh'
    };

    if(this.props.width < 400){
      return(
        <div class="flex flex-column flex-align-items-centre stretch">

          <div class="stretch-width flex flex-align-items-centre flex-justify-centre">
            <SoftwareDeveloper/>
          </div>

          <div class="width-80">

            <div class="flex flex-column stretch">

              {/*IDEA*/}

              <div class="flex flex-column stretch flex-justify-centre padding-bottom-10">

                <div class="flex flex-column stretch-width ">
                  <div class="border-bottom padding-bottom-10 titles black">
                    1. IDEA
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyleSmall}>
                      <LightBulb/>
                    </div>
                  </div>

                </div>

              </div>

              {/*DESIGN*/}

              <div class="flex flex-column stretch flex-justify-centre padding-bottom-10">

                <div class="flex flex-column stretch-width">
                  <div class="border-bottom padding-bottom-10 titles black">
                    2. DESIGN
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyleSmall}>
                      <SketchIcon/>
                    </div>
                  </div>

                </div>

              </div>

              {/*BUILD*/}

              <div class="flex flex-column stretch flex-justify-centre padding-bottom-10">

                <div class="flex flex-column stretch-width">
                  <div class="border-bottom padding-bottom-10 titles black">
                    3. BUILD
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyleSmall}>
                      <ComputerIcon/>
                    </div>
                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>
      )

    } else {
      return (

        <div class="flex flex-column flex-align-items-centre stretch">

          <div class="stretch-width flex flex-align-items-centre flex-justify-centre">
            <SoftwareDeveloper/>
          </div>

          <div class="bottom width-80">

            <div class="flex flex-row stretch">

              {/*IDEA*/}

              <div class="flex flex-column stretch flex-justify-start">

                <div class="flex flex-column stretch-width ">
                  <div class="border-bottom padding-bottom-10 titles black">
                    1. IDEA
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyle}>
                      <LightBulb/>
                    </div>
                  </div>

                </div>

              </div>

              {/*DESIGN*/}

              <div class="flex flex-column stretch flex-justify-centre">

                <div class="flex flex-column stretch-width">
                  <div class="border-bottom padding-bottom-10 titles black">
                    2. DESIGN
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyle}>
                      <SketchIcon/>
                    </div>
                  </div>

                </div>

              </div>

              {/*BUILD*/}

              <div class="flex flex-column stretch flex-justify-end">

                <div class="flex flex-column stretch-width">
                  <div class="border-bottom padding-bottom-10 titles black">
                    3. BUILD
                  </div>
                  <br/>
                  <div class="flex flex-row flex-justify-centre">
                    <div class="width-60" style={animationStyle}>
                      <ComputerIcon/>
                    </div>
                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>

      );
    }
  }
}

export default Welcome;


/**
 * Created by mikecooper on 21/06/2017.
 */
