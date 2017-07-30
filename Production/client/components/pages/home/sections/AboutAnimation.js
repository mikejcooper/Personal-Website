'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AboutAnimation = require('./AboutAnimation.css');

var _AboutAnimation2 = _interopRequireDefault(_AboutAnimation);

var _reactWaypoint = require('react-waypoint');

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutAnimation = function (_React$Component) {
  _inherits(AboutAnimation, _React$Component);

  function AboutAnimation(props) {
    _classCallCheck(this, AboutAnimation);

    var _this = _possibleConstructorReturn(this, (AboutAnimation.__proto__ || Object.getPrototypeOf(AboutAnimation)).call(this, props));

    _this.state = { animationState: "", classState: " left-box" };
    _this.handleWaypointLeave = _this.handleWaypointLeave.bind(_this);
    _this.handleWaypointEnter = _this.handleWaypointEnter.bind(_this);
    return _this;
  }

  _createClass(AboutAnimation, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.left) {
        this.setState({ classState: " left-box" });
      } else if (this.props.right) {
        this.setState({ classState: " right-box" });
      } else {
        console.log("Specify left or right animation type : Bool");
      }
    }
  }, {
    key: 'handleWaypointEnter',
    value: function handleWaypointEnter() {
      if (this.props.left) {
        this.setState({ animationState: " left-in " });
      } else if (this.props.right) {
        this.setState({ animationState: " right-in" });
      }
    }
  }, {
    key: 'handleWaypointLeave',
    value: function handleWaypointLeave() {
      // if(this.props.left){
      //   this.setState({ animationState: " left-out"})
      // } else if(this.props.right){
      //   this.setState({ animationState: " right-out"})
      // }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'flex flex-column flex-align-items-start stretch-width' },
        _react2.default.createElement(_reactWaypoint2.default, {
          onEnter: this.handleWaypointEnter,
          onLeave: this.handleWaypointLeave
        }),
        _react2.default.createElement(
          'div',
          { style: { backgroundColor: this.props.backgroundColor, width: this.props.width }, className: "flex flex-justify-centre " + this.state.classState + this.state.animationState },
          this.props.children
        ),
        _react2.default.createElement(_reactWaypoint2.default, {
          onEnter: this.handleWaypointEnter,
          onLeave: this.handleWaypointLeave
        })
      );
    }
  }]);

  return AboutAnimation;
}(_react2.default.Component);

exports.default = AboutAnimation;