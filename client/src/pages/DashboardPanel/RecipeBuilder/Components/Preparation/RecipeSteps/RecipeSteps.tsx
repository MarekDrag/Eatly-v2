import { useTranslation } from '@hooks/index';

import { StyledContent, StyledStep } from './RecipeSteps.styles';
import { Box, IconButton, Typography } from '@ui/index';

export type StepType = {
  content: string;
  order: number;
};

type Props = {
  steps?: StepType[];
  handleRemoveStep: (order: number) => void;
};

export const RecipeSteps = ({ steps, handleRemoveStep }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {t('Recipe')}
      </Typography>
      {!!steps &&
        steps.map((step) => (
          <StyledStep key={step.order}>
            <div>
              <Typography variant="h6" width="100%" color="text.primary">
                {t('Step')} {step.order}
              </Typography>
              <StyledContent variant="body1">{step.content}</StyledContent>
            </div>
            <Box height="100%" display="flex" alignContent="flex-start">
              <IconButton onClick={() => handleRemoveStep(step.order)} name="delete" />
            </Box>
          </StyledStep>
        ))}
    </>
  );
};
