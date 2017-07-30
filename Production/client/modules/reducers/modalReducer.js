'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _types = require('actions/types');

var initialState = {
  eventOpen: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _types.OPEN_EVENT_MODAL:
      state = _extends({}, state, { eventOpen: true });
      break;

    case _types.CLOSE_EVENT_MODAL:
      state = _extends({}, state, { eventOpen: false });
      break;
  }
  return state;
}