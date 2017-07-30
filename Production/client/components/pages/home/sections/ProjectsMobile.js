'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsMobile = function (_React$Component) {
  _inherits(ProjectsMobile, _React$Component);

  function ProjectsMobile() {
    _classCallCheck(this, ProjectsMobile);

    return _possibleConstructorReturn(this, (ProjectsMobile.__proto__ || Object.getPrototypeOf(ProjectsMobile)).call(this));
  }

  _createClass(ProjectsMobile, [{
    key: 'scaleContainerSquares',
    value: function scaleContainerSquares(width) {
      var style = { maxWidth: "650px", height: "500px" };

      if (width > 600) {
        style = { maxWidth: "650px", height: "450px" };
      } else if (width > 500) {
        style = { maxWidth: "650px", height: "400px" };
      } else if (width > 400) {
        style = { maxWidth: "650px", height: "350px" };
      } else if (width > 300) {
        style = { maxWidth: "650px", height: "300px" };
      } else {
        style = { maxWidth: "650px", height: width };
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {

      var style = this.scaleContainerSquares(this.props.width);

      return _react2.default.createElement(
        'div',
        { className: 'stretch flex flex-column flex-align-items-centre flex-justify-centre' },
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80' },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'Project - AR Mobile Game'
          )
        ),
        _react2.default.createElement(_OneSquare2.default, {
          style: style,
          description: "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." + "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." + "This was a project I worked on during my third year of Univeristy as part of a team of five people.",
          video: "https://player.vimeo.com/video/222693507",
          skills: ["C#", "C++", "Unity", "Maya", "Sketch"]

        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80' },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'More Projects'
          )
        ),
        _react2.default.createElement(_OneSquare2.default, {
          style: style,
          description: "As part of a small team, we were given the challenge of proving University students living in Halls of Residence access to an application which would encourage them to use less heating. " + "We were able to utilise the heating system's API along with the universities unique login system so that each student could visualise their spending and how this might impact the environment. " + "One interesting feature is the 'Smart heating', this allowed a user to set a radius around their home where the heating would be automatically turned on/off depending on the users proximity. ",
          images: [_androidApp2.default],
          imagesCaptions: ["Android app"],
          coverImage: _androidApp2.default,
          skills: ["Android", "GAuth", "Java", "NodeJS"]

        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_OneSquare2.default, {
          style: style,
          description: "A prototype events platform for both paid and non-paid events. " + "React JS was used to create the front end website and NodeJS for the Content Delivery Network (CDN). The Rest API was written in NodeJS (express 2.0), which connected to a MySQL database. " + "Each ran in separate docker containers, using AWS EC2 Container Services with Elastic Load Balancing and Auto Scaling",
          images: [_EventrPlatform2.default, _ContainersLink2.default, _ContainersDetail2.default],
          imagesCaptions: ["Eventr Platform", "Docker connections", "Languages/Frameworks"],
          coverImage: _EventrPlatform2.default,
          skills: ["ReactJS", "MySQL", "Docker", "AWS"]

        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'width-80' },
          _react2.default.createElement(
            'div',
            { className: 'title titles stretch-width' },
            'Project - UoB Mobile Application'
          )
        ),
        _react2.default.createElement(_OneSquare2.default, {
          style: style,
          description: "Reality Bomb is one of the first games of its kind to fuse the real and virtual worlds in a gripping multiplayer mobile game." + "The real world can be scanned in with a Microsoft Kinect and used as in-game maps." + "This was a project I worked on during my third year of Univeristy as part of a team of five people.",
          images: [_iPhone_mocks2.default, _iPhone_mocks2.default],
          imagesCaptions: ["jnjn", "nkjn"],
          coverImage: _iPhone_mocks2.default,
          imageHeight: '370px',
          skills: ["NodeJS", "HTML", "CSS", "Cordova", "Google Auth", "Sketch"]

        }),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return ProjectsMobile;
}(_react2.default.Component);

exports.default = ProjectsMobile;