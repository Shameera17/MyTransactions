import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "components/pages/Dashboard";
import PageNotFound from "components/pages/PageNotFound";
import Settings from "components/pages/Settings";
import Layout from "components/templates/Layout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/app",
      element: <Layout />,
      errorElement: <PageNotFound />, //<ErrorPage />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "settings", element: <Settings /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
