import React from 'react';
import css from './SoftwareDeveloper.css'
import Typing from 'react-typing-animation';


const SoftwareDeveloper = () => {
  return (
    <div class="SoftwareDeveloper flex flex-column stretch-width flex-justify-centre flex-align-items-centre flex-align-items-centre">

      <Typing class={"font-title"} speed={150} cursor={false} startDelay={1000} >
        <span>Software Developer</span>
      </Typing>


    </div>
  );
}

export default SoftwareDeveloper;



//
// <svg class="svg" height="100%" width="100%" viewBox="0 0 764 150" version="1.1" >
//
//   <path id="path">
//     <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="5s" begin="0s" repeatCount='1' fill="freeze"/>
//     {/*<animate attributeType="XML" attributeName="x" from="-100" to="120" dur="10s" repeatCount="indefinite"/>*/}
//   </path>
//
//   <g  id="path" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontSize="90" fontFamily="LiSongPro, LiSong Pro" fontWeight="300">
//     <text id="Software-Developer" fill="#000000">
//       <textPath href="#path">Software Developer</textPath>
//     </text>
//
//   </g>
//
//
// </svg>