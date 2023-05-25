import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
   lng: 'en',
   fallbackLng: 'en',
   resources: {
      en: {
      translation: translationEN,
      },
      ru: {
      translation: translationRU,
      },
   },
});

export default i18n;
