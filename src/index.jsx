import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const reactApp = createRoot(document.getElementById("react-app"));

reactApp.render(<RouterProvider router={router} />);
