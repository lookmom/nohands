import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import LazyLanguages from '@src/utils/LazyLanguages';

i18n
  .use(LazyLanguages)
  // .use(LanguageDetector)
  .use(initReactI18next);

i18n.init({
  // debug: process.env.NODE_ENV === 'development',
  debug: false,
  fallbackLng: false,
  lng: 'en', // default language
  defaultNS: 'overrides',
  fallbackNS: ['overrides', 'commons'],
  load: 'languageOnly',
  ns: ['overrides', 'commons'],
  interpolation: {
    escapeValue: false, // not needed for react!!
    // format: i18nextFormatter,
  },
  backend: {
    // de: {
    //   commons: () => import('./de/commons.json'),
    //   // overrides: () => import('./de/overrides.json'),
    // },
    en: {
      commons: () => import('./en/commons.json'),
      overrides: () => import('./en/overrides.json'),
    },
  },
  react: {
    wait: true,
  },
});

export default i18n;
