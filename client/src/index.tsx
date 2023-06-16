import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@config/theme/ThemeProvider';
import { AuthProvider } from '@contexts/AuthContext';
import { DrawerContextProvider } from '@contexts/DrawerContext';
import { AppRoutes } from '@routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Notifications } from '@ui/atoms';

import './config/translations/i18n';
import './globalStyles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <DrawerContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </DrawerContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
    <Notifications />
  </React.StrictMode>,
);
