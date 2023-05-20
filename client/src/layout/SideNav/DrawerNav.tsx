import { useContext } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { DrawerContext } from '@layout/DrawerContext';
import { IconButton } from '@mui/material';

import { DrawerButton } from './DrawerButton';
import { BackIconBox, ContentWrapper, Divider, StyledDrawer } from './DrawerNav.styles';
import { Logo } from './Logo';

const DESKTOP_DRAWER_WIDTH = 250;
const MOBILE_DRAWER_WIDTH = 80;

export const DrawerBody = () => {
  const { t } = useTranslation();
  const { drawerOpen, handleChange } = useContext(DrawerContext);

  const handleDrawer = () => {
    handleChange(!drawerOpen);
  };

  return (
    <>
      <BackIconBox>
        <IconButton onClick={handleDrawer}>{drawerOpen ? icons.arrowLeft : icons.arrowRight}</IconButton>
      </BackIconBox>
      <Logo />
      <Divider />
      <ContentWrapper>
        <DrawerButton link="/dashboard" icon={icons.home}>
          {t('Dashboard')}
        </DrawerButton>
        <DrawerButton link="/mealPlanner" icon={icons.mealPlanner}>
          {t('Meal planner')}
        </DrawerButton>
        <DrawerButton link="/shoppingList" icon={icons.shoppingCart}>
          {t('Shopping list')}
        </DrawerButton>
        <DrawerButton link="/recipes" icon={icons.shoppingList}>
          {t('Recipes')}
        </DrawerButton>
        <DrawerButton link="/cookBook" icon={icons.book}>
          {t('CookBook')}
        </DrawerButton>
        <Divider />
        <DrawerButton link="/settings" icon={icons.settings}>
          {t('Settings')}
        </DrawerButton>
        <DrawerButton link="/support" icon={icons.support}>
          {t('Support')}
        </DrawerButton>
        <DrawerButton link="/faq" icon={icons.help}>
          {t('FAQ')}
        </DrawerButton>
      </ContentWrapper>
    </>
  );
};

export const DrawerNav = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <>
      <StyledDrawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': { width: drawerOpen ? DESKTOP_DRAWER_WIDTH : MOBILE_DRAWER_WIDTH },
        }}
      >
        <DrawerBody />
      </StyledDrawer>
    </>
  );
};
