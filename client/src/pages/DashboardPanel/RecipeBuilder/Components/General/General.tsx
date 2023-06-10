import { MealSelect } from '@components/DataFilters/Selects';
import { Box, TextField } from '@mui/material';

import { ImagePicker } from './ImagePicker';

export const General = () => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="2fr 1fr" columnGap="10px">
        <TextField variant="outlined" label="Name" fullWidth type="text" />
        <TextField variant="outlined" sx={{ gridColumn: '1fr' }} fullWidth label="Time" type="number" />
      </Box>
      <Box display="grid" gridTemplateColumns="2fr 1fr" columnGap="10px">
        <MealSelect />
        <TextField variant="outlined" fullWidth label="Calories" />
      </Box>
      <TextField multiline minRows={5} variant="outlined" fullWidth label="Description" />
      <ImagePicker />
    </>
  );
};
