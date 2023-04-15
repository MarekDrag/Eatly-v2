import en from '../locales/en.json';

type Keys<T extends Record<string, unknown>, Prefix extends string> = {
  [K in keyof T]: K extends string
    ? T[K] extends Record<string, unknown>
      ? Keys<T[K], `${Prefix}${K}.`>
      : K extends `${infer B}_${'one' | 'other'}`
      ? `${Prefix}${B}`
      : `${Prefix}${K}`
    : never;
}[keyof T];

export type TranslationResourceKeys<T extends Record<string, unknown>> = Keys<T, ''>;
export type TranslationKeys = TranslationResourceKeys<typeof en>;
