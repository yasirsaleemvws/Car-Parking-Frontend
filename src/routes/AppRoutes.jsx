import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/login/Login";
import { APP_ROUTES } from "../config/Constants";
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
import MemberShip from "../pages/access-rule/membership/MemberShip";
import Blocked from "../pages/access-rule/blocked/Blocked";
import Guaranted from "../pages/access-rule/guaranted/Guaranted";
import SingleCamera from "../pages/parking-section/camera-view/single-camera/SingleCamera";
import CameraView from "../pages/parking-section/camera-view/CameraView";
import ParkingArea from "../pages/parking-section/parking-area/ParkingArea";

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
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} >
            <Route path={APP_ROUTES?.PARKING} element={<Parking />} />
            <Route path={APP_ROUTES?.PARKING_OVERVIEW} element={<ParkingOverview />} />
            <Route path={APP_ROUTES?.PARKING_ANALYTICS} element={<ParkingAnalytics />} />
            <Route path={APP_ROUTES?.PARKING_SECTION} element={<ParkingSection />} />
            <Route path={APP_ROUTES?.ACCESS_RULE} element={<AccessRule />} />
            <Route path={APP_ROUTES?.FINANCE} element={<Finance />} />
            <Route path={APP_ROUTES?.TEAM} element={<Team />} />
            <Route path={APP_ROUTES?.AVG_PARKING} element={<AvgParking />} />
            <Route path={APP_ROUTES?.PEAK_TRAFFIC} element={<PeakTraffic />} />
            <Route path={APP_ROUTES?.AVG_VEHICLE} element={<AvgVehicle />} />
            <Route path={APP_ROUTES?.AVG_OCCUPANCY} element={<AvgOccupancy />} />
            <Route path={APP_ROUTES?.GUARANTED} element={<Guaranted />} />
            <Route path={APP_ROUTES?.MEMBERSHIP} element={<MemberShip />} />
            <Route path={APP_ROUTES?.BLOCKED} element={<Blocked />} />
            <Route path={APP_ROUTES?.PARKING_AREA} element={<ParkingArea />} />
            <Route path={APP_ROUTES?.PARKING_CAMERA} element={<CameraView />} />
            <Route path={APP_ROUTES?.PARKING_CAMERA_DETAILS} element={<SingleCamera />} />
            <Route path={APP_ROUTES?.SETTINGS} element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;







