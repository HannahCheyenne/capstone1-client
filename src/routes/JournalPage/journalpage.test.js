import React from 'react';
import ReactDOM from 'react-dom';
import JournalPage from './JournalPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <JournalPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});