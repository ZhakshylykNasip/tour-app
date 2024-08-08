import { createBrowserRouter, Link, Navigate } from "react-router-dom";
// import App from "../App";
import { TourInfo } from "../pages/TourInfo";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { AdminPage } from "../pages/AdminPage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/tourInfo/:tourId",
        element: <TourInfo />,
      },

      {
        path: "/user",
        element: <UserPage />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: (
      <h1>
        404 Not found <Link to={"/"}>go to home</Link>
      </h1>
    ),
  },
]);
