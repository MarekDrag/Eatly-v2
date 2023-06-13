import { icons } from '@config/icons';
import { IconButtonProps, IconButton as MuiIconButton } from '@mui/material';
import { Icon } from '@ui/index';

type Props = IconButtonProps & { name: keyof typeof icons };

export const IconButton = ({ name, ...props }: Props) => {
  return (
    <MuiIconButton {...props}>
      <Icon name={name} />
    </MuiIconButton>
  );
};
