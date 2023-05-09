import { createContext, ReactNode, useMemo, useState } from 'react';

import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material';

import { getTheme, PalleteMode } from './theme';

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

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
