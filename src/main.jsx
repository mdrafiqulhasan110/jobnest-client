import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Router/MainRouter";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={MainRouter}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
