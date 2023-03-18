export type PalleteMode = 'light' | 'dark';

const lightMode = {
  text: {
    primary: 'rgba(0, 0, 0, 0.85)',
    secondary: 'rgba(0, 0, 0, 0.55)',
    disabled: 'rgba(0, 0, 0, 0.25)',
  },
  background: {
    default: '#F5F6F8',
    paper: '#fff',
  },
};

const darkMode = {
  text: {
    primary: 'rgba(255, 255, 255, 0.85)',
    secondary: 'rgba(255, 255, 255,  0.55)',
    disabled: 'rgba(255, 255, 255, 0.25)',
  },
  background: {
    default: '#202020',
    paper: '#2C2C2C',
  },
};

const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

const action = {
  active: 'rgba(0,0,0,0.3)',
  hover: 'rgba(0,0,0,0.15)',
  hoverOpacity: 0.9,
  selected: 'rgba(0,0,0,0.3)',
  selectedOpacity: 0.8,
  disabled: 'rgba(0,0,0,0.26)',
  disabledBackground: 'rgba(0,0,0,0.12)',
  disabledOpacity: 0.38,
  focus: 'rgba(0,0,0,0.3)',
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
};

export const getTheme = (mode: PalleteMode) => ({
  typography,
  palette: {
    primary: {
      light: '#46b299',
      main: '#189f80',
      dark: '#106f59',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fb986b',
      main: '#fa7f46',
      dark: '#af5831',
      contrastText: '#fff',
    },
    action,
    mode,
    ...(mode === 'light' ? lightMode : darkMode),
  },
});
