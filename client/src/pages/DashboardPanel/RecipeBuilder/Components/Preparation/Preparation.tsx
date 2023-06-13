import { useState } from 'react';

import { icons } from '@config/icons';
import { Button, TextField } from '@ui/index';

import { RecipeSteps, StepType } from './RecipeSteps';

export const Preparation = () => {
  const [steps, setSteps] = useState<StepType[]>([]);
  const [order, setOrder] = useState(1);
  const [content, setContent] = useState('');

  const handleAddStep = () => {
    setSteps((prev) => [...prev, { order, content }]);
    setOrder((prev) => prev + 1);
    setContent('');
    console.log(steps);
  };

  const handleRemoveStep = (order: number) => {
    const filteredSteps = steps.filter((step) => step.order !== order);
    const reorderedSteps = filteredSteps.map(({ content }, index) => ({ order: index + 1, content }));
    setOrder((prev) => prev - 1);
    setSteps(reorderedSteps);
  };

  return (
    <>
      <TextField
        multiline
        minRows={5}
        variant="outlined"
        fullWidth
        label="Description"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <Button endIcon={icons.plus} sx={{ display: 'flex', justifyContent: 'center' }} onClick={handleAddStep}>
        Add step
      </Button>
      <RecipeSteps steps={steps} handleRemoveStep={handleRemoveStep} />
    </>
  );
};
