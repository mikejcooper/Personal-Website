'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _EventModalContainer = require('./EventModalContainer');

var _EventModalContainer2 = _interopRequireDefault(_EventModalContainer);

var _modalActions = require('actions/modalActions');

var _EventModal = require('./EventModal.css');

var _EventModal2 = _interopRequireDefault(_EventModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventModal = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    modalEvent: store.modal.eventOpen
  };
}), _dec(_class = function (_React$Component) {
  _inherits(EventModal, _React$Component);

  function EventModal() {
    _classCallCheck(this, EventModal);

    var _this = _possibleConstructorReturn(this, (EventModal.__proto__ || Object.getPrototypeOf(EventModal)).call(this));

    _this.state = { showModal: false };
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(EventModal, [{
    key: 'closeModal',
    value: function closeModal() {
      this.props.dispatch((0, _modalActions.closeEventModal)());
    }
  }, {
    key: 'render',
    value: function render() {
      this.state.showModal = this.props.modalEvent;
      return _react2.default.createElement(_EventModalContainer2.default, { showModal: this.state.showModal, closeModal: this.closeModal });
    }
  }]);

  return EventModal;
}(_react2.default.Component)) || _class);
exports.default = EventModal;