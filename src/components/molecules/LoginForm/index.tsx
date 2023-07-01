import React from "react";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Text } from "../../atoms";

interface LoginFormProps {
  onSubmit: (values: any) => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    form.validateFields().then(() => {
      onSubmit(values);
    });
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      className=""
      onFinishFailed={handleFinishFailed}
    >
      <Text name={"firstName"} size="large" label={"First Name"} />
      <Text name={"lastName"} size="large" label={"Last Name"} />
    </Form>
  );
};

export default LoginForm;
