import { useTranslation } from "react-i18next";

import { Description, Title } from "components/atoms";
import { SetNewPasswordForm } from "components/molecules";

const SetNewPassword = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className="flex flex-col justify-center ">
      <div
        style={{
          marginBottom: "48px"
        }}
      >
        <Title title={t("set-new-password.title")} />
        <Description
          level={1}
          description={t("set-new-password.description")}
        />
        <SetNewPasswordForm onSubmit={() => {}} />
      </div>
    </div>
  );
};
export default SetNewPassword;
