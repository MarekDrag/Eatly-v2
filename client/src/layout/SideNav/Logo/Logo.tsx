import { Box, styled, Typography } from '@mui/material';

const LogoWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 240,
  height: 100,
});

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
}));

export const Logo = () => {
  return (
    <LogoWrapper>
      <StyledLogo variant="h2" fontWeight={600}>
        Eatly
      </StyledLogo>
    </LogoWrapper>
  );
};
