'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lightbox = require('./Lightbox.css');

var _Lightbox2 = _interopRequireDefault(_Lightbox);

var _reactImageLightbox = require('react-image-lightbox');

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightboxExample = function (_Component) {
  _inherits(LightboxExample, _Component);

  function LightboxExample(props) {
    _classCallCheck(this, LightboxExample);

    var _this = _possibleConstructorReturn(this, (LightboxExample.__proto__ || Object.getPrototypeOf(LightboxExample)).call(this, props));

    _this.state = {
      photoIndex: 0,
      isOpen: false
    };
    return _this;
  }

  _createClass(LightboxExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var imagesCaptions = this.props.imagesCaptions;
      var images = this.props.images;

      var _state = this.state,
          photoIndex = _state.photoIndex,
          isOpen = _state.isOpen;


      var CoverStyle = {
        backgroundImage: 'url(' + this.props.coverImage + ')'

      };

      var StretchStyle = {
        width: '100%',
        height: '100%'
      };

      return _react2.default.createElement(
        'div',
        { className: 'Lightbox', style: CoverStyle },
        _react2.default.createElement('div', {
          style: StretchStyle,
          onClick: function onClick() {
            return _this2.setState({ isOpen: true });
          } }),
        isOpen && _react2.default.createElement(_reactImageLightbox2.default, {
          imageCaption: imagesCaptions[photoIndex],
          mainSrc: images[photoIndex],
          nextSrc: images[(photoIndex + 1) % images.length],
          prevSrc: images[(photoIndex + images.length - 1) % images.length],

          onCloseRequest: function onCloseRequest() {
            return _this2.setState({ isOpen: false });
          },
          onMovePrevRequest: function onMovePrevRequest() {
            return _this2.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            });
          },
          onMoveNextRequest: function onMoveNextRequest() {
            return _this2.setState({
              photoIndex: (photoIndex + 1) % images.length
            });
          },
          imagePadding: 100
        })
      );
    }
  }]);

  return LightboxExample;
}(_react.Component);

exports.default = LightboxExample;