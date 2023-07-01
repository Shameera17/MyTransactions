import React, { FC } from "react";

import { DatePicker, Form, FormInstance } from "antd";
import { Rule } from "antd/es/form";

interface DateProps {
  form: FormInstance;
  name: string;
  label: string;
  rules?: Rule[];
}

const Date: FC<DateProps> = ({ name, label, rules }) => {
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` }
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <DatePicker />
    </Form.Item>
  );
};

export default Date;
