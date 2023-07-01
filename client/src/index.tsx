import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@contexts/AuthContext';
import { DrawerContextProvider } from '@contexts/DrawerContext';
import { LanguageProvider } from '@contexts/LanguageContext';
import { ThemeProvider } from '@contexts/ThemeContext';
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
        <LanguageProvider>
          <ThemeProvider>
            <DrawerContextProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </DrawerContextProvider>
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
    <Notifications />
  </React.StrictMode>,
);
