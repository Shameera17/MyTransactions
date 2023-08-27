import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "services/user";
import { RootState } from "store";
import { setToken, setUserInfo } from "store/reducers/auth.reducer";

import { Description, Title, showNotification } from "components/atoms";
import { LayoutImageCard, LoginForm } from "components/molecules";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfo) navigate("/app/dashboard");
  }, [userInfo]);
  const { t } = useTranslation(["glossary"]);
  return (
    <div className=" grid grid-cols-2 gap-4 content-center">
      <LayoutImageCard screen="signin" />
      <div className="flex flex-col justify-center ">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("glossary:signin.title")} />
          <Description
            level={1}
            description={t("glossary:signin.description")}
          />
        </div>
        <LoginForm
          onSubmit={values => {
            login({ password: values.password, email: values.email })
              .then(result => {
                dispatch(setToken({ token: result.token }));
                dispatch(setUserInfo(result.user));
                navigate("/app/dashboard");
              })
              .catch(error =>
                showNotification(
                  "error",
                  "Error",
                  error.response.data || "Sign in failed! Please try again!"
                )
              );
          }}
        />
      </div>
    </div>
  );
};
export default Login;
