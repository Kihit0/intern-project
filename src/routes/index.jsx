import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    id: "app",
    path: "",
    element: <App />,
  },
  {
    id: "news",
    path: "/news/:id",
    element: <div>News</div>,
  },
  {
    id: "promotions",
    path: "/promotions/:id",
  },
]);

export default router;
