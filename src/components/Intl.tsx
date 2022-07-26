import React from 'react';
import { AbstractIntlMessages, IntlProvider as ReactIntlProvider } from 'use-intl';

import { useLazy } from '@src/utils';
import { logger } from '@src/utils/logger';

const DEFAULT_LOCALE = 'en';

interface LocaleContextProps {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const LocaleContext = React.createContext<LocaleContextProps>({
  locale: DEFAULT_LOCALE,
  setLocale: () => null,
  isLoading: false,
});

export const useLocale = () => {
  return React.useContext(LocaleContext);
};

interface Props {
  defaultLocale?: string;
  fallbackLocale?: string;
  localeMap: { [locale: string]: () => Promise<AbstractIntlMessages> };
}

export const IntlProvider: React.FC<React.PropsWithChildren<Props>> = ({
  defaultLocale = DEFAULT_LOCALE,
  fallbackLocale = DEFAULT_LOCALE,
  localeMap,
  children,
}) => {
  const [intermediateLocale, setLocale] = React.useState(defaultLocale);

  const {
    isInitialized,
    isLoading,
    data: [locale, messages] = [intermediateLocale, {}],
    error,
  } = useLazy(async () => {
    if (!localeMap) throw new Error('No localeMap given');
    if (!(intermediateLocale in localeMap)) {
      logger.warn(`locale "${intermediateLocale}" not present in localeMap, falling back to "${fallbackLocale}"`);
      if (!(fallbackLocale in localeMap)) {
        throw new Error(
          `locale "${intermediateLocale}" and fallbackLocale "${fallbackLocale}" not present in localeMap`
        );
      }
      return [fallbackLocale, await localeMap[fallbackLocale]()];
    }
    return [intermediateLocale, await localeMap[intermediateLocale]()];
  }, [intermediateLocale]);

  if (error) logger.error(error);

  if (!isInitialized) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>
      <ReactIntlProvider locale={locale} key={locale} messages={messages}>
        {children}
      </ReactIntlProvider>
    </LocaleContext.Provider>
  );
};

export { useTranslations, useIntl } from 'use-intl';
