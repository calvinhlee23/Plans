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
    console.log(this.props.isLogginedIn);
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

  handleClick(str) {
    if (str === "logout") {
      return this.props.logout;
    } else {
      return () => {hashHistory.push(str)};
    }
  }

  render () {
    if (this.state.renderLogout) {
      return(
      <menu className = "menubar">
        <h1>{JSON.stringify(this.props)}</h1>
        <div onClick = {this.handleClick("logout")} className = "logout">Log Out</div>
        <Search/>
      </menu>);
    } else {
      return (
        <menu className = "menubar">
          <div onClick = {this.handleClick("auth")} className = "signup">Sign Up</div>
          <div onClick = {this.handleClick("auth")} className = "login">Log In</div>
          <Search/>
        </menu>);
    }
  }
}
