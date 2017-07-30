'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageScrolling = pageScrolling;

var _types = require('./types');

function pageScrolling(scrollPosition, pageHeight) {

  var jObj = { 'scrollPosition': scrollPosition, 'pageHeight': pageHeight };

  return { type: _types.PAGE_SCROLLING, payload: jObj };
}