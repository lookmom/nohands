import { BackendModule, InitOptions, ResourceLanguage, Services } from 'i18next';

interface Languages {
  [language: string]: {
    [namespace: string]: () => Promise<ResourceLanguage>;
  };
}

const defaultOptions = {};

interface LazyLanguagesModule extends BackendModule {
  services?: Services;
  options?: InitOptions;
  lazyOptions?: Languages;
}

const LazyLanguages: LazyLanguagesModule = {
  type: 'backend',

  init(services, backendOptions: Languages, i18nextOptions) {
    this.services = services;
    this.options = { ...defaultOptions, ...i18nextOptions };
    this.lazyOptions = backendOptions;
  },

  async read(language, namespace, callback) {
    if (!this.lazyOptions) return callback(null, null);
    if (!this.lazyOptions[language]?.[namespace]) callback(new Error('did not match any dynamic import'), null);

    callback(null, await this.lazyOptions[language][namespace]());
  },

  create(/* languages, namespace, key, fallbackValue */) {
    /* no need to save the missing translation */
  },
};

export default LazyLanguages;
