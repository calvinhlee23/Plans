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

  componentWillReceiveProps(nextProp) {
    if (nextProp.isLogginedIn) {
      this.setState({renderLogout: true});
    } else {
      this.setState({renderLogout: false});
    }
  }

  handleClick(e) {
    e.persist();
    var value = e.target.value;
    if (value === "logout") {
      this.props.logout();
    } else if (value === "auth"){
      hashHistory.push(value);
    }
  }

  render () {
    if (this.state.renderLogout) {
      return(
      <menu className = "menubar">
        <h1>{JSON.stringify(this.props.currentUser.user_name) + JSON.stringify(this.props.currentUser.email)}</h1>
        <button onClick = {this.handleClick} value = "logout" className = "auth-button">Log Out</button><br/>
        <Search/>
      </menu>);
    } else {
      return (
        <menu className = "menubar">
          <button onClick = {this.handleClick} value = "auth" className = "auth-button">Connect</button><br/>
          <Search/>
        </menu>);
    }
  }
}
