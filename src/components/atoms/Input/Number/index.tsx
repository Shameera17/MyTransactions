import { FC } from "react";

import { Form, InputNumber } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/es/form";

interface NumberProps {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: Rule[];
  size?: SizeType;
  status?: "warning" | "error";
}

const Number: FC<NumberProps> = ({
  name,
  label,
  rules,
  size,
  status,
  placeholder
}) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` }
  ];
  return (
    <Form.Item
      label={label}
      className="custom-form-item"
      name={name}
      rules={
        rules?.length
          ? [...initialRules, ...rules]
          : [
              {
                required: true,
                message: label ? `${label} is required` : "Required"
              }
            ]
      }
    >
      <InputNumber
        className=" border-cyan-500 w-full  "
        status={status}
        placeholder={placeholder}
        size={size}
      />
    </Form.Item>
  );
};

export default Number;
