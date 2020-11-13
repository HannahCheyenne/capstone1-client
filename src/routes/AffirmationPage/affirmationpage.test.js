import React from 'react';
import ReactDOM from 'react-dom';
import AffirmationPage from './AffirmationPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AffirmationPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});