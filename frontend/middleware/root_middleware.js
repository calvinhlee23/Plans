import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CUEventMiddleware from './cu_event_middleware';

export default applyMiddleware(
  SessionMiddleware,
  CUEventMiddleware,
);
