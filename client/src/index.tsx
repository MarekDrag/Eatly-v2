import React from 'react';

import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@config/theme/ThemeProvider';
import { Background } from '@ui/AppBackground/AppBackground';

import App from './App';
import './config/translations/i18n';
import './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
);
