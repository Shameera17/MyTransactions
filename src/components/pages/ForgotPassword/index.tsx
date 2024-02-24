import { useState } from "react";

import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { forgotPassword, isUserExist } from "services/user";

import { Description, Title, showNotification } from "components/atoms";
import { AuthWrap, SetNewPasswordForm } from "components/molecules";
import ForgotPasswordForm from "components/molecules/ForgotPasswordForm";

const ForgotPassword = () => {
  const { t } = useTranslation(["glossary"]);
  const [form] = useForm();
  const [passwordForm, setPasswordForm] = useState({
    email: "",
    show: false
  });
  const navigate = useNavigate();

  return (
    <AuthWrap width="376px">
      <Title title={t("forgot-password.title")} />
      <Description level={1} description={t("forgot-password.description1")} />
      {!passwordForm.show && (
        <ForgotPasswordForm
          onSubmit={() => {
            isUserExist(form.getFieldValue("email"))
              .then(result => {
                if (result) {
                  setPasswordForm({
                    email: form.getFieldValue("email"),
                    show: true
                  });
                } else {
                  form.setFields([
                    {
                      name: "email", // required
                      value: form.getFieldValue("email"), //optional
                      errors: ["Invalid email"]
                    }
                  ]);
                }
              })
              .catch(error => {
                showNotification(
                  "error",
                  "Error",
                  error?.response?.data ?? "Server error. Please try again!"
                );
              });
          }}
          form={form}
        />
      )}
      {passwordForm.email && passwordForm.show && (
        <SetNewPasswordForm
          onSubmit={values => {
            forgotPassword({
              email: passwordForm.email,
              password: values?.password
            })
              .then(() => {
                showNotification(
                  "success",
                  "Success",
                  "Password reset successfully. You will be directed to login page"
                );
                setTimeout(() => {
                  navigate("/signin");
                }, 1000);
              })
              .catch(error => {
                showNotification(
                  "error",
                  "Error",
                  error.response.data ?? "Sign in failed! Please try again!"
                );
              });
          }}
        />
      )}
    </AuthWrap>
  );
};
export default ForgotPassword;
