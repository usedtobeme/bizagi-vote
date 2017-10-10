import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/login';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/(:filter)" component={Login} />
    </BrowserRouter>
  </Provider>
);

export default Root;