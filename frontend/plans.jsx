import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootComponent from './component/root_component';


document.addEventListener("DOMContentLoaded", () => {
  var store, preloadedState;
  setTimeout(() => {
    var GAuth = gapi.auth2.getAuthInstance();
    console.log(gapi);
    if (GAuth.isSignedIn) {
      preloadedState = {session: {currentUser: GAuth.currentUser.Ab.w3}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    ReactDOM.render(<RootComponent store = {store}/>, document.getElementById("PLANS"));
    window.store = store;

  }, 1000)
});
