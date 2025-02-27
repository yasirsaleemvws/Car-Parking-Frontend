import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../config/Constants";
import { useAxiosInterceptors } from "../config/axios";

const UserGuard = ({ children }) => {
  useAxiosInterceptors();

  const user = localStorage.getItem("userInfo");
  const token = JSON.parse(user)?.token;
  if (!token) {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default UserGuard;
