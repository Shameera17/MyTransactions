import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Password, PrimaryButton } from "../../atoms";

interface SecurityFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const SecurityForm: React.FC<SecurityFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();
  const { t } = useTranslation();
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
    <>
      <Form
        form={form}
        onFinish={handleFinish}
        className="grid gap-2"
        onFinishFailed={handleFinishFailed}
      >
        <Password
          name={"password"}
          size="large"
          label={t("form.current-password")}
        />
        <Password
          name={"password"}
          size="large"
          label={t("form.new-password")}
        />
        <Password
          name={"password"}
          size="large"
          label={t("form.confirm-new-password")}
        />
      </Form>
      <PrimaryButton
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields();
        }}
        buttonName={t("settings.save-changes", {
          ns: "glossary"
        }).toUpperCase()}
      />
    </>
  );
};

export default SecurityForm;
