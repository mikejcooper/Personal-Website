'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('./Home.css');

var _Home2 = _interopRequireDefault(_Home);

var _reactRedux = require('react-redux');

var _About = require('./sections/About');

var _About2 = _interopRequireDefault(_About);

var _Eduction = require('./sections/Eduction');

var _Eduction2 = _interopRequireDefault(_Eduction);

var _Welcome = require('./sections/Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Contact = require('./sections/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Projects = require('./sections/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

var _ProjectsMobile = require('./sections/ProjectsMobile');

var _ProjectsMobile2 = _interopRequireDefault(_ProjectsMobile);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = _reactScroll2.default.Element;

var scrollSpy = _reactScroll2.default.scrollSpy;

var Home = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    scrollPosition: store.navBar.scrollPosition
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = { width: '0', height: '0' };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.onEnterSection = _this.onEnterSection.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);

      scrollSpy.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }, {
    key: 'onEnterSection',
    value: function onEnterSection() {
      console.log("new section");
    }
  }, {
    key: 'render',
    value: function render() {
      // DONT ALLOW PAGE TO RESZIE AFTER LOADING !!!!!!!

      var numOfPages = 3;
      var color1 = this.props.scrollPosition * 30 / 800;
      var containerStyle = {
        height: this.state.height - 50,
        overflow: 'hidden'
      };

      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          Element,
          { name: 'Home' },
          _react2.default.createElement(
            'div',
            { className: 'page p1', style: containerStyle },
            _react2.default.createElement(_Welcome2.default, { width: this.state.width })
          )
        ),
        _react2.default.createElement(
          Element,
          { name: 'About' },
          _react2.default.createElement(
            'div',
            { className: 'page p2 flex flex-justify-centre' },
            _react2.default.createElement(_About2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'page p3 flex flex-justify-centre' },
            _react2.default.createElement(_Eduction2.default, { width: this.state.width })
          )
        ),
        _react2.default.createElement(
          Element,
          { name: 'Projects' },
          _react2.default.createElement(
            'div',
            { id: 'about-us', className: 'page p4' },
            this.state.width > 750 ? _react2.default.createElement(_Projects2.default, null) : _react2.default.createElement(_ProjectsMobile2.default, { width: this.state.width })
          )
        ),
        _react2.default.createElement(
          Element,
          { name: 'Contact' },
          _react2.default.createElement(
            'div',
            { className: 'page', style: containerStyle },
            _react2.default.createElement(_Contact2.default, null)
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class);
exports.default = Home;