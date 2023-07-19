import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LinkSentence, PrimaryButton, Text } from "components/atoms";

interface ForgotPasswordFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();
  const { t } = useTranslation(["validations", "common", "glossary"]);
  const handleFinish = (values: any) => {
    form.validateFields().then(() => {
      onSubmit(values);
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
        className=" mt-6"
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields();
        }}
        buttonName={t("glossary:forgot-password.reset-password")}
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
