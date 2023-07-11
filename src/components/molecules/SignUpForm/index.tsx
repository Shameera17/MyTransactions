import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";

import { Password, PrimaryButton, Text } from "components/atoms";

interface SignUpFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();
  const { t } = useTranslation();
  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <div className="grid desktop:grid-cols-2 laptop:grid-cols-2 gap-2 tablet:grid-cols-1">
        <Text name={"firstName"} size="large" label={t("form.first-Name")} />
        <Text name={"lastName"} size="large" label={t("form.last-Name")} />
      </div>
      <Text name={"email"} size="large" label={t("form.email")} />
      <Password name={"password"} size="large" label={t("form.password")} />
      <Password
        name={"confirmPassword"}
        size="large"
        label={t("form.confirm-password")}
      />
      <PrimaryButton
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields();
        }}
        buttonName={t("button.signup").toUpperCase()}
      />
    </Form>
  );
};

export default SignUpForm;
