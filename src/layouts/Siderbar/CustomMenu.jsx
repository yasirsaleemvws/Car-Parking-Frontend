import React, { useEffect, useState } from 'react'
import { Menu } from "antd";

import { ADMIN_ROUTES } from "../../config/Constants";
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { CalendarOutlined, DashboardOutlined, SettingOutlined, TeamOutlined, UserSwitchOutlined } from '@ant-design/icons';

export default function CustomMenu() {
    const [selected, setSelected] = useState();
    const Navigate = useNavigate();
    const location = useLocation();
    const { user } = useUser();

    useEffect(() => {
        if (location.pathname.includes(ADMIN_ROUTES?.DASHBOARED)) {
            setSelected("0");
        } else if (location.pathname.includes(ADMIN_ROUTES?.SPONSER)) {
            setSelected("2");
        } else if (location.pathname.includes(ADMIN_ROUTES?.EVENT)) {
            setSelected("1");
        } else if (location.pathname.includes(ADMIN_ROUTES?.ORGANIZER)) {
            setSelected("3");
        }
    }, [location]);

    return (
        <Menu
            mode="inline"
            selectedKeys={[selected]}
            className="text-lg !border-r-0 flex flex-col p-3 gap-5"
            onClick={(e) => setSelected(e.key)}
        >
            {user && user?.user_type == "admin" ? (
                <>
                    <Menu.Item key="0" className="p-6" onClick={() => { Navigate(ADMIN_ROUTES?.DASHBOARED); }} >
                        {selected === "0" ? <DashboardOutlined style={{ fontSize: "20px", color: "#fff" }} /> : <DashboardOutlined style={{ fontSize: "20px" }} />}
                        <span className="ml-2">Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="3" className="p-6" onClick={() => { Navigate(ADMIN_ROUTES?.ORGANIZER); }} >
                        {selected === "3" ? <UserSwitchOutlined style={{ fontSize: "20px", color: "#fff" }} /> : <UserSwitchOutlined style={{ fontSize: "20px" }} />}
                        <span className="ml-2">Organizers</span>
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item key="1" className="p-6" onClick={() => { Navigate(ADMIN_ROUTES?.EVENT); }} >
                        {selected === "1" ? <CalendarOutlined style={{ fontSize: "20px", color: "#fff" }} /> : <CalendarOutlined style={{ fontSize: "20px" }} />}
                        <span className="ml-3">Event</span>
                    </Menu.Item>
                </>
            )}
            <Menu.Item key="2" className="p-6 " style={{ paddingLeft: "21px" }} onClick={() => { Navigate(ADMIN_ROUTES?.SPONSER); }} >
                {selected === "2" ? <TeamOutlined style={{ fontSize: "20px", color: "#fff" }} /> : <TeamOutlined style={{ fontSize: "20px" }} />}
                <span className="ml-2">Sponsors</span>
            </Menu.Item>
            <Menu.Item key="4" className="p-6 !absolute bottom-2" style={{ paddingLeft: "21px" }} onClick={() => { Navigate(ADMIN_ROUTES?.SETTINGS); }} >
                {selected === "4" ? <SettingOutlined style={{ fontSize: "20px", color: "#fff" }} /> : <SettingOutlined style={{ fontSize: "20px" }} />}
                <span className="ml-2">Setting</span>
            </Menu.Item>
        </Menu>
    )
}