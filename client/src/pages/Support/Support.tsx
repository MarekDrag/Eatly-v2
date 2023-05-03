import { useState } from 'react';

import { icons } from '@config/icons';
import { SelectChangeEvent } from '@mui/material';

import { ButtonBox, Label, SendButton, StyledSelect, TextField, Title } from './Support.styles';
import { problemTypes } from './constants';

export const Support = () => {
  const [problemType, setProblemType] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setProblemType(event.target.value as string);
  };

  return (
    <>
      <Title>Contact Form</Title>
      <Label>Problem Type</Label>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={problemType}
        onChange={handleChange}
        items={problemTypes}
        sx={{ width: 300 }}
      />
      <Label>Subject</Label>
      <TextField id="outlined-basic" variant="outlined" sx={{ width: 300 }} />
      <Label>Message:</Label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '70%', minWidth: 300 }}
        multiline={true}
        minRows={15}
      />
      <ButtonBox>
        <SendButton sx={{ textTransform: 'none' }} endIcon={icons.send}>
          Send message
        </SendButton>
      </ButtonBox>
    </>
  );
};
