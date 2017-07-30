import React from 'react';
import { connect } from "react-redux";
import { pageScrolling } from 'actions/navBarActions'
import css from './NavigationBar.css';

import Scroll from 'react-scroll' ;

var Link       = Scroll.Link;
var scrollSpy  = Scroll.scrollSpy;


// Maps dispatcher to props
@connect()
class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      ScrollState: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    scrollSpy.update();

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScrollAction(event){
    var scrollPosition = event.target.body.scrollTop;
    var pageHeight = window.innerHeight - 50;
    this.props.dispatch(pageScrolling(scrollPosition, pageHeight));
  }

  handleScroll(event) {
    this.handleScrollAction(event);
  }

  render() {
    var navOpacity = {
      opacity: this.state.ScrollState,
    };

    return (
        <nav class="navbar flex flex-align-items-centre flex-space-between navbar-fixed-top" style = {navOpacity} onScroll={this.handleScroll.bind(this)}>
          <div class="logo-container flex flex-align-items-centre flex-justify-start stretch-height">
          </div>

          <div class="centre flex flex-align-items-centre stretch-height titles name no-line ">
            <Link activeClass="black-force" class="no-line text-color" to="Home" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
              <div class="cursor name-nav"> MIKE COOPER</div>
            </Link>
          </div>

          <div class="right-nav-container flex flex-align-items-centre flex-justify-end stretch-height">

            <div class="right-nav flex flex-row flex-align-items-centre flex-justify-end stretch-height">

              <Link activeClass="black-force" class="flex flex-column flex-justify-centre no-line margin-left-10 text-color" to="About" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                <div class="cursor"> About </div>
              </Link>

              <Link activeClass="black-force" class="flex flex-column flex-justify-centre no-line margin-left-10 text-color" to="Projects" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                <div class="cursor"> Projects </div>
              </Link>

              <Link activeClass="black-force" class="flex flex-column flex-justify-centre no-line margin-left-10 text-color" to="Contact" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                <div class="cursor"> Contact </div>
              </Link>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavigationBar

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