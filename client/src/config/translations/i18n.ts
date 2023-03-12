import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pl from './locales/pl.json';

export const DEFAULT_LANGUAGE = 'en';
export const defaultNS = 'translations';

export const resources = {
  en: { translations: en },
  pl: { translations: pl },
} as const;

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    debug: false,
    resources,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
