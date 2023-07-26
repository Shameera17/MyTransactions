import { useTranslation } from "react-i18next";

import { Description, Title } from "components/atoms";
import { AuthWrap, LoginForm } from "components/molecules";

const ForgotPassword = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <AuthWrap width="376px">
      <Title title={t("forgot-password.title")} />
      <Description level={1} description={t("forgot-password.description")} />
      <LoginForm onSubmit={() => {}} />
    </AuthWrap>
  );
};
export default ForgotPassword;
