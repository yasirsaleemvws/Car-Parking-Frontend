import React, { useState } from "react";
import { Layout } from "antd";
import Siderbar from "./Siderbar/Sidebar";
import Header from "./Header/Header";
import { useAxiosInterceptors } from "../config/axios";


function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(true);
  useAxiosInterceptors();

  return (
    <Layout>
      <Siderbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
    </Layout>
  );
}

export default DashboardLayout;
