import {SessionConstants, receiveSession} from '../action/session_actions';
import OAuth_API from '../util/o_auth_api.js';
import Plans_Session_API from '../util/plans_session_api.js';

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var login_success = (session_data) => {dispatch(receiveSession(session_data));}
  var error;
  console.log(`Session Middleware: ${JSON.stringify(action)}`);

  switch (action.type) {
    case SessionConstants.GOOGLE_LOGIN:
      error = () => {console.log("error: gapi log-in");}
      OAuth_API.login(login_success, error);
      return next(action);

    case SessionConstants.PLANS_LOGIN:
      error = () => {console.log(("error: Plans log-in"));}
      Plans_Session_API.login(action.user, login_success, error)
      return next(action);

    case SessionConstants.LOG_OUT:
      if (getState().session.currentUser.gapi) {
        error = () => {console.log("error: gapi log-out");}
        OAuth_API.logout(error);
      } else {
        error = () => {console.log("error: Plans log-out");}
        Plans_Session_API.logout(error);
      }
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
