import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootComponent from './component/root_component';


document.addEventListener("DOMContentLoaded", () => {
  var store;
  var preloadedState = {};
  if (window.pjplcu) {
    preloadedState = {session: {currentUser: window.pjplcu}};
    store = configureStore(preloadedState);
    ReactDOM.render(<RootComponent store = {store}/>, document.getElementById("PLANS"));
  } else {
    setTimeout(() => {
      var GAuth = gapi.auth2.getAuthInstance();
      if (GAuth.isSignedIn.get()) {
        preloadedState = {session: {currentUser: {name: GAuth.currentUser.Ab.w3.ofa, is_goog_acc: true}}};
      }
      store = configureStore(preloadedState);
      // Plans_Session_API.login(parseGoogUserForPlans())
      ReactDOM.render(<RootComponent store = {store}/>, document.getElementById("PLANS"));
    }, 1000);
  }
  window.store = store;
});
