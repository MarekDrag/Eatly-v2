import { useState } from 'react';

import { icons } from '@config/icons';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { StyledAccordion, Title } from './FAQ.styles';
import { questions } from './questions';

export const FAQ = () => {
  const [expanded, setExpanded] = useState('');

  const handleExpand = (label: string) => {
    const labelParsed = label === expanded ? '' : label;
    setExpanded(labelParsed);
  };

  return (
    <>
      <Title>Frequently Asked Questions</Title>
      {questions.map((question) => (
        <StyledAccordion
          expanded={expanded === question.label}
          onChange={() => handleExpand(question.label)}
          sx={{ borderRadius: expanded === question.label ? '5px' : 0, width: '70%' }}
        >
          <AccordionSummary expandIcon={icons.expandMore}>
            <Typography fontWeight={500}>{question.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{question.answer}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </>
  );
};
