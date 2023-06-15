import { useTranslation } from '@hooks/index';
import { styled } from '@mui/material';
import { Button, Icon } from '@ui/index';

const StyledButton = styled(Button)({
  justifyContent: 'center',
  background: '#fff',
  color: '#000',
  textTransform: 'none',
  border: '1px solid  #aeb2b1',
});

export const SocialButtons = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledButton fullWidth startIcon={<Icon name="facebook" />}>
        {t('Signin with Facebook')}
      </StyledButton>
      <StyledButton fullWidth startIcon={<Icon name="google" />}>
        {t('Signin with Google')}
      </StyledButton>
      <StyledButton fullWidth startIcon={<Icon name="twitter" />}>
        {t('Signin with Twitter')}
      </StyledButton>
    </>
  );
};
