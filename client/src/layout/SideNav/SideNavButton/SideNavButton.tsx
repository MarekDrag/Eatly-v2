import { useLocation, useNavigate } from 'react-router-dom';

import { ButtonProps, styled, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@ui/index';

type SideNavButtonProps = ButtonProps & {
  link: string;
  icon: JSX.Element;
};

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '90%',
  height: 50,
  paddingLeft: 30,
  borderRadius: 5,
  color: theme.palette.text.secondary,
  background: 'none',
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
  },
}));

export const SideNavButton = (props: SideNavButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentLocation = location.pathname === props.link;
  const backgroundOnTarget = theme.palette.mode === 'light' ? '#ccf0e3' : '#28433D';

  return (
    <StyledButton
      sx={{
        color: isCurrentLocation ? theme.palette.primary.main : '',
        background: isCurrentLocation ? backgroundOnTarget : '',
        '&:hover': {
          background: isCurrentLocation ? theme.palette.action.hover : '',
        },
      }}
      startIcon={props.icon}
      onClick={() => navigate(props.link)}
      {...props}
    >
      {isMobile ? null : props.children}
    </StyledButton>
  );
};
