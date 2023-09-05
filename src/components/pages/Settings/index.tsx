import { Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, updateUserPassword } from "services/user";
import { RootState } from "store";
import { signout } from "store/reducers/auth.reducer";

import {
  Description,
  SecondaryButton,
  showNotification
} from "components/atoms";
import { GeneralForm, SecurityForm } from "components/molecules";

const Settings = () => {
  const { userInfo, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const confirm = () => {
    removeUser(userInfo?.id!, token!)
      .then(result => {
        showNotification("success", "Success", result || "Account deleted");
        dispatch(signout());
      })
      .catch(error => {
        showNotification(
          "error",
          "Error",
          error.response.data || "Please try again!"
        );
      });
  };
  return (
    <div className="grid w-1/2 gap-y-10 ">
      <div>
        <GeneralForm />
      </div>
      <div>
        <SecurityForm
          onSubmit={async formValues => {
            await updateUserPassword(
              { id: userInfo?.id!, ...formValues, email: userInfo?.email },
              token!
            )
              .then(result => {
                showNotification(
                  "success",
                  "Success",
                  result || "Updated successully"
                );
              })
              .catch(error => {
                showNotification(
                  "error",
                  "Error",
                  error.response.data || "Please try again!"
                );
              });
          }}
        />
      </div>
      <div
        className=" p-4"
        style={{
          borderRadius: "8px",
          border: "2px dashed #EF5350",
          height: "72px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Description
          level={1}
          className=" text-danger text-center"
          description={"Delete user account"}
        />
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete you account?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
          placement="bottomRight"
          okType="default"
        >
          <SecondaryButton className=" w-36" buttonName={"Delete"} />
        </Popconfirm>
      </div>
    </div>
  );
};
export default Settings;
