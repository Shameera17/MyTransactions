import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/lib/form";

interface PasswordProps {
  name: string;
  label: string;
  rules?: Rule[];
  size?: SizeType;
  required?: boolean;
}

const Password = ({ name, label, rules, size, required }: PasswordProps) => {
  const initialRules: Rule[] = [
    {
      required: required !== undefined ? required : true,
      message: `${label} is required`
    }
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
