import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { validateConfirmPassword } from "helpers/formValidations";
import { useTranslation } from "react-i18next";

import { Password, PrimaryButton } from "../../atoms";

interface SecurityFormProps {
  onSubmit: (values: any) => void;
}

const SecurityForm: React.FC<SecurityFormProps> = ({ onSubmit }) => {
  const [form] = useForm();
  const { t } = useTranslation();

  const handleFinish = (values: any) => {
    form.validateFields().then(() => {
      onSubmit(values);
    });
  };

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
          name={"oldPassword"}
          size="large"
          label={t("form.current-password")}
        />
        <Password
          name={"newPassword"}
          size="large"
          label={t("form.new-password")}
          rules={[
            { min: 6, message: "Password must be at least 6 characters long." }
          ]}
        />
        <Password
          name={"confirmPassword"}
          size="large"
          label={t("form.confirm-new-password")}
          rules={[
            { required: true, message: "Please confirm your password." },
            validateConfirmPassword
          ]}
        />
      </Form>
      <PrimaryButton
        height="40px"
        onClick={() => {
          form.validateFields().then(() => onSubmit(form.getFieldsValue()));
        }}
        size="middle"
        htmlType="submit"
        buttonName={t("settings.save-changes", {
          ns: "glossary"
        }).toUpperCase()}
      />
    </>
  );
};

export default SecurityForm;
