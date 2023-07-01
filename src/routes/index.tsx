import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OtherLayout from "../components/templates/OtherLayout";
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
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
