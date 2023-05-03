import { useState } from 'react';

import { icons } from '@config/icons';
import { SelectChangeEvent, Typography } from '@mui/material';

import { ButtonBox, Label, SendButton, StyledSelect, TextField } from './Support.styles';
import { problemTypes } from './constants';

export const Support = () => {
  const [problemType, setProblemType] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setProblemType(event.target.value as string);
  };

  return (
    <>
      <Typography fontSize={50} fontWeight={700} color="primary.main">
        Contact Form
      </Typography>
      <Label>Problem Type</Label>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={problemType}
        onChange={handleChange}
        items={problemTypes}
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