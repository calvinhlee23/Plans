import {SessionConstants} from '../action/session_actions.js';
import merge from 'lodash/merge'

const defaultState = {
  currentUser: null,
}

const SessionReducer = (state = defaultState, action) => {
  var newState;
  console.log(`Session Reducer: ${JSON.stringify(action)}`);
  switch (action.type) {
    case SessionConstants.RECEIVE_SESSION:
      newState = {currentUser: action.user.Ab.w3}
      console.log(newState);
      return merge({}, state, newState);
    case SessionConstants.LOG_OUT:
      newState = {}
      return newState;
    default:
      return state;
  }
}

export default SessionReducer;
