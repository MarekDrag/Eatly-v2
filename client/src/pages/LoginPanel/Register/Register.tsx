import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { Typography, Divider, SocialButtons, Link } from '@ui/index';

import { RegisterForm } from './RegisterForm/RegisterForm';

export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <Typography variant="h4" fontWeight={500} sx={{ color: '#189f80' }} width="100%" textAlign="center">
        {t('Sign up')}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/login')}>
        {t('Have an account?')} <Link style={{ color: '#189f80', fontWeight: 500 }}>{t('Login')}</Link>
      </Typography>
      <RegisterForm />
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center">
        {t('By signing up, I agree to Eatly')}{' '}
        <span style={{ color: '#189f80' }}>{t('Terms of Service & Privacy Policy')}</span>
      </Typography>
      <Divider sx={{ color: '#aeb2b1' }}>OR</Divider>
      <SocialButtons />
    </LoginLayout>
  );
};
