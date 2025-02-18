import React, { useEffect, useState } from 'react'
import { Menu } from "antd";
import { ADMIN_ROUTES } from "../../config/Constants";
import { useLocation, useNavigate } from 'react-router-dom';
import { DashboardOutlined, SettingOutlined } from '@ant-design/icons';

export default function CustomMenu() {
    const [selected, setSelected] = useState();
    const Navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes(ADMIN_ROUTES?.PARKING)) {
            setSelected("1");
        }
    }, [location]);

    return (
        <Menu
            mode="inline"
            selectedKeys={[selected]}
            className="text-lg !border-r-0 flex flex-col p-3 gap-0"
            onClick={(e) => setSelected(e.key)}
        >

            <Menu.Item key="1" className="p-1" onClick={() => { Navigate(ADMIN_ROUTES?.PARKING); }} >
                <img src="/images/sidebar/1.png" alt="" />
                <span className="ml-2">Parking</span>
            </Menu.Item>

            <Menu.Item key="2" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.PARKING_OVERVIEW); }} >
                <img src="/images/sidebar/2.png" alt="" />
                <span className="ml-2">Parking Overview</span>
            </Menu.Item>

            <Menu.Item key="3" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.PARKING_ANALYTICS); }} >
                <img src="/images/sidebar/3.png" alt="" />
                <span className="ml-2">Parking Analytics</span>
            </Menu.Item>

            <Menu.Item key="4" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.PARKING_SECTION); }} >
                <img src="/images/sidebar/4.png" alt="" />
                <span className="ml-2">Parking Section</span>
            </Menu.Item>

            <Menu.Item key="5" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.ACCESS_RULE); }} >
                <img src="/images/sidebar/5.png" alt="" />
                <span className="ml-2">Access Rule</span>
            </Menu.Item>

            <Menu.Item key="6" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.FINANCE); }} >
                <img src="/images/sidebar/6.png" alt="" />
                <span className="ml-2">Finance</span>
            </Menu.Item>

            <Menu.Item key="7" className="p-4" onClick={() => { Navigate(ADMIN_ROUTES?.TEAM); }} >
                <img src="/images/sidebar/7.png" alt="" />
                <span className="ml-2">Team</span>
            </Menu.Item>


            <Menu.Item key="0" className="p-6 !absolute bottom-2" style={{ paddingLeft: "21px" }} onClick={() => { Navigate(ADMIN_ROUTES?.SETTINGS); }} >
                {selected === "0" ? <SettingOutlined style={{ fontSize: "20px" }} /> : <SettingOutlined style={{ fontSize: "20px" }} />}
                <span className="ml-2">Setting</span>
            </Menu.Item>
        </Menu>
    )
}