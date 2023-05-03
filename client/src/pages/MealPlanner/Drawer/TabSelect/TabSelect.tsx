import { useState } from 'react';

import { Box } from '@mui/material';

import { Recipe } from './Recipe';
import { MealsContainer, StyledTab, StyledTabs } from './TabSelect.styles';

type TabPanelProps = {
  index: number;
  value: number;
};

const arr = new Array(20).fill('');

const TabPanel = ({ value, index, ...other }: TabPanelProps) => {
  return (
    <>
      {value === index && (
        <MealsContainer role="tabpanel" hidden={value !== index} {...other}>
          {arr.map((a) => (
            <Recipe />
          ))}
        </MealsContainer>
      )}
    </>
  );
};

export const TabSelect = () => {
  const [value, setValue] = useState(1);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} textColor="inherit">
          <StyledTab disableRipple value={0} label="Wszystkie" />
          <StyledTab disableRipple value={1} label="Moje" />
          <StyledTab disableRipple value={2} label="Polubione" />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
    </Box>
  );
};
