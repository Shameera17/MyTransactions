import i18next from "i18next";
// sinhala translations
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// english translations
import * as enCommon from "./locales/en/common.json";
import * as enGlossary from "./locales/en/glossary.json";
import * as enValidations from "./locales/en/validations.json";
import * as sinCommon from "./locales/si/common.json";
import * as sinGlossary from "./locales/si/glossary.json";
import * as sinValidations from "./locales/si/validations.json";

export const resources = {
  en: {
    common: enCommon,
    glossary: enGlossary,
    validations: enValidations
  },
  si: {
    common: sinCommon,
    glossary: sinGlossary,
    validations: sinValidations
  }
} as const;

export const defaultNS = "common";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init(
    {
      returnNull: false,
      debug: true,
      defaultNS,
      fallbackNS: "common",
      ns: ["common", "glossary", "validations"],
      resources,
      returnEmptyString: false
    },
    (err, t) => {
      i18next.t("welcome"); // key in moduleA namespace (defined default)
      i18next.t("common:welcome"); // key in common namespace (not recommended with ns prefix when used in combination with natural language keys)
      // better use the ns option:
      i18next.t("welcome", { ns: "common" });
    }
  );

export default i18next;
