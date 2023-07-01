import { ReactNode, createContext, useState } from 'react';

import { deleteCookie, getCookie, setCookie } from '@utils/cookies';

type AuthState = {
  accessToken: string | null;
};

export type AuthContextType = AuthState & {
  setAuthContext: (data: Partial<AuthState>) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAuthContext: (_) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: getCookie('accessToken') ?? null,
  });

  const logout = () => {
    setAuthState({ accessToken: null });
    deleteCookie('accessToken');
  };

  const setAuthContext = (data: Partial<AuthState>) => {
    if (data.accessToken) {
      setCookie('accessToken', data.accessToken, 1);
    }
    setAuthState((prev) => ({ ...prev, ...data }));
  };

  return <AuthContext.Provider value={{ ...authState, setAuthContext, logout }}>{children}</AuthContext.Provider>;
};
