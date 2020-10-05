import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AffirmationListProvider } from './contexts/AffirmationListContext'
import { AffirmationProvider } from './contexts/AffirmationContext'
import App from './components/App/App'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <AffirmationListProvider>
        <AffirmationProvider>
          <App />
        </AffirmationProvider>
      </AffirmationListProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )