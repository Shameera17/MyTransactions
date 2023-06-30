import React from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";

interface PasswordProps {
  name: string;
  label: string;
  rules?: Rule[];
}

const Password: React.FC<PasswordProps> = ({ name, label, rules }) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` },
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <Input.Password />
    </Form.Item>
  );
};

export default Password;
