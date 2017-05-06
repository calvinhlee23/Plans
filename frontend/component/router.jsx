import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import { createHashHistory } from 'history';
import App from './app';
import {Test} from './app';
const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path = "/" component = {App}>
    <Route path = "test" component = {Test}/>
    </Route>
  </Router>
);

export default AppRouter;
