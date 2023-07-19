import { useTranslation } from "react-i18next";

import {
  Description,
  LinkSentence,
  PrimaryButton,
  Title
} from "components/atoms";

const PasswordRestSuccess = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className="flex flex-col justify-center ">
      <div
        style={{
          marginBottom: "48px"
        }}
      >
        <Title title={t("password-reset-success.title")} />
        <Description
          level={1}
          description={t("password-reset-success.description-1")}
        />
        <Description
          level={1}
          description={t("password-reset-success.description-2")}
        />
        <PrimaryButton
          onClick={() => {}}
          buttonName={t("password-reset-success.continue")}
        />
        <LinkSentence
          level={1}
          className="flex justify-end"
          description={t("check-your-email.back-to-signin")}
        />
      </div>
    </div>
  );
};
export default PasswordRestSuccess;
