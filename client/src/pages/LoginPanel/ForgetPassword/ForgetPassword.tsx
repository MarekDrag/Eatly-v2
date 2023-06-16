import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { TextField, Typography } from '@ui/index';

import { SendButton } from './styles';

export const ForgetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <LoginLayout>
      <Typography variant="h4" fontWeight={500} sx={{ color: '#189f80' }} width="100%" textAlign="center">
        {t('Forgot your password?')}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }}>
        {t(
          'Please fill in the email that you used to register. You will be sent an email with instructions on how to reset your password.',
        )}
      </Typography>
      <TextField variant="outlined" fullWidth label="Email" />
      <SendButton fullWidth onClick={handleSubmit}>
        {t('Send Email')}
      </SendButton>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/login')}>
        {t('Remember your password?')} <span style={{ color: '#189f80', fontWeight: 500 }}>{t('Sign in')}</span>
      </Typography>
    </LoginLayout>
  );
};
