import React from 'react';
import {SessionConstants} from '../../action/session_actions';

export default class GoogAuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
      window.props = this.props;
      window.p = SessionConstants
  }
  handleClick () {
    this.props.login(SessionConstants.GOOGLE_LOGIN)
  }
  render() {
    return (
      <div onClick = {this.handleClick}>Google Log In</div>
    );
  }
}
