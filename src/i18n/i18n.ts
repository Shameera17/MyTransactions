import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// english translations
import * as enCommon from "./locales/en/common.json";
import * as enGlossary from "./locales/en/glossary.json";
import * as enValidations from "./locales/en/validations.json";
// sinhala translations
import * as sinCommon from "./locales/sin/common.json";
import * as sinGlossary from "./locales/sin/glossary.json";
import * as sinValidations from "./locales/sin/validations.json";

export const resources = {
  en: {
    common: enCommon,
    glossary: enGlossary,
    validations: enValidations,
  },
  sin: {
    common: sinCommon,
    glossary: sinGlossary,
    validations: sinValidations,
  },
} as const;

export const defaultNS = "common";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init(
    {
      returnNull: false,
      debug: true,
      // defaultNS,
      lng: "en",
      fallbackNS: "common",
      ns: ["common", "glossary", "validations"],
      resources,
      returnEmptyString: false,
    },
    (err, t) => {
      i18next.t("welcome"); // key in moduleA namespace (defined default)
      i18next.t("common:welcome"); // key in common namespace (not recommended with ns prefix when used in combination with natural language keys)
      // better use the ns option:
      i18next.t("welcome", { ns: "common" });
    }
  );

// const t = i18n.t.bind(i18n);
// export { t };

export default i18next;
