import React from 'react';
import Search from './search';
import {hashHistory} from 'react-router';

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldBeHidden: false,
      renderLogout: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(this.props.isLogginedIn) {
      this.setState({renderLogout: true});
    } else {
      this.setState({renderLogout: false});
    }
  }
  componentDidMount() {
    if(this.props.isLogginedIn) {
      this.setState({renderLogout: true});
    } else {
      this.setState({renderLogout: false});
    }
  }

  handleClick(e) {
    e.preventDefault();
    hashHistory.push("/auth")
  }

  render () {
    if (this.renderLogout) {
      return(
      <menu className = "menubar">
        <div>Small Profile</div>
        <div onClick = {this.handleClick} className = "logout">Log Out</div>
        <Search/>
      </menu>);
    } else {
      return (
        <menu className = "menubar">
          <div onClick = {this.handleClick} className = "signup">Sign Up</div>
          <div onClick = {this.handleClick} className = "login">Log In</div>
          <Search/>
        </menu>);
    }
  }
}
