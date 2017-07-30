'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SketchIcon = require('./SketchIcon.css');

var _SketchIcon2 = _interopRequireDefault(_SketchIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchIcon = function SketchIcon() {
  return _react2.default.createElement(
    'div',
    { className: 'SketchIcon' },
    _react2.default.createElement(
      'svg',
      { className: 'svg', height: '100%', width: '100%', viewBox: '0 0 150 136', version: '1.1' },
      _react2.default.createElement(
        'g',
        { className: 'path', id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { id: 'Sketch-Logo', transform: 'translate(-181.000000, -183.000000)', strokeWidth: '1.5', stroke: '#FFAE00' },
          _react2.default.createElement(
            'g',
            { id: 'Group-2', transform: 'translate(182.000000, 184.000000)' },
            _react2.default.createElement(
              'g',
              { id: 'Group' },
              _react2.default.createElement('polyline', { id: 'Path-3', points: '74 134 0 47.9642058 32.0566802 4.4966443 74 0' }),
              _react2.default.createElement('polyline', { id: 'Path-2', points: '0 47.9642058 30.708502 47.2147651 32.0566802 4.4966443' }),
              _react2.default.createElement('path', { d: 'M30.708502,47.2147651 L74,133.250559', id: 'Path-4' }),
              _react2.default.createElement('path', { d: 'M30.708502,47.2147651 L73.8502024,0', id: 'Path-5' }),
              _react2.default.createElement('path', { id: 'Path-6' }),
              _react2.default.createElement('path', { d: 'M30.8582996,47.2147651 L74,47.2147651', id: 'Path-7' })
            ),
            _react2.default.createElement(
              'g',
              { id: 'Group-Copy', transform: 'translate(110.850202, 67.000000) scale(-1, 1) translate(-110.850202, -67.000000) translate(73.700405, 0.000000)' },
              _react2.default.createElement('polyline', { id: 'Path-3', points: '74 134 0 47.9642058 32.0566802 4.4966443 74.2995951 0' }),
              _react2.default.createElement('polyline', { id: 'Path-2', points: '0 47.9642058 30.708502 47.2147651 32.0566802 4.4966443' }),
              _react2.default.createElement('path', { d: 'M30.708502,47.2147651 L74,132.800895', id: 'Path-4' }),
              _react2.default.createElement('path', { d: 'M30.708502,47.2147651 L73.8502024,0', id: 'Path-5' }),
              _react2.default.createElement('path', { d: 'M30.8582996,47.2147651 L74,47.2147651', id: 'Path-7' })
            )
          )
        )
      )
    )
  );
};

exports.default = SketchIcon;