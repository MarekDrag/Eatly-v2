import { styled } from '@mui/system';
import { Box } from '@ui/atoms';
import { IngredientsSelect, MealSelect, Search, TypeSelect } from '@ui/molecules';

const DataFiltersWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
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
