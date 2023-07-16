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
} from "components/atoms";

interface SignUpFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
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
    <Form
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <div className="grid desktop:grid-cols-2 laptop:grid-cols-2 desktop:gap-2 laptop:gap-2 tablet:grid-cols-1">
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
        className=" mt-6"
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields();
        }}
        buttonName={t("button.signup")}
      />
      <span className="flex mt-4">
        <Description
          className="flex justify-start"
          description={t("glossary:signup.have-account")}
        />
        <LinkSentence
          onClick={() => {
            navigate("/signin");
          }}
          level={2}
          className="flex justify-start "
          description={t("glossary:signin.title")}
        />
      </span>
    </Form>
  );
};

export default SignUpForm;
