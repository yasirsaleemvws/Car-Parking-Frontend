import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/login/Login";
import { ADMIN_ROUTES, APP_ROUTES } from "../config/Constants";
import Signup from "../pages/Auth/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Parking from "../pages/parking/Parking";
import DashboardLayout from "../layouts/DashboardLayout";
import AccessRule from "../pages/access-rule/AccessRule";
import Finance from "../pages/finance/Finance";
import Team from "../pages/team/Team";
import ParkingAnalytics from "../pages/parking-analytics/ParkingAnalytics";
import ParkingSection from "../pages/parking-section/ParkingSection";
import ParkingOverview from "../pages/parking-overview/ParkingOverview";
import PeakTraffic from "../pages/parking-analytics/peak-traffic/PeakTraffic";
import AvgOccupancy from "../pages/parking-analytics/avg-occupancy/AvgOccupancy";
import AvgParking from "../pages/parking-analytics/avg-parking/AvgParking";
import AvgVehicle from "../pages/parking-analytics/avg-vehicle/AvgVehicle";
import Settings from "../pages/settings/Settings";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path={APP_ROUTES?.HOME} element={<Login />} />
            <Route path={APP_ROUTES?.LOGIN} element={<Login />} />
            <Route path={APP_ROUTES?.SIGN_UP} element={<Signup />} />
          </Route>
          <Route element={<DashboardLayout />} >
            {/* <Route element={<ProtectedRoute>  </ProtectedRoute>} > */}
            <Route path={ADMIN_ROUTES?.PARKING} element={<Parking />} />
            <Route path={ADMIN_ROUTES?.PARKING_OVERVIEW} element={<ParkingOverview />} />
            <Route path={ADMIN_ROUTES?.PARKING_ANALYTICS} element={<ParkingAnalytics />} />
            <Route path={ADMIN_ROUTES?.PARKING_SECTION} element={<ParkingSection />} />
            <Route path={ADMIN_ROUTES?.ACCESS_RULE} element={<AccessRule />} />
            <Route path={ADMIN_ROUTES?.FINANCE} element={<Finance />} />
            <Route path={ADMIN_ROUTES?.TEAM} element={<Team />} />
            <Route path={ADMIN_ROUTES?.AVG_PARKING} element={<AvgParking />} />
            <Route path={ADMIN_ROUTES?.PEAK_TRAFFIC} element={<PeakTraffic />} />
            <Route path={ADMIN_ROUTES?.AVG_VEHICLE} element={<AvgVehicle />} />
            <Route path={ADMIN_ROUTES?.AVG_OCCUPANCY} element={<AvgOccupancy />} />
            <Route element={<Settings />}>
              <Route path={ADMIN_ROUTES?.SETTINGS} element={<AvgOccupancy />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;





