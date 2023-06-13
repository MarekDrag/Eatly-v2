import { useState } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { SelectChangeEvent } from '@mui/material';
import { Select, TextField } from '@ui/index';

import { Label, Row, SendButton, Title, Wrapper, StyledPaper } from './Support.styles';
import { problemTypes } from './constants';

export const Support = () => {
  const { t } = useTranslation();
  const [problemType, setProblemType] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setProblemType(event.target.value as string);
  };

  return (
    <Wrapper>
      <StyledPaper>
        <Title>{t('Contact us')}</Title>
        <Row>
          <Label>{t('Problem Type')}</Label>
          <Select value={problemType} onChange={handleChange} items={problemTypes} />
        </Row>
        <Row>
          <Label>{t('Subject')}</Label>
          <TextField variant="outlined" fullWidth />
        </Row>
        <Row>
          <Label>{t('Message')}:</Label>
          <TextField variant="outlined" multiline={true} minRows={10} fullWidth />
        </Row>
        <Row sx={{ justifyContent: 'center' }} marginTop="30px" marginBottom="20px">
          <SendButton sx={{ textTransform: 'none', paddingLeft: '20%', paddingRight: '20%' }} endIcon={icons.send}>
            {t('Send message')}
          </SendButton>
        </Row>
      </StyledPaper>
    </Wrapper>
  );
};
