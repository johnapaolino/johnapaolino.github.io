import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './components/NavLink';
import {Frame} from './components/Frame.jsx'
import { Link } from 'react-router';

export let App = React.createClass({
  getInitialState () {
    return {
      color: '#313538',
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px',
    }
  },
  updateColors (event) {
    let currentColor = event.target.attributes.getNamedItem('data-color').value;
    this.setState({
      color: currentColor
    })
  },
  returnColors () {
    this.setState({
      color: '#313538'
    })
  },
  handleResize: function(e) {
    this.setState({
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px'
    });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render() {
    let fullScreen = {
      width: this.state.screenWidth,
      height: this.state.screenHeight
    };
    return (
      <div id='hero-image' style={ fullScreen }>
        <div className='big-box'>
          <div className='header-spacer'></div>
          <div className='pull-right'>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="about" path='about' color="#FDC400"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="work" path='work' color="#E95973"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="code lab" path='repos' color="#4A90E2"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="contact" path='contact' color="#01BB8B"/></span>
          </div>
          <Frame color={ this.state.color }/>
        </div>
      </div>
    );
  }
});

let LinkWidget = React.createClass({
  render(){
    let path = "/" + this.props.path;
    let bracketStyle = {
      color: this.props.color,
      padding: '0 10px'
    };
    return(
      <span data-color={ this.props.color } className='hover'>
        <span style={ bracketStyle } data-color={ this.props.color }>[</span>
        <NavLink to={ path } activeClassName='active' data-color={ this.props.color } style={{ color: '#000', textDecoration: 'none' }}>{ this.props.name }</NavLink>
        <span style={ bracketStyle } data-color={ this.props.color }>]</span>
      </span>
    );
  }
});
