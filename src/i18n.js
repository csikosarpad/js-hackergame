import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import huTranslation from './locales/hu/translation.json';
import deTranslation from './locales/de/translation.json';
const resources = {
    en: { translation: enTranslation },
    hu: { translation: huTranslation },
    de: { translation: deTranslation },
};
const storedLng = localStorage.getItem('i18nextLng');
const browserLng = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'hu';
const supportedLngs = ['en', 'hu', 'de'];
const defaultLng = storedLng || (supportedLngs.includes(browserLng) ? browserLng : 'hu');
i18n
    .use(initReactI18next)
    .init({
    resources,
    lng: defaultLng,
    fallbackLng: 'en',
    supportedLngs,
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;
//# sourceMappingURL=i18n.js.map