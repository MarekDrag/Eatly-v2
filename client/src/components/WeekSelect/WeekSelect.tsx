import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { BoxProps } from '@mui/material';

import { ArrowButton, StyledBox, Text } from './WeekSelect.styles';

type Props = BoxProps & {
  iconSize: 'small' | 'medium' | 'large';
};

export const WeekSelect = (props: Props) => {
  return (
    <StyledBox {...props}>
      <ArrowButton sx={{ marginRight: 4 }} disableRipple>
        <ArrowCircleLeft fontSize={props.iconSize} />
      </ArrowButton>
      <Text variant="h6" marginRight="10px" color="text.primary">
        12 March 2023 - 19 March 2023
      </Text>

      <ArrowButton sx={{ marginLeft: 4 }} disableRipple>
        <ArrowCircleRight fontSize={props.iconSize} />
      </ArrowButton>
    </StyledBox>
  );
};
