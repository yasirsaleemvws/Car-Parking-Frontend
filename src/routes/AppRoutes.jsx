import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/login/Login";
import { ADMIN_ROUTES, APP_ROUTES } from "../config/Constants";
import Signup from "../pages/Auth/Signup/Signup";
import Dashboard from "../pages/dashbaord/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import MainAdminLayout from "../layouts/MainAdminLayout";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path={APP_ROUTES?.LOGIN} element={<Login />} />
            <Route path={APP_ROUTES?.SIGN_UP} element={<Signup />} />
          </Route>
          <Route element={<MainAdminLayout />} >
            {/* <Route element={<ProtectedRoute>  </ProtectedRoute>} > */}
            <Route path={ADMIN_ROUTES?.DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
