import { icons } from '@config/icons';
import { IconProps } from '@mui/material';
import { cloneElement } from 'react';

type Props = IconProps & { name: keyof typeof icons };

export const Icon = ({ name, ...props }: Props) => {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon '${name}' not found`);
    return null;
  }

  return cloneElement(icon, props);
};
