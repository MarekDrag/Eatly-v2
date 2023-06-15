import { ReactNode } from 'react';

import { Background, Board } from './LoginLayout.styles';
import { Logo } from '@ui/index';

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Background>
      <Logo />
      <Board>{children}</Board>
    </Background>
  );
};
