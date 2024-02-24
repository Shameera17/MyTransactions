import useScreenSize from "helpers/useScreenSize";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { register } from "services/user";

import { Description, Title, showNotification } from "components/atoms";
import { LayoutImageCard, SignUpForm } from "components/molecules";

const SignUp = () => {
  const { t } = useTranslation(["glossary"]);
  const navigate = useNavigate();
  const screenSize = useScreenSize();

  return (
    <div className="h-full grid laptop:grid-cols-2 desktop:grid-cols-2 tablet:grid-cols-2  gap-4 content-center">
      {screenSize.width >= 640 && <LayoutImageCard screen="signup" />}
      <div className="flex flex-col justify-center ">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("glossary:signup.title")} />
          <Description
            level={1}
            description={t("glossary:signup.description")}
          />
        </div>
        <SignUpForm
          onSubmit={async formValues => {
            delete formValues.confirmPassword;
            await register(formValues)
              .then(response => {
                showNotification(
                  "success",
                  "Success",
                  "Account Created successfully. You will be directed to login page"
                );

                setTimeout(() => {
                  navigate("/signin");
                }, 1000);
              })
              .catch(error => {
                showNotification(
                  "error",
                  "Error",
                  error.response.data ??
                    "Account creation failed! Please try again!"
                );
              });
          }}
        />
      </div>
    </div>
  );
};

export default SignUp;
