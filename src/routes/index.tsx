import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Layout from "../components/templates/Layout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: undefined, //<ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
