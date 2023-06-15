import { useContext } from 'react';

import { styled } from '@mui/material';
import { DrawerContext } from '@contexts/DrawerContext';
import { Box, Typography } from '@ui/index';

const LogoWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const Logo = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <LogoWrapper height={drawerOpen ? 80 : 40} marginTop={drawerOpen ? 0 : '40px'}>
      <StyledLogo variant="h2" fontWeight={600} fontSize={drawerOpen ? 60 : 20}>
        Eatly
      </StyledLogo>
    </LogoWrapper>
  );
};
