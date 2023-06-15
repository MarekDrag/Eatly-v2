import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { Typography, Box, Divider, SocialButtons, Link } from '@ui/index';

import { ForgetPassword, SectionTitle } from './Login.styles';
import { LoginForm } from './LoginForm/LoginForm';

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <SectionTitle variant="h4">{t('Sign in')}</SectionTitle>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/register')}>
        {t('New here?')} <Link>{t('Create an account')}</Link>
      </Typography>
      <LoginForm />
      <Box sx={{ display: 'grid', width: '100%', gridTemplateColumns: '1fr' }}>
        <ForgetPassword variant="body2" onClick={() => navigate('/forgot-password')}>
          {t('Forget password')}
        </ForgetPassword>
      </Box>
      <Divider />
      <SocialButtons />
    </LoginLayout>
  );
};
