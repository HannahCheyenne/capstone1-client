import React from 'react';
import ReactDOM from 'react-dom';
import AddAffirmationPage from './AddAffirmationPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AddAffirmationPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});