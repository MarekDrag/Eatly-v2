import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@config/theme/ThemeProvider';
import { DrawerContextProvider } from '@layout/DrawerContext';
import { AppRoutes } from '@routes/AppRoutes';

import './config/translations/i18n';
import './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <DrawerContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DrawerContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
