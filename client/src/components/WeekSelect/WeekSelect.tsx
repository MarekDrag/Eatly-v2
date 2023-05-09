import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { BoxProps } from '@mui/material';

import { ArrowButton, BoldText, StyledBox, Text } from './WeekSelect.styles';

type Props = BoxProps & {
  iconSize: 'small' | 'medium' | 'large';
};

export const WeekSelect = (props: Props) => {
  return (
    <StyledBox {...props}>
      <ArrowButton sx={{ marginRight: 4 }}>
        <ArrowCircleLeft fontSize={props.iconSize} />
      </ArrowButton>
      <BoldText variant="h5">Tydzień:</BoldText>
      <Text variant="h5">8.09 - 14.09</Text>
      <ArrowButton sx={{ marginLeft: 4 }}>
        <ArrowCircleRight fontSize={props.iconSize} />
      </ArrowButton>
    </StyledBox>
  );
};
