import { useTranslation } from '@hooks/index';
import { Typography } from '@mui/material';

type Props = {
  steps: {
    content: string;
    order: number;
  }[];
};

export const RecipeSteps = ({ steps }: Props) => {
  const { t } = useTranslation();

  const sortedSteps = steps.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  });

  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {t('Recipe')}
      </Typography>
      {sortedSteps.map((step) => (
        <>
          <Typography variant="h6" width="100%" marginTop={2} color="text.primary">
            {t('Step')} {step.order}
          </Typography>
          <Typography variant="body1" width="100%" color="text.primary">
            {step.content}
          </Typography>
        </>
      ))}
    </>
  );
};
