import React from "react";
import { Navigate } from "react-router-dom";
// import { useUser } from "../Context/UserContext";
import { APP_ROUTES } from "../config/Constants";
import { useAxiosInterceptors } from "../config/axios";

const AdminGuard = ({ children }) => {
  useAxiosInterceptors();

  // const { user } = useUser();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token || !role) {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default AdminGuard;
