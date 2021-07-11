import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment/";
import "moment/locale/pt";

import pt from "./translations/pt.json";

const options = {
  // Order and from where user language should be detected.
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
  ],

  // Keys or params to lookup language from:
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,

  // Cache user language on:
  caches: ["localStorage", "cookie"],

  // Optional expire and domain for set cookie.
  cookieMinutes: 1,
  cookieDomain: "myDomain",

  // Optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // Only detect languages that are in the whitelist.
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt,
      },
    },
    fallbackLng: ["pt"],
    whitelist: ["pt"],
    detection: options,

    interpolation: {
      escapeValue: false,
      // Format items to each language format.
      format(value, format, lng) {
        if (format === "number") return value.toLocaleString(lng);
        if (value instanceof Date) {
          return moment(value).format(format);
        }
        return value;
      },
    },
  });

export default i18n;
