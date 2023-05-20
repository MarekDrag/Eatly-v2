import { useState } from 'react';

import { icons } from '@config/icons';
import { SelectChangeEvent, TextField } from '@mui/material';
import { Select } from '@ui/index';

import { Label, Row, SendButton, Title, Wrapper, StyledPaper } from './Support.styles';
import { problemTypes } from './constants';

export const Support = () => {
  const [problemType, setProblemType] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setProblemType(event.target.value as string);
  };

  return (
    <Wrapper>
      <StyledPaper>
        <Title>Contact us</Title>
        <Row>
          <Label>Problem Type</Label>
          <Select value={problemType} onChange={handleChange} items={problemTypes} />
        </Row>
        <Row>
          <Label>Subject</Label>
          <TextField variant="outlined" fullWidth />
        </Row>
        <Row>
          <Label>Message:</Label>
          <TextField variant="outlined" multiline={true} minRows={10} fullWidth />
        </Row>
        <Row sx={{ justifyContent: 'center' }} marginTop="30px" marginBottom="20px">
          <SendButton sx={{ textTransform: 'none', paddingLeft: '20%', paddingRight: '20%' }} endIcon={icons.send}>
            Send message
          </SendButton>
        </Row>
      </StyledPaper>
    </Wrapper>
  );
};
