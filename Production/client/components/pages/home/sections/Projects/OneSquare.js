'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OneSquare = require('./OneSquare.css');

var _OneSquare2 = _interopRequireDefault(_OneSquare);

var _Lightbox = require('./Lightbox');

var _Lightbox2 = _interopRequireDefault(_Lightbox);

var _SkillsContainer = require('../Containers/SkillsContainer');

var _SkillsContainer2 = _interopRequireDefault(_SkillsContainer);

var _reactWaypoint = require('react-waypoint');

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OneSquare = function (_React$Component) {
  _inherits(OneSquare, _React$Component);

  function OneSquare(props) {
    _classCallCheck(this, OneSquare);

    var _this = _possibleConstructorReturn(this, (OneSquare.__proto__ || Object.getPrototypeOf(OneSquare)).call(this, props));

    _this.state = { classState: "" };
    _this.handleWaypointLeave = _this.handleWaypointLeave.bind(_this);
    _this.handleWaypointEnter = _this.handleWaypointEnter.bind(_this);
    return _this;
  }

  _createClass(OneSquare, [{
    key: 'handleWaypointEnter',
    value: function handleWaypointEnter() {
      this.setState({ classState: " animate" });

      console.log("here");
    }
  }, {
    key: 'handleWaypointLeave',
    value: function handleWaypointLeave() {}
  }, {
    key: 'render',
    value: function render() {

      var Skills = this.props.github ? _react2.default.createElement(_SkillsContainer2.default, { skills: this.props.skills, spread: false, github: this.props.github }) : _react2.default.createElement(_SkillsContainer2.default, { skills: this.props.skills, spread: false });

      return _react2.default.createElement(
        'div',
        { style: this.props.style, className: "OneSquare stretch flex flex-column flex-align-items-start width-80 " + this.state.classState },
        _react2.default.createElement(_reactWaypoint2.default, {
          onEnter: this.handleWaypointEnter,
          onLeave: this.handleWaypointLeave
        }),
        _react2.default.createElement(
          'div',
          { className: 'flex flex-column flex-space-between stretch' },
          _react2.default.createElement(
            'div',
            { className: 'square-container flex flex-row flex-space-between stretch' },
            _react2.default.createElement(
              'div',
              { className: 'square flex flex-column stretch' },
              this.props.video ? _react2.default.createElement(
                'div',
                { className: 'iframe-container stretch' },
                _react2.default.createElement('iframe', { className: 'iframe', src: this.props.video, width: '640', height: '360', allowFullScreen: true })
              ) : _react2.default.createElement(
                'div',
                { className: 'iframe-container stretch' },
                _react2.default.createElement(
                  'div',
                  { className: 'iframe' },
                  _react2.default.createElement(_Lightbox2.default, { images: this.props.images, imagesCaptions: this.props.imagesCaptions, coverImage: this.props.coverImage })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex bottom-text' },
                _react2.default.createElement(
                  _reactLinkify2.default,
                  null,
                  this.props.description
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-align-items-start flex-align-items-centre bottom-skills' },
                Skills
              )
            )
          )
        )
      );
    }
  }]);

  return OneSquare;
}(_react2.default.Component);

exports.default = OneSquare;

/**
 * Created by mikecooper on 21/06/2017.
 */