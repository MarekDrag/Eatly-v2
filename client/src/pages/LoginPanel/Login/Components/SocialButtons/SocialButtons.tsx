import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { styled } from '@mui/material';
import { Divider, Button } from '@ui/index';

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
      <Divider>OR</Divider>
      <StyledButton fullWidth startIcon={icons.facebook}>
        {t('Signin with Facebook')}
      </StyledButton>
      <StyledButton fullWidth startIcon={icons.google}>
        {t('Signin with Google')}
      </StyledButton>
      <StyledButton fullWidth startIcon={icons.twitter}>
        {t('Signin with Twitter')}
      </StyledButton>
    </>
  );
};
