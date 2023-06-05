import { WbSunny, ModeNight } from '@mui/icons-material';
import { styled, Switch } from '@mui/material';

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 32,
  marginRight: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#414141',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: '#d6d6d6',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const StyledLightModeIcon = styled(WbSunny)({
  width: 20,
  height: 20,
  padding: 3,
  borderRadius: 50,
  color: '#d6d6d6',
  backgroundColor: '#F5F6F8',
});

export const StyledDarkModeIcon = styled(ModeNight)({
  width: 20,
  height: 20,
  padding: 3,
  borderRadius: 50,
  backgroundColor: '#202020',
  color: '#fff',
});
