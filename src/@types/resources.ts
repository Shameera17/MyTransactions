import common from "../i18n/locales/en/common.json";
import glossary from "../i18n/locales/en/glossary.json";
import validations from "../i18n/locales/en/validations.json";

const resources = {
  common: common,
  glossary: glossary,
  validations: validations
} as const;

export default resources;
