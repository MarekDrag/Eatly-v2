import { Avatar, Box, TextField } from '@mui/material';
import { Typography } from '@ui/index';

export const Account = () => {
  return (
    <Box width="100%">
      <Typography variant="h6">General info</Typography>
      <Avatar sx={{ width: 70, height: 70, marginTop: '20px', marginBottom: '30px' }} />
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        <TextField label="First Name" defaultValue="asdsa" />
        <TextField label="Last Name" defaultValue="asdsa" />
        <TextField label="Email" defaultValue="asdsa" />
      </Box>
    </Box>
  );
};
