import React from 'react';
import GoogAuthButton from './goog_auth_button';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className = "SessionForm">
        <GoogAuthButton login = {this.props.login.bind(this)}
                        logout = {this.props.logout.bind(this)}/>
        <div>Sign In Section</div>
        <div>Sign Up Section</div>
      </div>
    )
  }
}

export default SessionForm;
