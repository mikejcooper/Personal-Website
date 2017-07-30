'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SkillContainer = require('./SkillContainer.css');

var _SkillContainer2 = _interopRequireDefault(_SkillContainer);

var _GithubIcon = require('svgs/GithubIcon');

var _GithubIcon2 = _interopRequireDefault(_GithubIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillsContainer = function (_React$Component) {
  _inherits(SkillsContainer, _React$Component);

  function SkillsContainer() {
    _classCallCheck(this, SkillsContainer);

    var _this = _possibleConstructorReturn(this, (SkillsContainer.__proto__ || Object.getPrototypeOf(SkillsContainer)).call(this));

    _this.handleToggle = _this.handleToggle.bind(_this);

    return _this;
  }

  _createClass(SkillsContainer, [{
    key: 'handleToggle',
    value: function handleToggle() {}
  }, {
    key: 'handleSkillsProps',
    value: function handleSkillsProps() {

      if (this.props.skills == null) {
        return [];
      }

      var skills = [];
      var style = { marginRight: '15px' };
      var classString = "SkillsContainer stretch-width flex";

      if (this.props.spread) {
        style = {};
        classString += " flex-space-between";
      }

      this.props.skills.forEach(function (skill) {
        skills.push(_react2.default.createElement(
          'div',
          { key: skills.length },
          _react2.default.createElement(
            'div',
            { style: style, className: 'skill' },
            skill
          )
        ));
      });

      return _react2.default.createElement(
        'div',
        { className: classString },
        skills
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var githubDiv = this.props.github ? _react2.default.createElement(
        'div',
        { className: 'flex flex-align-self-end flex-justify-end github' },
        _react2.default.createElement(
          'a',
          { className: '', id: 'github1', href: this.props.github },
          _react2.default.createElement(
            'div',
            { className: 'icon1 flex' },
            _react2.default.createElement(_GithubIcon2.default, null)
          )
        )
      ) : _react2.default.createElement('div', null);

      return _react2.default.createElement(
        'div',
        { style: this.props.style, className: 'SkillsContainerWrapper flex stretch-width flex-align-items-centre' },
        this.handleSkillsProps(),
        githubDiv
      );
    }
  }]);

  return SkillsContainer;
}(_react2.default.Component);

exports.default = SkillsContainer;