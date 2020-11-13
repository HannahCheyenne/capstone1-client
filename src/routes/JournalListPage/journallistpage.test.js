import React from 'react';
import ReactDOM from 'react-dom';
import JournalListPage from './JournalListPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <JournalListPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});