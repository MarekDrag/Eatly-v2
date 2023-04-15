import { useTheme } from '@hooks/useTheme';

import { StyledSwitch, StyledLightModeIcon, StyledDarkModeIcon } from './ThemeSwitch.styles';

export const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <StyledSwitch
      onClick={toggleTheme}
      icon={<StyledLightModeIcon />}
      checkedIcon={<StyledDarkModeIcon />}
      disableRipple
    />
  );
};
