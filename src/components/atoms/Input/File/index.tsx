import { Form, Upload } from "antd";
import { Rule } from "antd/lib/form";

interface FileInputProps {
  name: string;
  label: string;
  rules?: Rule[];
}

const FileInput = ({ name, label, rules }: FileInputProps) => {
  const beforeUpload = (file: File) => {
    // Add custom file validation logic here if needed
    return true;
  };
  const initialRules: Rule[] = [
    { required: true, message: `${label} is required` }
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules?.length ? [...initialRules, ...rules] : initialRules}
      valuePropName="fileList"
      getValueFromEvent={e => e.fileList}
    >
      <Upload beforeUpload={beforeUpload} multiple={false}>
        <span>{/* <UploadOutlined /> Click to upload */}</span>
      </Upload>
    </Form.Item>
  );
};

export default FileInput;
