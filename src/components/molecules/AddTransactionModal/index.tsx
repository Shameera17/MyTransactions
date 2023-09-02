import { Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { create } from "services/transaction";
import { RootState } from "store";
import { refresh, viewModal } from "store/reducers/transaction.reducer";

import {
  Date,
  PrimaryButton,
  RadioButton,
  TextArea,
  showNotification
} from "components/atoms";
import Number from "components/atoms/Input/Number";

const AddTransactionModal = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.transaction);
  const { token, userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [form] = useForm();
  const handleFinish = (values: any) => {
    form.validateFields().then(() => {
      token &&
        create({ ...values, userId: userInfo?.id, name: "test" }, token)
          .then(result => {
            showNotification("success", "Success", "Transaction created!");
            form.resetFields();
            dispatch(viewModal(false));
            dispatch(refresh());
          })
          .catch(error => {
            showNotification(
              "error",
              "Error",
              error.response.data || "Please try again!"
            );
          });
    });
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };
  return (
    <Modal
      centered
      open={isModalOpen}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      closeIcon={undefined}
      closable={false} // Hide the close button
      onCancel={() => dispatch(viewModal(false))}
    >
      <Form
        form={form}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        onValuesChange={(e, f) => console.log(f)}
      >
        <RadioButton name="transactionTypeId" />
        <Number placeholder="Amount" name="amount" />
        <Date name="createdDate" />
        <TextArea placeholder="Description" name={"description"} />
        <div className=" flex flex-col gap-3">
          <PrimaryButton
            className="w-full"
            buttonName={"Cancel"}
            ghost
            onClick={() => dispatch(viewModal(false))}
          />
          <PrimaryButton
            className="w-full"
            buttonName={"Add"}
            htmlType="submit"
          />
        </div>
      </Form>
    </Modal>
  );
};

export default AddTransactionModal;
