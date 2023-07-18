import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';
import { Paper, Box, Button } from '@ui/index';

import { General } from './Components/General';
import { Ingredients } from './Components/Ingredients';
import { Preparation } from './Components/Preparation';

const steps = ['General', 'Preparation ', 'Ingredients'] as const;

export const RecipeBuilder = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <General />;
      case 1:
        return <Preparation />;
      case 2:
        return <Ingredients />;
      default:
        return null;
    }
  };

  return (
    <Paper display="grid" gridTemplateColumns="1fr" minHeight="80vh" alignContent="flex-start" position="relative">
      {activeStep === steps.length - 1}
      <Box width="100%">
        <MuiStepper activeStep={activeStep}>
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </MuiStepper>
      </Box>
      <Box width="100%">
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep === steps.length - 1 ? (
            <>
              <Button onClick={() => navigate('/dashboard/recipes/:1')}>Preview</Button>
              <Button onClick={() => navigate('/dashboard/my-recipes')}>Finish</Button>
            </>
          ) : (
            <Button onClick={handleNext}> Next</Button>
          )}
        </Box>
      </Box>
      <Box width="50%" display="grid" gridTemplateColumns="1fr" gap="20px">
        {renderStep()}
      </Box>
    </Paper>
  );
};
