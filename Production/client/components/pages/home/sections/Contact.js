'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Contact = require('./Contact.css');

var _Contact2 = _interopRequireDefault(_Contact);

var _LinkedInIcon = require('svgs/LinkedInIcon');

var _LinkedInIcon2 = _interopRequireDefault(_LinkedInIcon);

var _GithubIcon = require('svgs/GithubIcon');

var _GithubIcon2 = _interopRequireDefault(_GithubIcon);

var _FacebookIcon = require('svgs/FacebookIcon');

var _FacebookIcon2 = _interopRequireDefault(_FacebookIcon);

var _MailIcon = require('svgs/MailIcon');

var _MailIcon2 = _interopRequireDefault(_MailIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Contact flex flex-column flex-justify-centre flex-align-items-centre stretch' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'top-info flex flex-justify-centre flex-align-items-centre' },
          _react2.default.createElement(
            'div',
            { className: 'titles' },
            ' Get in Contact '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'social-media flex flex-grow flex-justify-centre flex-align-items-centre' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-row' },
            _react2.default.createElement(
              'div',
              { id: 'holder' },
              _react2.default.createElement('div', { id: 'divide' }),
              _react2.default.createElement(
                'div',
                { id: 'social' },
                _react2.default.createElement(
                  'a',
                  { className: 'flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre', id: 'linkedin', href: 'https://www.linkedin.com/in/mike-cooper-7767aa37/' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon flex' },
                    _react2.default.createElement(_LinkedInIcon2.default, null)
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre', id: 'github', href: 'https://github.com/mikejcooper' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon flex' },
                    _react2.default.createElement(_GithubIcon2.default, null)
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre', id: 'facebook', href: 'https://www.facebook.com/mikejcooper' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon flex' },
                    _react2.default.createElement(_FacebookIcon2.default, null)
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'flex stretch flex-justify-centre flex-align-items-centre flex-align-items-centre', id: 'mail', href: 'mailto:mike@mjcooper.co.uk' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon flex' },
                    _react2.default.createElement(_MailIcon2.default, null)
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

  return Contact;
}(_react2.default.Component);

exports.default = Contact;