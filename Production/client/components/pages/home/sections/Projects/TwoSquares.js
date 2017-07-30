'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TwoSquares = require('./TwoSquares.css');

var _TwoSquares2 = _interopRequireDefault(_TwoSquares);

var _Lightbox = require('./Lightbox');

var _Lightbox2 = _interopRequireDefault(_Lightbox);

var _SkillsContainer = require('../Containers/SkillsContainer');

var _SkillsContainer2 = _interopRequireDefault(_SkillsContainer);

var _OneSquare = require('./OneSquare');

var _OneSquare2 = _interopRequireDefault(_OneSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwoSquares = function (_React$Component) {
  _inherits(TwoSquares, _React$Component);

  function TwoSquares() {
    _classCallCheck(this, TwoSquares);

    return _possibleConstructorReturn(this, (TwoSquares.__proto__ || Object.getPrototypeOf(TwoSquares)).apply(this, arguments));
  }

  _createClass(TwoSquares, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'TwoSquares flex flex-column flex-align-items-start width-80' },
        this.props.title ? _react2.default.createElement(
          'div',
          { className: 'title titles stretch-width' },
          this.props.title
        ) : _react2.default.createElement('div', null),
        _react2.default.createElement(
          'div',
          { className: 'flex flex-row flex-space-between stretch' },
          _react2.default.createElement(_OneSquare2.default, {

            style: { maxWidth: "320px", height: "300px" },
            description: this.props.description1,
            images: this.props.images1,
            imagesCaptions: this.props.imagesCaptions1,
            coverImage: this.props.coverImage1,
            skills: this.props.skills1,
            github: this.props.github1
          }),
          _react2.default.createElement(_OneSquare2.default, {

            style: { maxWidth: "320px", height: "300px" },
            description: this.props.description2,
            images: this.props.images2,
            imagesCaptions: this.props.imagesCaptions2,
            coverImage: this.props.coverImage2,
            skills: this.props.skills2,
            github: this.props.github2
          })
        )
      );
    }
  }]);

  return TwoSquares;
}(_react2.default.Component);

exports.default = TwoSquares;

/**
 * Created by mikecooper on 21/06/2017.
 */