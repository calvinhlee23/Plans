import React from 'react';
import AppRouter from './router';
import {Provider} from 'react-redux';
import Menu from './menu.jsx'


const Root = ({store}) => (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
);

export default Root;
