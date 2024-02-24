import React, { Suspense } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

const Dashboard = React.lazy(() => import("components/pages/Dashboard"));
const Login = React.lazy(() => import("components/pages/Login"));
const PageNotFound = React.lazy(() => import("components/pages/PageNotFound"));
const Settings = React.lazy(() => import("components/pages/Settings"));
const SignUp = React.lazy(() => import("components/pages/SignUp"));
const Layout = React.lazy(() => import("components/templates/Layout"));
const OtherLayout = React.lazy(
  () => import("components/templates/OtherLayout")
);
const Loading = React.lazy(() => import("components/molecules/Loading"));
const ForgotPassword = React.lazy(
  () => import("components/pages/ForgotPassword")
);
const CheckYourEmail = React.lazy(
  () => import("components/pages/CheckYourEmail")
);
const PasswordRestSuccess = React.lazy(
  () => import("components/pages/PasswordRestSuccess")
);
const SetNewPassword = React.lazy(
  () => import("components/pages/SetNewPassword")
);

const Routes = (props: { isLoggedIn: boolean }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OtherLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: props.isLoggedIn ? (
            <Navigate to="/app/dashboard" />
          ) : (
            <Navigate to="/signin" />
          )
        },
        { path: "signin", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "forgotpassword", element: <ForgotPassword /> },
        { path: "checkyouremail", element: <CheckYourEmail /> },
        { path: "passwordrestsuccess", element: <PasswordRestSuccess /> },
        { path: "setnewpassword", element: <SetNewPassword /> }
      ]
    },
    {
      path: "/app",
      element: props.isLoggedIn ? <Layout /> : <Navigate to="/signin" />,
      errorElement: <PageNotFound />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "settings", element: <Settings /> }
      ]
    }
  ]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Routes;
