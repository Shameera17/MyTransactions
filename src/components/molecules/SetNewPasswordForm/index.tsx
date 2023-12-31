import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LinkSentence, Password, PrimaryButton } from "components/atoms";

interface SetNewPasswordFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const SetNewPasswordForm: React.FC<SetNewPasswordFormProps> = ({
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
      <Password
        name={"password"}
        size="large"
        label={t("common:form.enter-new-password")}
      />
      <Password
        name={"conf-password"}
        size="large"
        label={t("common:form.confirm-password")}
      />

      <PrimaryButton
        className=" mt-6"
        height="40px"
        size="middle"
        htmlType="submit"
        buttonName={t("glossary:set-new-password.reset-password")}
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

export default SetNewPasswordForm;
