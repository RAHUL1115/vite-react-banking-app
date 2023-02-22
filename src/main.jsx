import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import Login from './pages/Login';
import NotFound from "./pages/404";
import UserDashboard from "./pages/User/UserDashboard"
import AdminUsersDashboard from "./pages/Admin/AdminUsersDashboard";
import AdminBanksDashboard from "./pages/Admin/AdminBanksDashboard";
import UserAccountPage from "./pages/User/UserAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin/users",
    element: <AdminUsersDashboard />,
  },
  {
    path: "/admin/user/:userId",
    element: <UserDashboard />,
  },
  {
    path: "/admin/banks",
    element: <AdminBanksDashboard />,
  },
  {
    path: "/user",
    element: <UserDashboard />,
  },
  {
    path: "/user/account/:accountId",
    element: <UserAccountPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);