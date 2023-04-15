import { StarOutline } from '@mui/icons-material';
import { Rating as MuiRating, styled, Typography } from '@mui/material';
import { Box } from '@ui/index';

const RatingWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: 20,
});

const StyledRating = styled(MuiRating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.secondary.light,
  },
  border: 'red',
  borderColor: 'red',
}));

type Props = {
  ratingValue: number;
  reviewsNumber: number;
};

const EmptyIcon = styled(StarOutline)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

export const Rating = ({ ratingValue, reviewsNumber }: Props) => {
  return (
    <RatingWrapper color="text.secondary">
      <Box>
        <StyledRating readOnly value={ratingValue} precision={0.5} size="medium" emptyIcon={<EmptyIcon />} />
        <Typography variant="body1" marginLeft={1}>
          ({reviewsNumber})
        </Typography>
      </Box>
    </RatingWrapper>
  );
};
