import React from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";

interface SignUpFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [form] = useForm();

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
    ></Form>
  );
};

export default SignUpForm;
