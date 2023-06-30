import React, { FC } from "react";
import { Form, Input } from "antd";
import { FormInstance, Rule } from "antd/es/form";
interface EmailProps {
  form: FormInstance;
  name: string;
  label: string;
  rules?: Rule[];
}

const Email: FC<EmailProps> = ({ name, label, rules }) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` },
    { type: "email", message: "Please enter a valid email address" },
  ];

  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <Input />
    </Form.Item>
  );
};

export default Email;
