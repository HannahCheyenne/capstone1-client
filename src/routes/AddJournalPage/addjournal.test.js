import React from 'react';
import ReactDOM from 'react-dom';
import AddJournalPage from './AddJournalPage'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AddJournalPage />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});