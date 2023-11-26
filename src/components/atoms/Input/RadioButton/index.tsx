import { FC } from "react";

import { Form, Radio } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface RadioButtonProps {
  name: string;
  label?: string;
  id?: string;
}
const RadioButton: FC<RadioButtonProps> = ({ name, id }) => {
  const list = useSelector(
    (state: RootState) => state.transaction.transactionTypes
  );

  return (
    <Form.Item
      rules={[{ required: true, message: "Please select an option" }]}
      name={name}
      initialValue={id || list[0].id}
    >
      <Radio.Group
        style={{
          width: "100%"
        }}
        defaultValue={id || list[0].id}
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
