import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import News from "../pages/News";

const router = createBrowserRouter([
  {
    id: "app",
    path: "",
    element: <App />,
    children: [
      {
        id: "Main",
        path: "",
        element: <Main />,
      },
    ],
  },
  {
    id: "news",
    path: "/news/:id",
    element: <News />,
  },
  {
    id: "promotions",
    path: "/promotions/:id",
  },
]);

export default router;
