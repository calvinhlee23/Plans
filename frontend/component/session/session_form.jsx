import React from 'react';
import GoogAuthButton from './goog_auth_button';
import {hashHistory} from 'react-router';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isLogginedIn) {
      hashHistory.push("/");
    }
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.isLogginedIn) {
      hashHistory.push("/");
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
