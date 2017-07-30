'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Eduction = require('./Eduction.css');

var _Eduction2 = _interopRequireDefault(_Eduction);

var _me = require('imgs/me.png');

var _me2 = _interopRequireDefault(_me);

var _uni = require('imgs/uni.png');

var _uni2 = _interopRequireDefault(_uni);

var _school = require('imgs/school.png');

var _school2 = _interopRequireDefault(_school);

var _Imperial = require('imgs/Imperial.png');

var _Imperial2 = _interopRequireDefault(_Imperial);

var _EE = require('imgs/EE.png');

var _EE2 = _interopRequireDefault(_EE);

var _tapbooks = require('imgs/tapbooks.png');

var _tapbooks2 = _interopRequireDefault(_tapbooks);

var _EduExpContainer = require('./Containers/EduExpContainer');

var _EduExpContainer2 = _interopRequireDefault(_EduExpContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Eduction = function (_React$Component) {
  _inherits(Eduction, _React$Component);

  function Eduction() {
    _classCallCheck(this, Eduction);

    return _possibleConstructorReturn(this, (Eduction.__proto__ || Object.getPrototypeOf(Eduction)).call(this));
  }

  _createClass(Eduction, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'About flex flex-column flex-space-around flex-align-items-centre stretch' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'box flex flex-align-items-start flex-column' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'stretch-width' },
                _react2.default.createElement(
                  'div',
                  { className: 'title titles' },
                  'Education'
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _uni2.default,
          title: 'University of Bristol',
          subTitle: 'Computer Science, MEng (1st)',
          date: '(current) 2014 - 2018',
          location: 'Bristol, UK',
          skills: ["Machine Learning", "Cryptography", "Algorithms", "OpenMP", "OpenCL"],
          description: _react2.default.createElement(
            'div',
            null,
            'Relevant modules:',
            _react2.default.createElement(
              'ul',
              { type: 'circle' },
              _react2.default.createElement(
                'li',
                null,
                'Data Structures & Algorithms'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Machine Learning'
              ),
              _react2.default.createElement(
                'li',
                null,
                'High Performance Computing'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Computer Graphics'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Computer Architecture'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Cryptography'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Applied Security'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Web Technologies'
              )
            )
          )
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _school2.default,
          title: 'Nailsea Six Form',
          subTitle: this.props.width > 750 ? _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start l-spacing flex-align-items-centre' },
            'A Levels (A*, A, B, C) \xA0',
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column', style: { fontSize: '10px' } },
              '- Maths, Biology, Further Maths, Chemistry'
            )
          ) : "A Levels (A*, A, B, C)",
          date: '2011 - 2013',
          location: 'Nailsea, UK'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _school2.default,
          title: 'Nailsea School',
          subTitle: 'GCSEs (A*, 4As, 3Bs)',
          date: '2007 - 2011',
          location: 'Nailsea, UK'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'box flex flex-align-items-start flex-column' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex-align-items-start flex-row stretch-width' },
            _react2.default.createElement('div', { className: 'flex flex-align-items-start flex-justify-centre width-100px' }),
            _react2.default.createElement(
              'div',
              { className: 'flex flex-column stretch-width' },
              _react2.default.createElement(
                'div',
                { className: 'stretch-width' },
                _react2.default.createElement(
                  'div',
                  { className: 'title titles' },
                  'Work Experience'
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _tapbooks2.default,
          title: 'Quinn Blackwell Media',
          subTitle: 'Technical Director',
          date: '2017 - Current',
          location: 'Bristol, UK',
          skills: ["Swift", "Python", "Agile", "TDD", "Application Architecture"],
          description: 'Leading a small team of developers, with the objective to create a new audio and reading book platform on iOS. The company is in the process of obtaining seed funding and we are currently preparing to pitch to investors.'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _uni2.default,
          title: 'University of Bristol',
          subTitle: 'Mobile Applications Developer',
          date: '2015 - 2016 ',
          location: 'Bristol, UK',
          skills: ["HTML", "CSS", "JavaScript"],
          description: 'Created a cross-platform mobile web application for new students to plan and organise social activities. The app was launched on both iOS and Android in 2015 and used by over a thousand students in the first two weeks.'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _Imperial2.default,
          title: 'Imperial Tobacco',
          subTitle: 'Marketing Internship',
          date: 'July, 2015',
          location: 'New York, USA',
          skills: ["Design", "Creativity"],
          description: 'Undertook market research, worked on marketing and contributed to an advertising campaign as part of a potential new brand launch in the United States. This experience, as part of an acquisition of another company, greatly developed my inter-personal and research skills.'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_EduExpContainer2.default, {
          width: this.props.width,
          thumbnail: _EE2.default,
          title: 'Everything Everywhere',
          subTitle: 'Technology & Sales Internship',
          date: 'August, 2014 ',
          location: 'Avon, UK',
          skills: ["Cooperate", "Client-Facing", "Negotiation"],
          description: 'I spent time visiting SMEs as part of a Sales team, approaching both current and new EE corporate customers. The role required liaising with clients in a professional and persuasive manner. I also worked on beta tested new phones, reviewing the functionality, usability and any basic security flaws. At the end of the internship I presented my research on the future of mobile devices and carrier services to corporate managers.'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Eduction;
}(_react2.default.Component);

exports.default = Eduction;