import { useContext } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { IconButton } from '@mui/material';
import { DrawerContext } from '@store/DrawerContext';

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
        <DrawerButton link="/dashboard/mealPlanner" icon={icons.mealPlanner}>
          {t('Meal planner')}
        </DrawerButton>
        <DrawerButton link="/dashboard/shoppingList" icon={icons.shoppingCart}>
          {t('Shopping list')}
        </DrawerButton>
        <DrawerButton link="/dashboard/recipes" icon={icons.shoppingList}>
          {t('Recipes')}
        </DrawerButton>
        <DrawerButton link="/dashboard/cookbook" icon={icons.book}>
          {t('Cookbook')}
        </DrawerButton>
        <Divider />
        <DrawerButton link="/dashboard/settings" icon={icons.settings}>
          {t('Settings')}
        </DrawerButton>
        <DrawerButton link="/dashboard/support" icon={icons.support}>
          {t('Support')}
        </DrawerButton>
        <DrawerButton link="/dashboard/faq" icon={icons.help}>
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
