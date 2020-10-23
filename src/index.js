import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AffirmationListProvider } from './contexts/AffirmationListContext'
import { AffirmationProvider } from './contexts/AffirmationContext'
import App from './components/App/App'
import './index.css';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <AffirmationListProvider>
        <AffirmationProvider>
          <App />
        </AffirmationProvider>
      </AffirmationListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)