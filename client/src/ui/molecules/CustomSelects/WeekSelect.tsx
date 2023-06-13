import { styled, BoxProps, Box } from '@mui/material';
import { Button, Typography } from '@ui/index';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

type Props = BoxProps & {
  iconSize: 'small' | 'medium' | 'large';
};

export const ArrowButton = styled(Button)(({ theme }) => ({
  justifyContent: 'center',
  color: theme.palette.primary.main,
  background: 'none',
  '&:hover': {
    background: 'none',
  },
  '&:active': {
    background: 'none',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
  color: theme.palette.text.primary,
}));

export const WeekSelect = (props: Props) => {
  return (
    <Box display="flex" alignContent="center" {...props}>
      <ArrowButton sx={{ marginRight: 4 }} disableRipple>
        <ArrowCircleLeft fontSize={props.iconSize} />
      </ArrowButton>
      <Text variant="h6">12 March 2023 - 19 March 2023</Text>
      <ArrowButton sx={{ marginLeft: 4 }} disableRipple>
        <ArrowCircleRight fontSize={props.iconSize} />
      </ArrowButton>
    </Box>
  );
};
