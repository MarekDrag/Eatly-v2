import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

import { ArrowButton, BoldText, StyledBox, Text } from './WeekSelect.styles';

export const WeekSelect = () => {
  return (
    <StyledBox marginLeft={1}>
      <ArrowButton sx={{ marginRight: 4 }}>
        <ArrowCircleLeft fontSize="large" />
      </ArrowButton>
      <BoldText variant="h5">Tydzień:</BoldText>
      <Text variant="h5">8.09 - 14.09</Text>
      <ArrowButton sx={{ marginLeft: 4 }}>
        <ArrowCircleRight fontSize="large" />
      </ArrowButton>
    </StyledBox>
  );
};
