import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  Description,
  LinkSentence,
  Password,
  PrimaryButton,
  Text
} from "../../atoms";

interface LoginFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();
  const { t } = useTranslation(["validations", "common", "glossary"]);

  const navigate = useNavigate();

  return (
    <Form form={form}>
      <Text
        name={"email"}
        rules={[
          { type: "email", message: t("validations:inputs.email-invalid") }
        ]}
        size="large"
        label={t("common:form.email")}
      />
      <Password
        name={"password"}
        size="large"
        label={t("common:form.password")}
      />
      <LinkSentence
        level={1}
        className="flex justify-end"
        description={t("glossary:signin.forgot-password")}
        onClick={() => {
          navigate("/forgotpassword");
        }}
      />
      <PrimaryButton
        htmlType="submit"
        className=" mt-6 w-full"
        height="40px"
        size="middle"
        onClick={() => {
          console.log("ss");
          form
            .validateFields()
            .then(data => {
              console.log("data", data);
              onSubmit(data);
            })
            .catch(error => console.log(error));
        }}
        buttonName={t("common:button.signin")}
      />
      <span className="flex mt-4">
        <Description
          className="flex justify-start"
          description={t("glossary:signin.no-account")}
        />
        <LinkSentence
          onClick={() => {
            navigate("/signup");
          }}
          level={2}
          className="flex justify-start "
          description={t("glossary:signin.signup")}
        />
      </span>
    </Form>
  );
};

export default LoginForm;
