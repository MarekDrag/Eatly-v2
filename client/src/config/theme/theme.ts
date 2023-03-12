export type PalleteMode = 'light' | 'dark';

const lightMode = {
  text: {
    title: 'rgba(0, 0, 0, 0.85)',
    primary: 'rgba(0, 0, 0, 0.65)',
    secondary: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.25)',
    placeholder: 'rgba(0, 0, 0, 0.25)',
    opposite: '#FFF',
    icon: '#8798AD',
  },
  background: {
    default: '#fff',
    paper: '#F5F6F8',
  },
};

const darkMode = {
  text: {
    title: 'rgba(255, 255, 255, 0.85)',
    primary: 'rgba(255, 255, 255,  0.65)',
    secondary: 'rgba(255, 255, 255, 0.45)',
    disabled: 'rgba(255, 255, 255, 0.25)',
    placeholder: 'rgba(255, 255, 255, 0.25)',
    opposite: '#000',
    icon: '#8798AD',
  },
  background: {
    default: '#0A1929',
    paper: '#001E3C',
  },
};

export const getTheme = (mode: PalleteMode) => ({
  primary: {
    light: '#55bda4',
    dark: '#108164',
    main: '#189f80',
    contrastText: '',
  },
  secondary: {
    light: '#ef6520',
    main: '#fa7f46',
    dark: '#fcb293',
    contrastText: '',
  },
  palette: {
    mode,
    ...(mode === 'light' ? lightMode : darkMode),
  },
});
