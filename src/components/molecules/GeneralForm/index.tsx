import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PrimaryButton, Text } from "components/atoms";

interface GeneralFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();
  const { t } = useTranslation(["common", "glossary", "validations"]);
  const handleFinish = (values: any) => {
    onSubmit(values);
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
        onFinishFailed={handleFinishFailed}
      >
        <Text name={"email"} size="large" label={t("form.email")} />
        <Text name={"firstName"} size="large" label={t("form.first-Name")} />
        <Text name={"lastName"} size="large" label={t("form.last-Name")} />
      </Form>
      <PrimaryButton
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields();
        }}
        buttonName={t("glossary:settings.save-changes").toUpperCase()}
      />
    </>
  );
};

export default GeneralForm;
