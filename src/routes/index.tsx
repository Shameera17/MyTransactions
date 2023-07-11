import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "components/pages/Dashboard";
import Login from "components/pages/Login";
import PageNotFound from "components/pages/PageNotFound";
import Settings from "components/pages/Settings";
import SignUp from "components/pages/SignUp";
import Layout from "components/templates/Layout";
import OtherLayout from "components/templates/OtherLayout";

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
  return <RouterProvider router={router} />;
};

export default Routes;
