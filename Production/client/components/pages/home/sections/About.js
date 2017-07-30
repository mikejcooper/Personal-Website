'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _About = require('./About.css');

var _About2 = _interopRequireDefault(_About);

var _me = require('imgs/me.png');

var _me2 = _interopRequireDefault(_me);

var _AboutAnimation = require('./AboutAnimation');

var _AboutAnimation2 = _interopRequireDefault(_AboutAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'About flex flex-column flex-space-around flex-align-items-centre stretch' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'box flex flex-align-items-start flex-column flex flex-align-items-start flex-column' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'stretch-width' },
                _react2.default.createElement(
                  'div',
                  { className: 'title titles' },
                  'ME'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex flex-column' },
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row flex-align-items-centre stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'flex flex-align-items-start flex-justify-centre width-100px' },
                _react2.default.createElement('img', { className: 'me-img img-circle', src: _me2.default })
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width  ' },
                _react2.default.createElement(
                  'div',
                  { className: 'info-title flex white  ' },
                  'Hey, I\'m Mike! '
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row flex-align-items-centre stretch-width' },
              _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width  ' },
                _react2.default.createElement(
                  'div',
                  { className: 'info-caption flex ' },
                  ' I\'m a technically-minded, detail oriented software engineer passionate about combining technical challenges with functional code and creative design.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'info-description flex flex-column ' },
                  _react2.default.createElement(
                    _AboutAnimation2.default,
                    {
                      right: true,
                      width: '75%'
                    },
                    _react2.default.createElement(
                      'div',
                      null,
                      'I\'m a fourth year student at ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'Bristol University'
                      ),
                      ' studying computer science. I have experience developing and designing software for the ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'web'
                      ),
                      ' and ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'mobile'
                      ),
                      ', from simple landing pages to progressive web applications.'
                    )
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _AboutAnimation2.default,
                    {
                      right: true,
                      width: '85%'
                    },
                    _react2.default.createElement(
                      'div',
                      null,
                      'I strive to create software that not only functions efficiently under the hood, but also provides intuitive user experiences. I\'m continuously learning new and better ways to create seamless user experiences with clean, ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'efficient'
                      ),
                      ', and ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'scalable'
                      ),
                      ' code.'
                    )
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _AboutAnimation2.default,
                    {
                      right: true,
                      width: '95%'
                    },
                    _react2.default.createElement(
                      'div',
                      null,
                      'At the end of the day, my primary goal is to work on challenging projects and create something useful. And when I\'m not in front of a computer screen, I\'m probably ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'skiing'
                      ),
                      ', travelling, eating, or playing ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'korfball'
                      ),
                      '.'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;