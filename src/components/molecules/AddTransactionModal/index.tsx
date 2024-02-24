import { useEffect } from "react";

import { Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { create, update } from "services/transaction";
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
              error.response.data ?? "Please try again!"
            );
          });
    });
  };

  useEffect(() => {
    if (isModalOpen.flag && isModalOpen.mode === "edit" && isModalOpen.record) {
      form.setFieldsValue({
        description: isModalOpen.record.description,
        amount: isModalOpen.record.amount,
        transactionTypeId: isModalOpen.record.type.id,
        createdDate: dayjs(isModalOpen.record.createdDate)
      });
    }
  }, [isModalOpen]);

  return (
    <Modal
      centered
      open={isModalOpen.flag}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      closeIcon={undefined}
      closable={false} // Hide the close button
      onCancel={() => {
        dispatch(viewModal(false));
        form.resetFields();
      }}
    >
      <Form form={form} onFinish={handleFinish}>
        <RadioButton
          id={
            isModalOpen.flag && isModalOpen.record?.type?.id
              ? isModalOpen.record?.type?.id
              : undefined
          }
          name="transactionTypeId"
        />
        <Number placeholder="Amount" name="amount" />
        <Date name="createdDate" />
        <TextArea placeholder="Description" name={"description"} />
        <div className=" flex flex-col gap-3">
          <PrimaryButton
            className="w-full"
            buttonName={"Cancel"}
            ghost
            onClick={() => {
              dispatch(viewModal(false));
              form.resetFields();
            }}
          />
          {isModalOpen.mode !== "edit" && (
            <PrimaryButton
              className="w-full"
              buttonName={"Add"}
              htmlType="submit"
            />
          )}
          {isModalOpen.mode === "edit" && (
            <PrimaryButton
              className="w-full"
              buttonName={"Update"}
              onClick={() => {
                update(
                  {
                    id: isModalOpen.record?.transactionId,
                    ...form.getFieldsValue()
                  },

                  token!
                )
                  .then(result => {
                    showNotification(
                      "success",
                      "Success",
                      result ?? "Transaction created!"
                    );
                    form.resetFields();
                    dispatch(viewModal(false));
                    dispatch(refresh());
                  })
                  .catch(error => {
                    showNotification(
                      "error",
                      "Error",
                      error.response.data ?? "Please try again!"
                    );
                  });
              }}
            />
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default AddTransactionModal;
