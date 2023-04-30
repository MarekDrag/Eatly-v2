import { useState } from 'react';

import { useTheme } from '@hooks/useTheme';
import { Tooltip } from '@mui/material';

import { StyledSwitch, StyledLightModeIcon, StyledDarkModeIcon } from './ThemeSwitch.styles';

export const ThemeSwitch = () => {
  const [open, setOpen] = useState(true);
  const { toggleTheme, mode } = useTheme();
  const date = new Date().getHours();
  const isEvening = date > 21 || date < 6;

  return (
    <Tooltip
      open={open && isEvening && mode === 'light'}
      onBlur={() => setOpen(false)}
      onClose={() => setOpen(false)}
      title="It's a bit late, we'd like to take care of your eyesight, so you can turn on dark-mode here."
      arrow
    >
      <StyledSwitch
        onClick={toggleTheme}
        checked={mode === 'dark'}
        icon={<StyledLightModeIcon />}
        checkedIcon={<StyledDarkModeIcon />}
        disableRipple
      />
    </Tooltip>
  );
};
