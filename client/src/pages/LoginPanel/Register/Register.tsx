import { useNavigate } from 'react-router-dom';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { Box, Button, Divider, TextField, styled } from '@mui/material';
import { Typography } from '@ui/Typography';

export const Background = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  background: 'linear-gradient(to right, #189f80, #33b699, #66ccaf, #99e3c0)',
});

export const LoginBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'start',
  flexWrap: 'wrap',
  width: 400,
  rowGap: 20,
  padding: 20,
  borderRadius: 20,
  color: '#fff',
  background: '#fff',
  marginTop: 30,
  marginBottom: 50,
});

export const SendButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: '#fff',
}));

export const SocialButton = styled(Button)({
  background: '#fff',
  color: '#000',
  textTransform: 'none',
  border: '1px solid  #aeb2b1',
});

export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <LoginLayout>
      <Typography variant="h4" fontWeight={500} sx={{ color: '#189f80' }} width="100%" textAlign="center">
        {t('Sign up')}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/login')}>
        {t('Have an account?')} <span style={{ color: '#189f80', fontWeight: 500 }}>{t('Login')}</span>
      </Typography>
      <TextField variant="outlined" fullWidth label="First name" />
      <TextField variant="outlined" fullWidth label="Last name" />
      <TextField variant="outlined" fullWidth label="Email" />
      <TextField variant="outlined" fullWidth label="Password" />
      <TextField variant="outlined" fullWidth label="Repeat password" />
      <SendButton sx={{ textTransform: 'none' }} fullWidth onClick={handleSubmit}>
        {t('Sign up')}
      </SendButton>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center">
        {t('By signing up, I agree to Eatly')}{' '}
        <span style={{ color: '#189f80' }}>{t('Terms of Service & Privacy Policy')}</span>
      </Typography>
      <Divider sx={{ color: '#aeb2b1' }}>OR</Divider>
      <SocialButton fullWidth startIcon={icons.facebook}>
        {t('Signin with Facebook')}
      </SocialButton>
      <SocialButton fullWidth startIcon={icons.google}>
        {t('Signin with Google')}
      </SocialButton>
      <SocialButton fullWidth startIcon={icons.twitter}>
        {t('Signin with Twitter')}
      </SocialButton>
    </LoginLayout>
  );
};
