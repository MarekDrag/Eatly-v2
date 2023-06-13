import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { FormControlLabel, Link, Checkbox } from '@mui/material';
import { ForgetPassword, SectionTitle, SendButton } from './Login.styles';
import { Typography, Box, TextField } from '@ui/index';
import { SocialButtons } from './Components/SocialButtons';

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <LoginLayout>
      <SectionTitle variant="h4">{t('Sign in')}</SectionTitle>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/register')}>
        {t('New here?')} <Link sx={{ fontWeight: 500, cursor: 'pointer' }}>{t('Create an account')}</Link>
      </Typography>
      <TextField variant="outlined" fullWidth label="Email" />
      <TextField variant="outlined" fullWidth label="Password" />
      <Box sx={{ display: 'grid', width: '100%', gridTemplateColumns: '1fr 1fr' }}>
        <FormControlLabel sx={{ color: '#189f80', width: '100%' }} control={<Checkbox />} label="Remember me" />
        <ForgetPassword variant="body2" onClick={() => navigate('/forgot-password')}>
          {t('Forget password')}
        </ForgetPassword>
      </Box>
      <SendButton sx={{ textTransform: 'none' }} fullWidth onClick={handleSubmit}>
        {t('Sign in')}
      </SendButton>
      <SocialButtons />
    </LoginLayout>
  );
};
