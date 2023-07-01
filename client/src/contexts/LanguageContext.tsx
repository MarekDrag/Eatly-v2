import { ReactNode, createContext, useEffect } from 'react';

import i18next from 'i18next';

import { useMeQuery } from '@api/me';

type Props = {
  children: ReactNode;
};

const LanguageContext = createContext({ lang: 'en' });

export const LanguageProvider = (props: Props) => {
  const meQuery = useMeQuery();

  useEffect(() => {
    if (meQuery.data?.language) {
      i18next.changeLanguage(meQuery.data.language);
    }
  }, [meQuery.data?.language]);

  return <LanguageContext.Provider value={{ lang: 'en' }}>{props.children}</LanguageContext.Provider>;
};
