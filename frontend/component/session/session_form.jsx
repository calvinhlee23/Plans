import React from 'react';
import GoogAuthButton from './goog_auth_button';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location.path);
    if (this.props.location.path) {

    }
  }
  render() {
    return(
      <div className = "SessionForm">
        <GoogAuthButton login = {this.props.login}
                        logout = {this.props.logout}/>
        <div>Sign In Section</div>
        <div>Sign Up Section</div>
      </div>
    )
  }
}

export default SessionForm;
