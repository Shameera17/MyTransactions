import { useTranslation } from "react-i18next";

import {
  Description,
  LinkSentence,
  PrimaryButton,
  Title
} from "components/atoms";

const CheckYourEmail = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className="flex flex-col justify-center ">
      <div
        style={{
          marginBottom: "48px"
        }}
      >
        <Title title={t("check-your-email.title")} />
        <Description
          level={1}
          description={t("check-your-email.description")}
        />
        <PrimaryButton
          onClick={() => {}}
          buttonName={t("check-your-email.open-email-app")}
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
export default CheckYourEmail;
