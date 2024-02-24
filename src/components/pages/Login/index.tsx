import { useEffect } from "react";

import useScreenSize from "helpers/useScreenSize";
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
  const { userInfo, token } = useSelector((state: RootState) => state.auth);
  const screenSize = useScreenSize();
  useEffect(() => {
    if (userInfo?.email && token) {
      navigate("/app/dashboard");
    }
  }, [userInfo, token, navigate]);
  const { t } = useTranslation(["glossary"]);
  return (
    <div className="h-full grid laptop:grid-cols-2 desktop:grid-cols-2 tablet:grid-cols-2  gap-4  ">
      {screenSize.width >= 640 && <LayoutImageCard screen="signin" />}
      <div className="flex flex-col justify-center ">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("signin.title")} />
          <Description level={1} description={t("signin.description")} />
          {screenSize.width < 640 && (
            <LayoutImageCard size="small" screen="signin" />
          )}
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
                  error.response.data ?? "Sign in failed! Please try again!"
                )
              );
          }}
        />
      </div>
    </div>
  );
};
export default Login;
