import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { TourInfo } from "../pages/TourInfo";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { AdminPage } from "../pages/AdminPage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/MainPage";
import { PrivateRoute } from "./PrivateRoute";

const authData = JSON.parse(localStorage.getItem("auth")) || {};
const role = authData?.data?.role;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute
            Component={<MainPage />}
            fallBackPath="/login"
            isAllowed={!role}
          />
        ),
      },
      {
        path: "/tourInfo/:tourId",
        element: (
          <PrivateRoute
            Component={<TourInfo />}
            fallBackPath="/login"
            isAllowed={!role}
          />
        ),
      },

      {
        path: "/user",
        element: (
          <PrivateRoute
            Component={<UserPage />}
            fallBackPath="/login"
            isAllowed={role !== "USER"}
          />
        ),
      },

      {
        path: "/admin",
        element: (
          <PrivateRoute
            Component={<AdminPage />}
            fallBackPath="/login"
            isAllowed={role !== "ADMIN"}
          />
        ),
      },
    ],
  },

  {
    path: "/register",
    element: (
      <RegisterPage
        Component={<RegisterPage />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
  {
    path: "/login",
    element: (
      <PrivateRoute
        Component={<LoginPage />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
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
