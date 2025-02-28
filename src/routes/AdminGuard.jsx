import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../config/Constants";

const AdminGuard = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;
  const role = userInfo?.user.role;
  if (!token || role != 'admin') {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default AdminGuard;
