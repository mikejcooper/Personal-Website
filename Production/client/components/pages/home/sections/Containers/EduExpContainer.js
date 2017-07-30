'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SkillsContainer = require('./SkillsContainer');

var _SkillsContainer2 = _interopRequireDefault(_SkillsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Eduction = function (_React$Component) {
  _inherits(Eduction, _React$Component);

  function Eduction() {
    _classCallCheck(this, Eduction);

    var _this = _possibleConstructorReturn(this, (Eduction.__proto__ || Object.getPrototypeOf(Eduction)).call(this));

    _this.state = { showInfo: false };
    _this.handleToggle = _this.handleToggle.bind(_this);

    return _this;
  }

  _createClass(Eduction, [{
    key: 'handleToggle',
    value: function handleToggle(showInfoBool) {
      this.setState({ showInfo: !showInfoBool });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.width > 750) {
        return _react2.default.createElement(
          'div',
          { className: 'stretch-width' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-justify-centre width-100px' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.bristol.ac.uk/' },
                _react2.default.createElement('img', { className: 'me-img', src: this.props.thumbnail })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'flex flex-space-between flex-row margin-bottom-5px' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-start bold l-spacing' },
                  ' ',
                  this.props.title,
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-end italic' },
                  ' ',
                  this.props.date,
                  ' '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-space-between flex-row margin-bottom-5px' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-start l-spacing' },
                  this.props.subTitle,
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-end italic' },
                  ' ',
                  this.props.location,
                  ' '
                )
              )
            )
          ),
          this.props.description ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row stretch-width' },
              _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width flex-align-items-end' },
                _react2.default.createElement(
                  'a',
                  { className: 'cursor', onClick: function onClick() {
                      return _this2.handleToggle(_this2.state.showInfo);
                    } },
                  this.state.showInfo ? _react2.default.createElement(
                    'div',
                    { className: 'toggleButton' },
                    'View less'
                  ) : _react2.default.createElement(
                    'div',
                    { className: 'toggleButton' },
                    'View more'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row stretch-width' },
              _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width' },
                this.state.showInfo ? _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width Karla-font' },
                  this.props.description
                ) : _react2.default.createElement('div', null),
                _react2.default.createElement(_SkillsContainer2.default, { style: { paddingBottom: "10px" }, className: 'flex', skills: this.props.skills })
              )
            )
          ) : _react2.default.createElement(
            'div',
            { style: { paddingTop: "10px" }, className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
            _react2.default.createElement(_SkillsContainer2.default, { style: { paddingBottom: "10px" }, skills: this.props.skills })
          )
        );
      } else {

        return _react2.default.createElement(
          'div',
          { className: 'stretch-width' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-justify-centre width-100px' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.bristol.ac.uk/' },
                _react2.default.createElement('img', { className: 'me-img', src: this.props.thumbnail })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'flex flex-space-between flex-row margin-bottom-5px' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-start bold l-spacing' },
                  ' ',
                  this.props.title,
                  ' '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-space-between flex-row margin-bottom-5px' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-align-items-start l-spacing' },
                  this.props.subTitle,
                  ' '
                )
              )
            )
          ),
          this.props.description ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row stretch-width' },
              _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width flex-align-items-start' },
                _react2.default.createElement(
                  'a',
                  { className: 'cursor', onClick: function onClick() {
                      return _this2.handleToggle(_this2.state.showInfo);
                    } },
                  this.state.showInfo ? _react2.default.createElement(
                    'div',
                    { className: 'toggleButton' },
                    'View less'
                  ) : _react2.default.createElement(
                    'div',
                    { className: 'toggleButton' },
                    'View more'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-align-items-start flex-row stretch-width' },
              _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch-width' },
                this.state.showInfo ? _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width Karla-font' },
                  this.props.description
                ) : _react2.default.createElement('div', null),
                _react2.default.createElement(_SkillsContainer2.default, { style: { paddingBottom: "10px" }, className: 'flex', skills: this.props.skills })
              )
            )
          ) : _react2.default.createElement(
            'div',
            { style: { paddingTop: "10px" }, className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
            _react2.default.createElement(_SkillsContainer2.default, { style: { paddingBottom: "10px" }, skills: this.props.skills })
          )
        );
      }
    }
  }]);

  return Eduction;
}(_react2.default.Component);

exports.default = Eduction;