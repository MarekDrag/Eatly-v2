import { styled } from '@mui/material';
import { Box } from '@ui/index';

import { ThemeSwitch } from './ThemeSwitch/ThemeSwitch';
import { UserDropdown } from './UserDropdown/UserDropdown';

export const Wrapper = styled(Box)({
  width: '100%',
  height: 80,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const Nav = () => {
  return (
    <Wrapper>
      <ThemeSwitch />
      <UserDropdown />
    </Wrapper>
  );
};
