import React from 'react';
import ReactDOM from 'react-dom';
import Login from './LoginPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <Login />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});