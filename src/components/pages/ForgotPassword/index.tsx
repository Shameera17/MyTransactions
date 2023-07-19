import { useTranslation } from "react-i18next";

import { Description, Title } from "components/atoms";
import { LoginForm } from "components/molecules";

const ForgotPassword = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className="flex flex-col justify-center ">
      <div
        style={{
          marginBottom: "48px"
        }}
      >
        <Title title={t("forgot-password.title")} />
        <Description level={1} description={t("forgot-password.description")} />
      </div>
      <LoginForm onSubmit={() => {}} />
    </div>
  );
};
export default ForgotPassword;
