import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationEN from "./assets/i18n/en.json";
import translationHU from "./assets/i18n/hu.json";

export interface LocaleDefinition {
  translation: any;
  countryCode: string,
  displayedCountryCode: string;
  flagIcon?: string;
};

export const locales : Array<LocaleDefinition> = [
  {
    translation: translationEN,
    countryCode: "en",
    displayedCountryCode: "EN",
    flagIcon: "",
  },
  {
    translation: translationHU,
    countryCode: "hu",
    displayedCountryCode: "HU",
    flagIcon: "",
  }
]

const createi18nResources = () => {
  var result = {} as Resource;
  locales.forEach(locale => {
    result[locale.countryCode] = {
      translation: locale.translation
    }
  });
  return result;
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: createi18nResources(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export { i18n as i18nInstance };
