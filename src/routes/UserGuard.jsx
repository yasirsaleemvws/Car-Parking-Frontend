import React from "react";
import { Navigate } from "react-router-dom";
// import { useUser } from "../Context/UserContext";
import { APP_ROUTES } from "../config/Constants";
import { useAxiosInterceptors } from "../config/axios";

const UserGuard = ({ children }) => {
  useAxiosInterceptors();

  // const { user } = useUser();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={APP_ROUTES?.LOGIN} />;
  }

  return children;
};

export default UserGuard;
