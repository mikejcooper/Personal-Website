'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SketchIcon = require('svgs/SketchIcon');

var _SketchIcon2 = _interopRequireDefault(_SketchIcon);

var _SoftwareDeveloper = require('svgs/SoftwareDeveloper');

var _SoftwareDeveloper2 = _interopRequireDefault(_SoftwareDeveloper);

var _LightBulb = require('svgs/LightBulb');

var _LightBulb2 = _interopRequireDefault(_LightBulb);

var _ComputerIcon = require('svgs/ComputerIcon');

var _ComputerIcon2 = _interopRequireDefault(_ComputerIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Welcome = function (_React$Component) {
  _inherits(Welcome, _React$Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this));
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {

      var animationStyle = {
        height: '20vh'
      };

      var animationStyleSmall = {
        height: '12vh'
      };

      if (this.props.width < 400) {
        return _react2.default.createElement(
          'div',
          { className: 'flex flex-column flex-align-items-centre stretch' },
          _react2.default.createElement(
            'div',
            { className: 'stretch-width flex flex-align-items-centre flex-justify-centre' },
            _react2.default.createElement(_SoftwareDeveloper2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'width-80' },
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch' },
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-centre padding-bottom-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width ' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '1. IDEA'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyleSmall },
                      _react2.default.createElement(_LightBulb2.default, null)
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-centre padding-bottom-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '2. DESIGN'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyleSmall },
                      _react2.default.createElement(_SketchIcon2.default, null)
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-centre padding-bottom-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '3. BUILD'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyleSmall },
                      _react2.default.createElement(_ComputerIcon2.default, null)
                    )
                  )
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'flex flex-column flex-align-items-centre stretch' },
          _react2.default.createElement(
            'div',
            { className: 'stretch-width flex flex-align-items-centre flex-justify-centre' },
            _react2.default.createElement(_SoftwareDeveloper2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom width-80' },
            _react2.default.createElement(
              'div',
              { className: 'flex flex-row stretch' },
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-start' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width ' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '1. IDEA'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyle },
                      _react2.default.createElement(_LightBulb2.default, null)
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-centre' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '2. DESIGN'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyle },
                      _react2.default.createElement(_SketchIcon2.default, null)
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-column stretch flex-justify-end' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column stretch-width' },
                  _react2.default.createElement(
                    'div',
                    { className: 'border-bottom padding-bottom-10 titles black' },
                    '3. BUILD'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'flex flex-row flex-justify-centre' },
                    _react2.default.createElement(
                      'div',
                      { className: 'width-60', style: animationStyle },
                      _react2.default.createElement(_ComputerIcon2.default, null)
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
  }]);

  return Welcome;
}(_react2.default.Component);

exports.default = Welcome;

/**
 * Created by mikecooper on 21/06/2017.
 */