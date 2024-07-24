import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import { store } from "./redux/store.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={routes} />
        <Toaster position="top-right" />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
