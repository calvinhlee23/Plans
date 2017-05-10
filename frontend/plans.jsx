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
  } else {
    store = configureStore();
  }
  ReactDOM.render(<RootComponent store = {store}/>, document.getElementById("PLANS"));
  window.store = store;
});
