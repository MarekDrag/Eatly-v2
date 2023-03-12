import { createContext, FC, ReactNode, useMemo, useState } from 'react';

import { ThemeContext as StyledThemeContext } from 'styled-components';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { getTheme, PalleteMode } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const DEFAULT_MODE = 'light';

export const ThemeContext = createContext({});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PalleteMode>(DEFAULT_MODE);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeContext.Provider value={theme}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
