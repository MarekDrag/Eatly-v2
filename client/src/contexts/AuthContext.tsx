import { ReactNode, createContext, useState } from 'react';

import { User } from '@api/User';
import { setCookie } from '@utils/cookies';

type AuthState = {
  user: User | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

export type AuthContextType = AuthState & {
  setAuthContext: (data: Partial<AuthState>) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  setAuthContext: (_) => {},
  logout: () => {},
});

const defaultValues: AuthState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultValues);

  const logout = () => {
    setAuthState(defaultValues);
  };

  const setAuthContext = (data: Partial<AuthState>) => {
    if (data.accessToken) {
      setCookie('accessToken', data.accessToken, 1);
    }
    setAuthState((prev) => ({ ...prev, ...data }));
  };

  return <AuthContext.Provider value={{ ...authState, setAuthContext, logout }}>{children}</AuthContext.Provider>;
};
