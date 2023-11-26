import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { validateConfirmPassword } from "helpers/formValidations";
import { useTranslation } from "react-i18next";

import { Password, PrimaryButton } from "../../atoms";

interface SecurityFormProps {
  onSubmit: (values: any, reset: any) => void;
}

const SecurityForm: React.FC<SecurityFormProps> = ({ onSubmit }) => {
  const [form] = useForm();
  const { t } = useTranslation();

  return (
    <>
      <Form form={form} className="grid gap-2">
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
          form
            .validateFields()
            .then(() => onSubmit(form.getFieldsValue(), form.resetFields));
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
