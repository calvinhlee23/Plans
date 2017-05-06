import React from 'react';
import Search from './search';
import {hashHistory} from 'react-router';
export default class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, str) {
    e.preventDefault();
    hashHistory.push("/auth")
  }

  render () {
    if (true) {
      return(<menu className = "menubar">
        <div onClick = {this.handleClick} className = "signup">Sign Up</div>
        <div onClick = {this.handleClick} className = "Login">Log In</div>
        <Search/>
      </menu>);
    } else {
      return (
        <menu className = "menubar">
          <div onClick = {this.handleClick} value = "signup">Sign Up</div>
          <div onClick = {this.handleClick} value = "login">Log In</div>
          <Search/>
        </menu>);
    }
  }
}
