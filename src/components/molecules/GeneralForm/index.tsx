import { useEffect } from "react";

import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "services/user";
import { RootState } from "store";
import { setToken, setUserInfo } from "store/reducers/auth.reducer";

import { PrimaryButton, Text, showNotification } from "components/atoms";

const GeneralForm = () => {
  const [form] = useForm();
  const { t } = useTranslation(["common", "glossary", "validations"]);
  const { userInfo, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    form.setFieldsValue(userInfo);
  }, [userInfo]);

  return (
    <>
      <Form form={form}>
        <Text name={"email"} size="large" label={t("form.email")} />
        <Text name={"firstName"} size="large" label={t("form.first-Name")} />
        <Text name={"lastName"} size="large" label={t("form.last-Name")} />
      </Form>
      <PrimaryButton
        height="40px"
        size="middle"
        onClick={() => {
          form.validateFields().then(async () => {
            await updateUser(
              {
                id: userInfo?.id!,
                ...form.getFieldsValue()
              },
              token!
            )
              .then(result => {
                {
                  dispatch(setToken({ token: result.token }));
                  dispatch(setUserInfo(result.user));
                  showNotification(
                    "success",
                    "Success",
                    "Updated successfully"
                  );
                }
              })
              .catch(error => {
                showNotification(
                  "error",
                  "Error",
                  error.response.data || "Please try again!"
                );
              });
          });
        }}
        buttonName={t("glossary:settings.save-changes").toUpperCase()}
      />
    </>
  );
};

export default GeneralForm;
