import React from 'react';
import ReactDOM from 'react-dom';
import AffirmationListPage from './AffirmationListPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AffirmationListPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});