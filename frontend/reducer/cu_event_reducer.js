import {EventConstants} from '../action/event_actions';

import merge from 'lodash/merge';


const CUEventReducer = (state = {}, action) => {
  console.log(`CUEventReducer: ${action}`);
  var newState;

  switch (action.type) {
    case EventConstants.RECEIVE_CU_EVENTS:
      newState = action.events;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default CUEventReducer;
