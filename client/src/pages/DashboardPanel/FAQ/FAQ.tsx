import { useState } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { StyledAccordion, Title, Wrapper } from './FAQ.styles';
import { questions } from './questions';

export const FAQ = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState('');

  const handleExpand = (label: string) => {
    const labelParsed = label === expanded ? '' : label;
    setExpanded(labelParsed);
  };

  return (
    <Wrapper>
      <Title>{t('Frequently Asked Questions')}</Title>
      {questions.map((question) => (
        <StyledAccordion
          expanded={expanded === question.label}
          onChange={() => handleExpand(question.label)}
          sx={{ borderRadius: expanded === question.label ? '5px' : 0 }}
        >
          <AccordionSummary expandIcon={icons.expandMore}>
            <Typography fontWeight={500}>{question.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{question.answer}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Wrapper>
  );
};