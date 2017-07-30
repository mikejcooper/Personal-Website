'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _modalReducer = require('./modalReducer');

var _modalReducer2 = _interopRequireDefault(_modalReducer);

var _navBarReducer = require('./navBarReducer');

var _navBarReducer2 = _interopRequireDefault(_navBarReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  modal: _modalReducer2.default,
  navBar: _navBarReducer2.default
});