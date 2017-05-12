import {EventConstants, receiveMyEvents} from '../action/event_actions';
import {Calendar_API} from '../util/calendar_api';
import Events_API from '../util/events_api';

const CUEventMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  console.log(`CUEventMiddleware: ${action}`);
  switch (action.type) {
    case EventConstants.FETCH_CU_COMING_EVENTS:
      success = (events) => {dispatch(receiveCUEvents(events));}
      error = () => {console.log("something went wrong while fetching currentUser events");};
      Events_API.fetchCUComingEvents(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CUEventMiddleware;
