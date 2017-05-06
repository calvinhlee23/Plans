import {combineReducers} from 'redux';
import UserReducer from './user_reducer';
import SessionReducer from './session_reducer';
export default combineReducers({
  session: SessionReducer,
  user: UserReducer
});
