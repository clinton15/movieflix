import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";
import hiTranslation from "./locales/hi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language in case translation is missing
  interpolation: {
    escapeValue: false, // react already escapes
  },
});

export default i18n;
