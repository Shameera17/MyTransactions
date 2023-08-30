import { FC } from "react";

import { Form, Radio } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface RadioButtonProps {
  name: string;
  label?: string;
}
const RadioButton: FC<RadioButtonProps> = ({ name }) => {
  const list = useSelector(
    (state: RootState) => state.transaction.transactionTypes
  );

  return (
    <Form.Item
      rules={[{ required: true, message: "Please select an option" }]}
      name={name}
    >
      <Radio.Group
        style={{
          width: "100%"
        }}
        defaultValue="a"
        buttonStyle="solid"
      >
        {list.map(type => {
          return (
            <Radio.Button
              style={{
                width: "50%"
              }}
              value={type.id}
            >
              {type.name}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioButton;
