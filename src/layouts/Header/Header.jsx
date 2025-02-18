import React from 'react'
import notif from "/images/icons/notif.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";


const { Header } = Layout;

export default function Header() {
    const [notifications, setNotifications] = useState([]);
    const { logout } = useUser();
    const [headerLabel, setHeaderlabel] = useState("Your Event’s");
    const [profileImage, setProfileImage] = useState(user?.profile_image);
    const Navigate = useNavigate();
  const location = useLocation();


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
        <Layout className="asasas ">
            <Header className="bg-white  flex items-center justify-between lg:justify-end px-8 py-9 ">
                <div className="lg:hidden">
                    <Button icon={<MenuOutlined />} onClick={() => setCollapsed(false)} />
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
    )
}
