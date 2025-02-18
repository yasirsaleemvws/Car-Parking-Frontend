import React, { useState } from "react";
import { Layout } from "antd";
import Siderbar from "./Siderbar/Sidebar";
import Header from "./Header/Header";


function MainAdminLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
      <Siderbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
    </Layout>
  );
}

export default MainAdminLayout;
