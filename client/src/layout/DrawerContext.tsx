import { ReactNode, createContext, useEffect, useState } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

type Props = {
  children: ReactNode;
};

export const DrawerContext = createContext({ drawerOpen: true, handleChange: (_: boolean) => {} });

export const DrawerContextProvider = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [drawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    if (isMobile) {
      handleChange(false);
    } else {
      handleChange(true);
    }
  }, [isMobile]);

  const handleChange = (value: boolean) => {
    setDrawerOpen(value);
  };

  return <DrawerContext.Provider value={{ drawerOpen, handleChange }}>{props.children}</DrawerContext.Provider>;
};
