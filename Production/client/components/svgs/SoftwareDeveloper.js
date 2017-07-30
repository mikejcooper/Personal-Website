'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SoftwareDeveloper = require('./SoftwareDeveloper.css');

var _SoftwareDeveloper2 = _interopRequireDefault(_SoftwareDeveloper);

var _reactTypingAnimation = require('react-typing-animation');

var _reactTypingAnimation2 = _interopRequireDefault(_reactTypingAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoftwareDeveloper = function SoftwareDeveloper() {
  return _react2.default.createElement(
    'div',
    { className: 'SoftwareDeveloper flex flex-column stretch-width flex-justify-centre flex-align-items-centre flex-align-items-centre' },
    _react2.default.createElement(
      _reactTypingAnimation2.default,
      { className: "font-title", speed: 150, cursor: false, startDelay: 1000 },
      _react2.default.createElement(
        'span',
        null,
        'Software Developer'
      )
    )
  );
};

exports.default = SoftwareDeveloper;

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