import { useState } from 'react';

import { Box, Typography, Tabs, Tab, styled } from '@mui/material';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <>
      {value === index && (
        <MealsContainer role="tabpanel" hidden={value !== index} {...other}>
          <MealBox>
            <Text>Pizza peperoni</Text>
            <Text>Kal: 340</Text>
            <Image
              src="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
              alt="Pizza peperoni"
            />
          </MealBox>
          <MealBox>
            <Text>Pizza peperoni</Text>
            <Text>Kal: 340</Text>
            <Image
              src="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
              alt="Pizza peperoni"
            />
          </MealBox>
        </MealsContainer>
      )}
    </>
  );
};

export const StyledTab = styled(Tab)({
  width: '30%',
});

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.primary.main,
  },
}));

export const MealsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: 10,
});

export const MealBox = styled(Box)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '30%',
  padding: 10,
  rowGap: 10,
  boxShadow: theme.shadows[2],
  background: theme.palette.background.paper,
  borderRadius: 5,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));
export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
}));

export const TabSelect = () => {
  const [value, setValue] = useState(1);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} textColor="inherit">
          <StyledTab label="Wszystkie" value={0} />
          <StyledTab label="Moje" value={1} />
          <StyledTab label="Polubione" value={2} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};
