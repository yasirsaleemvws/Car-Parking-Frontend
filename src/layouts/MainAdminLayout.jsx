import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Siderbar from "./Siderbar/Sidebar";
import notif from "/images/icons/notif.png";
import Profil from "/images/icons/default-profile.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, APP_ROUTES } from "../config/Constants";
import { useUser } from "../Context/UserContext";

const { Header } = Layout;

function MainAdminLayout() {
  const [notifications, setNotifications] = useState([]);
  const { logout } = useUser();
  const [headerLabel, setHeaderlabel] = useState("Your Event’s");
  const [collapsed, setCollapsed] = useState(true);
  const Navigate = useNavigate();
  const { user } = useUser();
  const [profileImage, setProfileImage] = useState(user?.profile_image);

  useEffect(() => {
    setProfileImage(user?.profile_image || Profil);
  }, [user]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes(ADMIN_ROUTES?.SPONSER)) {
      setHeaderlabel("Sponsors");
    } else if (location.pathname.includes(ADMIN_ROUTES?.EVENT)) {
      setHeaderlabel("Your Event’s");
    } else if (location.pathname.includes(ADMIN_ROUTES?.CREATE_EVENT)) {
      setHeaderlabel("Create Event");
    } else if (location.pathname.includes(ADMIN_ROUTES?.DASHBOARED)) {
      setHeaderlabel("Dashboared");
    } else if (location.pathname.includes(ADMIN_ROUTES?.SPONSER)) {
      setHeaderlabel("Find Sponsor");
    } else if (location.pathname.includes(ADMIN_ROUTES?.SETTINGS)) {
      setHeaderlabel("Setting");
    } else if (location.pathname.includes(ADMIN_ROUTES?.VIEW_SPONSER)) {
      setHeaderlabel("About Sponsor");
    } else if (location.pathname.includes(ADMIN_ROUTES?.VIEW_EVENT)) {
      setHeaderlabel("About Event");
    } else if (location.pathname.includes(ADMIN_ROUTES?.ORGANIZER)) {
      setHeaderlabel("Organizers");
    }
  }, [location]);


  const notificationMenu = (
    <Menu>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <Menu.Item key={index} className="flex items-center space-x-4 py-2" style={{ borderBottom: "1px solid #D5D2D1" }}>
            <strong className="font-semibold mr-2">{index + 1}</strong>
            <div>
              <h4 className="font-medium text-sm">{notification.title}</h4>
              <p className="text-xs text-gray-500">{notification.message}</p>
            </div>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item key="no-notifications">
          <div className="text-center text-gray-500 text-sm">No Notifications</div>
        </Menu.Item>
      )}
    </Menu>
  );

  const menu = (
    <Menu className="flex flex-col">
      <Menu.Item key="logout">
        <Link
          className="text-sm font-montserrat font-normal py-[7px] px-5"
          onClick={async () => {
            await logout();
            Navigate(APP_ROUTES?.LOGIN);
          }}
        >
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Siderbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="asasas ">
        <Header className="bg-white  flex items-center justify-between px-8 py-14 rounded ml-8" style={{ borderRadius: "0 0 0 12px" }}>
          <div className="lg:hidden">
            <Button icon={<MenuOutlined />} onClick={() => setCollapsed(false)} />
          </div>
          <div>
            <h2 className="text-xl font-semibold font-montserrat">{headerLabel}</h2>
          </div>
          <div className="flex items-center space-x-4">
            <Dropdown overlay={notificationMenu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} className="leading-normal">
                <img src={notif} alt="Notifications" className="w-15 h-15" />
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <img src={profileImage} alt="User Avatar" className="rounded-full cursor-pointer w-[52px] h-[52px] object-cover" />
            </Dropdown>
          </div>
        </Header>
        <div className="admin_body ml-8 mr-6">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
}

export default MainAdminLayout;
