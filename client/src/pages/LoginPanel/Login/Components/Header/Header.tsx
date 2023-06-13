import { useTranslation } from '@hooks/index';
import { Link, styled } from '@mui/material';
import { Typography } from '@ui/index';
import { useNavigate } from 'react-router-dom';

const SectionTitle = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <SectionTitle variant="h4">{t('Sign in')}</SectionTitle>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/register')}>
        {t('New here?')} <Link sx={{ fontWeight: 500, cursor: 'pointer' }}>{t('Create an account')}</Link>
      </Typography>
    </>
  );
};
