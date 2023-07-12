import { useTranslation } from "react-i18next";

import { Description, Title } from "components/atoms";
import { LayoutImageCard, SignUpForm } from "components/molecules";

const SignUp = () => {
  const { t } = useTranslation(["glossary"]);
  return (
    <div className=" grid grid-cols-2 gap-4 content-center">
      <LayoutImageCard screen="signup" />
      <div className="flex flex-col justify-center ">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("signup.title")} />
          <Description description={t("signup.description")} />
        </div>
        <SignUpForm onSubmit={() => {}} />
      </div>
    </div>
  );
};

export default SignUp;
