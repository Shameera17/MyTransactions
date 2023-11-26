import React from "react";

import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/lib/form";

interface PasswordProps {
  name: string;
  label: string;
  rules?: Rule[];
  size?: SizeType;
}

const Password: React.FC<PasswordProps> = ({ name, label, rules, size }) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` }
  ];
  return (
    <Form.Item
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <Input.Password placeholder={label} size={size} />
    </Form.Item>
  );
};

export default Password;
