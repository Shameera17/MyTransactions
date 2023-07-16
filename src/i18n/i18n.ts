import i18next from "i18next";

// english translations
import enNs1 from "./locales/en/common.json";
import enNs2 from "./locales/en/glossary.json";
import enNs3 from "./locales/en/validations.json";
// sinhala translations
import siNs1 from "./locales/si/common.json";
import siNs2 from "./locales/si/glossary.json";
import siNs3 from "./locales/si/validations.json";

export const defaultNS = "common";
export const fallbackNS = "fallback";

i18next.init({
  debug: true,
  fallbackLng: "en",
  // defaultNS,
  ns: ["common", "glossary", "validations"],
  resources: {
    en: {
      common: enNs1,
      glossary: enNs2,
      validations: enNs3
    },
    si: {
      common: siNs1,
      glossary: siNs2,
      validations: siNs3
    }
  }
});
