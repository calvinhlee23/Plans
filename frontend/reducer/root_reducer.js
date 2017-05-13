import {combineReducers} from 'redux';
import UserReducer from './user_reducer';
import SessionReducer from './session_reducer';
import CUEventReducer from './cu_event_reducer';
export default combineReducers({
  session: SessionReducer,
  cuEvents: CUEventReducer,
});
