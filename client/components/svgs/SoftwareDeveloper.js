import React from 'react';
import css from './SoftwareDeveloper.css'

const SoftwareDeveloper = () => {
  return (
    <div class="SoftwareDeveloper">

      <svg class="svg" height="100%" width="100%" viewBox="0 0 764 150" version="1.1" >

        <path id="path">
          <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="5s" begin="0s" repeatCount='1' fill="freeze"/>
        </path>

        <g  id="path" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontSize="90" fontFamily="LiSongPro, LiSong Pro" fontWeight="300">
          <text id="Software-Developer" fill="#000000">
            <textPath href="#path">Software Developer</textPath>
          </text>

        </g>


      </svg>

    </div>
  );
}

export default SoftwareDeveloper;