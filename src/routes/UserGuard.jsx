import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../config/Constants";
import { useAxiosInterceptors } from "../config/axios";

const UserGuard = ({ children }) => {
  useAxiosInterceptors();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;
  if (!token) {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default UserGuard;
