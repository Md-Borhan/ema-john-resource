import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import loaderProducts from "./loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Shop></Shop> },
      {
        path: "/orders",
        element: <Order></Order>,
        loader: loaderProducts,
      },
      { path: "/inventory", element: <Inventory></Inventory> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
