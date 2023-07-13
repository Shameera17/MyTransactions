import { FC } from "react";

import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/es/form";

interface TextProps {
  name: string;
  label: string;
  rules?: Rule[];
  size?: SizeType;
  status?: "warning" | "error";
}

const Text: FC<TextProps> = ({ name, label, rules, size, status }) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` }
  ];
  return (
    <Form.Item
      className="custom-form-item"
      name={name}
      rules={
        rules?.length
          ? [...initialRules, ...rules]
          : [{ required: true, message: `${label} is required` }]
      }
    >
      <Input
        className=" border-cyan-500 "
        status={status}
        placeholder={label}
        size={size}
      />
    </Form.Item>
  );
};

export default Text;
