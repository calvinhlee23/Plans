import {EventConstants} from '../action/event_actions';

import merge from 'lodash/merge';

const defaultState = {
  cuEv: {}
};

const CUEventReducer = (state = defaultState, action) => {
  console.log(`CUEventReducer: ${action}`);
  var newState;
  
  switch (action.type) {
    case EventConstants.RECEIVE_CU_EVENTS:
      newState = action.events;
      return merge({}, state, newState);
    default:
      return state;s
  }
};

export default CUEventReducer;
