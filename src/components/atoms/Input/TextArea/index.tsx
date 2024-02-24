import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";

interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: Rule[];
  rows?: number;
}

const TextArea = ({
  name,
  label,
  rules,
  rows = 4,
  placeholder
}: TextAreaProps) => {
  const initialRules: Rule[] = [
    { required: true, message: label ? `${label} is required` : "Required" }
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
    >
      <Input.TextArea placeholder={placeholder} rows={rows} />
    </Form.Item>
  );
};

export default TextArea;
