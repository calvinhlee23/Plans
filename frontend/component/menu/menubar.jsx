import React from 'react';
import Search from './search';
import {hashHistory} from 'react-router';

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderAsLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(this.props.isLogginedIn) {
      this.setState({renderAsLoggedIn: true});
    } else {
      this.setState({renderAsLoggedIn: false});
    }
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.isLogginedIn) {
      this.setState({renderAsLoggedIn: true});
    } else {
      this.setState({renderAsLoggedIn: false});
    }
  }

  handleClick(e) {
    e.persist();
    var value = e.target.value;
    if (value === "logout") {
      this.props.logout();
    } else {
      hashHistory.push(value);
    }
  }

  render () {
    if (this.state.renderAsLoggedIn) {
      return(
      <menu className = "menubar">
        <button onClick = {this.handleClick} value = "/" className = "logo">logo</button> <br/>
        <Search/>
        <button onClick = {this.handleClick} value = "createEvent" className = "create-event-button">Create Event</button><br/>
        <h3>{JSON.stringify(this.props.currentUser.user_name) + JSON.stringify(this.props.currentUser.email)}</h3>
        <button onClick = {this.handleClick} value = "logout" className = "auth-button">Log Out</button>
      </menu>);
    } else {
      return (
        <menu className = "menubar">
          <a onClick = {this.handleClick} className = "logo" value = "/">Logo</a><br/>
          <button onClick = {this.handleClick} value = "auth" className = "auth-button">Connect</button><br/>
          <Search/>
        </menu>);
    }
  }
}
