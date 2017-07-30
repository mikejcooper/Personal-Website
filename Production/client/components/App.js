'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavigationBar = require('./navigationBar/NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _reactRedux = require('react-redux');

var _App = require('./App.css');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Maps dispatcher to props
var App = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      console.log("Starting website...");

      var opacityVal = 1;

      if (this.props.isSignInModalOpen || this.props.isEventModalOpen) {
        opacityVal = 0.6;
      }

      var containerStyle = {
        marginTop: '50px', // Allow children to render without hitting nav bar
        overflow: 'hidden',
        width: '100%'
      };

      var fadeStyle = {
        opacity: opacityVal // Fade webpage if modal is open
      };

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(_NavigationBar2.default, null),
            _react2.default.createElement(
              'div',
              { style: fadeStyle },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class);
exports.default = App;