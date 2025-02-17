import React from "react";
import { Layout, Drawer } from "antd";
import "antd/dist/reset.css";
import logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
import CustomMenu from "./CustomMenu";

const { Sider } = Layout;

const Siderbar = ({ collapsed, setCollapsed }) => {
  const Navigate = useNavigate();

  return (
    <>
      <Sider width={250} className="hidden lg:block bg-[white] min-h-screen">
        <div className="fixed max-w-[240px] left-[10px] h-full">
          <div className="p-4 flex items-center justify-center mt-5 cursor-pointer">
            <img className="h-[55px]" src={logo} alt="logo" onClick={() => Navigate("/login")} />
            <h2 className="font-semibold text-xl">Car Parking</h2>
          </div>
          <CustomMenu />
        </div>
      </Sider>

      <Drawer
        title="The Sponsor"
        placement="left"
        onClose={() => setCollapsed(true)}
        open={!collapsed}
        styles={{ padding: 0 }}
      >
        <CustomMenu />
      </Drawer>
    </>
  );
};

export default Siderbar;
