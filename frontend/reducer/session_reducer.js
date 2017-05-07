import SessionConstants from '../action/session_actions.js';

const defaultState = {
  currentUser: null,
}

const SessionReducer = (state = defaultState, action) => {
  console.log(`Session Reducer: ${JSON.stringify(action)}`);
  switch (action.type) {
    case "hi":

    default:
      return state;
  }
}

export default SessionReducer;
