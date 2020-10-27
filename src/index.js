import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AffirmationListProvider } from './contexts/AffirmationListContext'
import { AffirmationProvider } from './contexts/AffirmationContext'
import App from './components/App/App'
import './index.css';
import { UserProvider } from './contexts/UserContext';
import { JournalListProvider } from './contexts/JournalListContext'
import { JournalProvider } from './contexts/JournalContext'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <JournalListProvider>
        <JournalProvider>
          <AffirmationListProvider>
            <AffirmationProvider>
              <App />
            </AffirmationProvider>
          </AffirmationListProvider>
        </JournalProvider>
      </JournalListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)