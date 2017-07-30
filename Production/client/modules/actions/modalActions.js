'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openEventModal = openEventModal;
exports.closeEventModal = closeEventModal;

var _types = require('./types');

function openEventModal() {
  return { type: _types.OPEN_EVENT_MODAL };
}

function closeEventModal() {
  return { type: _types.CLOSE_EVENT_MODAL };
}