import { useState } from 'react';

import { Box } from '@mui/material';

import { Recipe } from './Recipe';
import { MealsContainer, StyledTab, StyledTabs } from './TabSelect.styles';

type TabPanelProps = {
  index: string;
  value: string;
};

const arr = new Array(20).fill('');

const TabPanel = ({ value, index, ...props }: TabPanelProps) => {
  return (
    <>
      {value === index && (
        <MealsContainer {...props}>
          {arr.map((a) => (
            <Recipe />
          ))}
        </MealsContainer>
      )}
    </>
  );
};

export const TabSelect = () => {
  const [value, setValue] = useState('All');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} textColor="inherit">
          <StyledTab value="All" label="All" />
          <StyledTab value="My" label="My" />
          <StyledTab value="Liked" label="Liked" />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index="All" />
      <TabPanel value={value} index="My" />
      <TabPanel value={value} index="Liked" />
    </Box>
  );
};
