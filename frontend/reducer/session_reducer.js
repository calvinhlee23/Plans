import SessionConstants from '../action/session_actions.js';

const defaultState = {
  currentUser: null,
}

const SessionReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "hi":

      break;
    default:
      return state;
  }
}

export default SessionReducer;
