import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@config/theme/ThemeProvider';
import { AppRoutes } from '@routes/AppRoutes';
import { DrawerContextProvider } from '@contexts/DrawerContext';
import { Notifications } from '@ui/atoms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './config/translations/i18n';
import './globalStyles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DrawerContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DrawerContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
    <Notifications />
  </React.StrictMode>,
);
