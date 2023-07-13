import { useTranslation } from "react-i18next";

import { Description, Title } from "components/atoms";
import { LayoutImageCard, LoginForm } from "components/molecules";

const Login = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className=" grid grid-cols-2 gap-4 content-center">
      <LayoutImageCard screen="signin" />
      <div className="flex flex-col justify-center ">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("signin.title")} />
          <Description level={1} description={t("signin.description")} />
        </div>
        <LoginForm onSubmit={() => {}} />
      </div>
    </div>
  );
};
export default Login;
