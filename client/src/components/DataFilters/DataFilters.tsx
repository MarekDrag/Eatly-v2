import { styled } from '@mui/system';
import { Box } from '@ui/Box';

import { Search } from './Search';
import { MealSelect, TypeSelect } from './Selects';
import { IngredientsSelect } from './Selects/IngredientsSelect';

const DataFiltersWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  gap: 10,
  marginBottom: 10,
});

export const DataFilters = () => {
  return (
    <DataFiltersWrapper>
      <Search />
      <TypeSelect />
      <MealSelect />
      <IngredientsSelect />
    </DataFiltersWrapper>
  );
};
