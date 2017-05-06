import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './app';
import {Test} from './app';
import SessionContainer from './session/session_container';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path = "/" component = {App}>
    <Route path = "auth" component = {SessionContainer}/>
    <Route path = "test" component = {Test}/>
    </Route>
  </Router>
);

export default AppRouter;
