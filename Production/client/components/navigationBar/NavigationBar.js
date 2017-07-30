'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _navBarActions = require('actions/navBarActions');

var _NavigationBar = require('./NavigationBar.css');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = _reactScroll2.default.Link;
var scrollSpy = _reactScroll2.default.scrollSpy;

// Maps dispatcher to props
var NavigationBar = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this));

    _this.state = {
      ScrollState: 1
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(NavigationBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      scrollSpy.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScrollAction',
    value: function handleScrollAction(event) {
      var scrollPosition = event.target.body.scrollTop;
      var pageHeight = window.innerHeight - 50;
      this.props.dispatch((0, _navBarActions.pageScrolling)(scrollPosition, pageHeight));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      this.handleScrollAction(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var navOpacity = {
        opacity: this.state.ScrollState
      };

      return _react2.default.createElement(
        'nav',
        { className: 'navbar flex flex-align-items-centre flex-space-between navbar-fixed-top', style: navOpacity, onScroll: this.handleScroll.bind(this) },
        _react2.default.createElement('div', { className: 'logo-container flex flex-align-items-centre flex-justify-start stretch-height' }),
        _react2.default.createElement(
          'div',
          { className: 'centre flex flex-align-items-centre stretch-height titles name no-line ' },
          _react2.default.createElement(
            Link,
            { activeClass: 'black-force', className: 'no-line text-color', to: 'Home', spy: true, smooth: true, offset: -50, duration: 500, onSetActive: this.handleSetActive },
            _react2.default.createElement(
              'div',
              { className: 'cursor name-nav' },
              ' MIKE COOPER'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'right-nav-container flex flex-align-items-centre flex-justify-end stretch-height' },
          _react2.default.createElement(
            'div',
            { className: 'right-nav flex flex-row flex-align-items-centre flex-justify-end stretch-height' },
            _react2.default.createElement(
              Link,
              { activeClass: 'black-force', className: 'flex flex-column flex-justify-centre no-line margin-left-10 text-color', to: 'About', spy: true, smooth: true, offset: -50, duration: 500, onSetActive: this.handleSetActive },
              _react2.default.createElement(
                'div',
                { className: 'cursor' },
                ' About '
              )
            ),
            _react2.default.createElement(
              Link,
              { activeClass: 'black-force', className: 'flex flex-column flex-justify-centre no-line margin-left-10 text-color', to: 'Projects', spy: true, smooth: true, offset: -50, duration: 500, onSetActive: this.handleSetActive },
              _react2.default.createElement(
                'div',
                { className: 'cursor' },
                ' Projects '
              )
            ),
            _react2.default.createElement(
              Link,
              { activeClass: 'black-force', className: 'flex flex-column flex-justify-centre no-line margin-left-10 text-color', to: 'Contact', spy: true, smooth: true, offset: -50, duration: 500, onSetActive: this.handleSetActive },
              _react2.default.createElement(
                'div',
                { className: 'cursor' },
                ' Contact '
              )
            )
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react2.default.Component)) || _class);
exports.default = NavigationBar;

// <img class="navbar-header fixed my-button search-icon" onClick={this.handleSearchClick} src="http://localhost:2000/images/search-icon.png"/>
//  <Link class="navbar-header fixed my-button search-icon" onClick={this.toggleCollapse.bind(this)} to="/search"></Link>
//
// <div class="navbar-header fixed my-button search-icon" onClick={this.handleSearchClick} >

// <div class="search-bar-container">
//     <input type="text" ref="searchInput" class="form-control search-Bar my-search-input"  placeholder="Search" name="q"></input>
//     <button class="btn btn-default search-Btn" type="submit" onClick={this.onSubmit}><i class="glyphicon glyphicon-search" ></i></button>
// </div>

// <a class="navbar-brand inverted" href="/#"><img src={require("../../images/logo.png")} alt="Dispute Bills"></img></a>

// <img class="search-icon"  onClick={this.handleSearchClick} src={require("../../images/search-icon.png")}/>