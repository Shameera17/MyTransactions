import React from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";

interface TextAreaProps {
  name: string;
  label: string;
  rules?: Rule[];
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  rules,
  rows = 4,
}) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` },
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <Input.TextArea rows={rows} />
    </Form.Item>
  );
};

export default TextArea;
