import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './app';
import {Test} from './app';
import SessionContainer from './session/session_container';
import EventFormContainer from './event_form/event_form_container';
const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path = "/" component = {App}>
    <Route path = "auth" component = {SessionContainer}/>
    <route path = "createEvent" component = {EventFormContainer}/>
    <Route path = "test" component = {Test}/>
    </Route>
  </Router>
);

export default AppRouter;
