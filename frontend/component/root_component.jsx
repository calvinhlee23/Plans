import React from 'react';
import AppRouter from './router';
import {Provider} from 'react-redux';
import Menubar from './menu/menubar.jsx';

const Root = ({store}) => (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
);

export default Root;
