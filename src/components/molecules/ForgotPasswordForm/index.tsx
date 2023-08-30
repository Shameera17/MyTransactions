import React from "react";

import { Form, FormInstance } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LinkSentence, PrimaryButton, Text } from "components/atoms";

interface ForgotPasswordFormProps {
  onSubmit: () => void;
  form: FormInstance<any>;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  form
}) => {
  const { t } = useTranslation(["validations", "common", "glossary"]);
  const handleFinish = (values: any) => {
    form.validateFields().then(() => {
      onSubmit();
    });
  };
  const navigate = useNavigate();
  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      onFinish={handleFinish}
      className="grid gap-2"
      onFinishFailed={handleFinishFailed}
    >
      <Text
        name={"email"}
        rules={[
          { type: "email", message: t("validations:inputs.email-invalid") }
        ]}
        size="large"
        label={t("common:form.email")}
      />
      <PrimaryButton
        htmlType="submit"
        className=" mt-6"
        height="40px"
        size="middle"
        buttonName={t("glossary:forgot-password.reset-proceed")}
      />
      <LinkSentence
        onClick={() => navigate("/signin")}
        level={1}
        className="flex justify-end underline"
        description={t("glossary:set-new-password.back-to-signin")}
      />
    </Form>
  );
};

export default ForgotPasswordForm;
