import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Profile from "../pages/Profile/Profile";

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
    element: <NewsDetails />,
  },
  {
    id: "promotions",
    path: "/promotions/:id",
  },
  {
    id: "profile",
    path: "/profile",
    element: <Profile />
  }
]);

export default router;
