import React, { useEffect } from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";

import { PrimaryButton, Text } from "components/atoms";

interface GeneralFormProps {
  onSubmit: (values: any) => void;
}

const GeneralForm: React.FC<GeneralFormProps> = ({ onSubmit }) => {
  const [form] = useForm();
  const { t } = useTranslation(["common", "glossary", "validations"]);
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue(userInfo);
  }, [userInfo]);

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
