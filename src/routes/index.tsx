import React, { Suspense } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Dashboard = React.lazy(() => import("components/pages/Dashboard"));
const Login = React.lazy(() => import("components/pages/Login"));
const PageNotFound = React.lazy(() => import("components/pages/PageNotFound"));
const Settings = React.lazy(() => import("components/pages/Settings"));
const SignUp = React.lazy(() => import("components/pages/SignUp"));
const Layout = React.lazy(() => import("components/templates/Layout"));
const OtherLayout = React.lazy(
  () => import("components/templates/OtherLayout")
);

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OtherLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: "signin", element: <Login /> },
        { path: "signup", element: <SignUp /> }
      ]
    },
    {
      path: "/app",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "settings", element: <Settings /> }
      ]
    }
  ]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Routes;
