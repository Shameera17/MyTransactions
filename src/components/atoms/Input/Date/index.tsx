import { FC } from "react";

import { DatePicker, Form } from "antd";
import { Rule } from "antd/es/form";

interface DateProps {
  name: string;
  label?: string;
  rules?: Rule[];
}

const Date: FC<DateProps> = ({ name, label, rules }) => {
  const initialRules: Rule[] = [
    { required: true, message: label ? `${label} is required` : "Required" }
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <DatePicker format="YYYY-MM-DD" className=" w-full" />
    </Form.Item>
  );
};

export default Date;
