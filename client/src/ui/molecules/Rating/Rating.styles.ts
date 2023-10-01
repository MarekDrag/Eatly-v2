import { StarOutline } from '@mui/icons-material';
import { Rating as MuiRating, styled } from '@mui/material';
import { Box } from '@ui/index';

export const RatingWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const StyledRating = styled(MuiRating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.secondary.light,
  },
  border: 'red',
  borderColor: 'red',
}));

export const EmptyIcon = styled(StarOutline)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));
