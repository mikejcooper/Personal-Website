'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Projects = require('./Projects.css');

var _Projects2 = _interopRequireDefault(_Projects);

var _TwoSquares = require('./Projects/TwoSquares');

var _TwoSquares2 = _interopRequireDefault(_TwoSquares);

var _OneSquare = require('./Projects/OneSquare');

var _OneSquare2 = _interopRequireDefault(_OneSquare);

var _iPhone_mocks = require('imgs/iPhone_mocks.png');

var _iPhone_mocks2 = _interopRequireDefault(_iPhone_mocks);

var _androidApp = require('imgs/androidApp.png');

var _androidApp2 = _interopRequireDefault(_androidApp);

var _EventrPlatform = require('imgs/EventrPlatform.png');

var _EventrPlatform2 = _interopRequireDefault(_EventrPlatform);

var _ContainersLink = require('imgs/ContainersLink.png');

var _ContainersLink2 = _interopRequireDefault(_ContainersLink);

var _ContainersDetail = require('imgs/ContainersDetail.png');

var _ContainersDetail2 = _interopRequireDefault(_ContainersDetail);

var _lawWebsite = require('imgs/lawWebsite.png');

var _lawWebsite2 = _interopRequireDefault(_lawWebsite);

var _mayaRender = require('imgs/mayaRender1.png');

var _mayaRender2 = _interopRequireDefault(_mayaRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: 'render',
    value: function render() {

      var titleStyle = { maxWidth: "650px", width: "100%" };
      var squareStyle = { maxWidth: "650px", height: "480px" };

      return _react2.default.createElement(
        'div',
        { className: 'stretch flex flex-column flex-align-items-centre flex-justify-centre' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80', style: titleStyle },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'Project - AR Mobile Game'
          )
        ),
        _react2.default.createElement(_OneSquare2.default, {
          style: squareStyle,
          description: "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." + "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." + "This was a project I worked on during my third year of Univeristy as part of a team of five people.",
          video: "https://player.vimeo.com/video/222693507",
          skills: ["C#", "C++", "Unity", "Maya", "Sketch"],
          github: 'https://github.com/mikejcooper/Reality-Bomb---AR-Mobile-Game'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80', style: titleStyle },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'More Projects'
          )
        ),
        _react2.default.createElement(_TwoSquares2.default, {
          description1: "As part of a small team, we were given the challenge of proving University students living in Halls of Residence access to an application which would encourage them to use less heating. " + "We were able to utilise the heating system's API along with the universities unique login system so that each student could visualise their spending and how this might impact the environment. " + "One interesting feature is the 'Smart heating', this allowed a user to set a radius around their home where the heating would be automatically turned on/off depending on the users proximity. ",
          images1: [_androidApp2.default],
          imagesCaptions1: ["Android app"],
          coverImage1: _androidApp2.default,
          skills1: ["Android", "Java", "NodeJS"],
          github1: 'https://github.com/Roarster31/UoB-Halls-Android',

          description2: "A prototype events platform for both paid and non-paid events. " + "React JS was used to create the front end website and NodeJS for the Content Delivery Network (CDN). The Rest API was written in NodeJS (express 2.0), which connected to a MySQL database. " + "Each ran in separate docker containers, using AWS EC2 Container Services with Elastic Load Balancing and Auto Scaling",
          images2: [_EventrPlatform2.default, _ContainersLink2.default, _ContainersDetail2.default],
          imagesCaptions2: ["Eventr Platform", "Docker connections", "Languages/Frameworks"],
          coverImage2: _EventrPlatform2.default,
          skills2: ["ReactJS", "MySQL", "Docker", "AWS"],
          github2: 'https://github.com/mikejcooper/ReactJS-Dockerised-Website'
        }),
        _react2.default.createElement(
          'div',
          { className: 'width-80', style: titleStyle },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'Project - UoB Mobile Application'
          )
        ),
        _react2.default.createElement(_OneSquare2.default, {
          style: squareStyle,
          description: "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." + "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." + "This was a project I worked on during my third year of Univeristy as part of a team of five people.",
          images: [_iPhone_mocks2.default],
          imagesCaptions: ["University of Bristol Events Application"],
          coverImage: _iPhone_mocks2.default,
          imageHeight: '370px',
          skills: ["NodeJS", "HTML", "CSS", "Cordova", "Google Auth", "Sketch"],
          github: 'https://github.com/mikejcooper/FreshersApp'

        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80', style: titleStyle },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'More Projects'
          )
        ),
        _react2.default.createElement(_TwoSquares2.default, {
          description1: "Build website for a Bristol based Law firm. Developed in ReactJS Environment With ES6, Webpack, and Babel. Hosted on AWS linux micro instance. Renewlegal.com",
          images1: [_lawWebsite2.default],
          imagesCaptions1: ["Website"],
          coverImage1: _lawWebsite2.default,
          skills1: ["ReactJS", "ES6", "AWS"],

          description2: "University project whereby I had to design, build and render 3D scenes. I also went on to build a Raytracer in C++ that could render much simpler versions of 3D scenes like the one created in the image above.",
          images2: [_mayaRender2.default, _mayaRender2.default],
          imagesCaptions2: ["Final Render of Character Scene. ", "Final Render of Restaurant Scene (Model Only)"],
          coverImage2: _mayaRender2.default,
          skills2: ["Autodesk Maya", "3D Modelling"]

        })
      );
    }
  }]);

  return Projects;
}(_react2.default.Component);

exports.default = Projects;