import { Typography } from '@mui/material';

import { RecipeDetailsBox } from '../RecipeDetails.styles';

type Props = {
  steps: {
    content: string;
    order: number;
  }[];
};

export const RecipeSteps = ({ steps }: Props) => {
  const sortedSteps = steps.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  });

  return (
    <RecipeDetailsBox>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        Przepis
      </Typography>
      {sortedSteps.map((step) => (
        <>
          <Typography variant="h6" width="100%" marginTop={2} color="text.primary">
            Krok {step.order}
          </Typography>
          <Typography variant="body1" width="100%" color="text.primary">
            {step.content}
          </Typography>
        </>
      ))}
    </RecipeDetailsBox>
  );
};
