import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../config/Constants";

const AdminGuard = ({ children }) => {

  // const { user } = useUser();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token || !role) {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default AdminGuard;
