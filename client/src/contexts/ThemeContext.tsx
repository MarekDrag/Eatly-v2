import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material';

import { getTheme, PalleteMode } from '../config/theme/theme';

type Props = {
  children: ReactNode;
};

export type ThemeContextProps = {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
  theme: ThemeOptions;
};

const DEFAULT_MODE = 'light';

export const ThemeContext = createContext<ThemeContextProps>({
  mode: DEFAULT_MODE,
  toggleTheme: () => {},
  theme: {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<PalleteMode>(DEFAULT_MODE);
  const { user } = useAuth();

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setMode(user.themeMode);
  }, [user.themeMode]);

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
