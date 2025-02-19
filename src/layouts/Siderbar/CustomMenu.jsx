import React, { useEffect, useState } from 'react'
import { Menu } from "antd";
import { ADMIN_ROUTES } from "../../config/Constants";
import { useLocation, useNavigate } from 'react-router-dom';

export default function CustomMenu() {
    const [selected, setSelected] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.endsWith(ADMIN_ROUTES?.SETTINGS)) {
            setSelected("0");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.PARKING)) {
            setSelected("1");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.PARKING_OVERVIEW)) {
            setSelected("2");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.PARKING_ANALYTICS)) {
            setSelected("3");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.AVG_PARKING)) {
            setSelected("3");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.PEAK_TRAFFIC)) {
            setSelected("3");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.AVG_VEHICLE)) {
            setSelected("3");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.AVG_OCCUPANCY)) {
            setSelected("3");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.PARKING_SECTION)) {
            setSelected("4");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.ACCESS_RULE)) {
            setSelected("5");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.FINANCE)) {
            setSelected("6");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.TEAM)) {
            setSelected("7");
        }
    }, [location]);


    return (
        <Menu
            mode="inline"
            selectedKeys={[selected]}
            className="text-lg !border-r-0 flex flex-col p-3 gap-0"
            onClick={(e) => setSelected(e.key)}
        >

            <Menu.Item key="1"  onClick={() => { navigate(ADMIN_ROUTES?.PARKING); }} >
                <img src="/images/sidebar/1.png" alt="" />
                <span className="ml-3">Parking</span>
            </Menu.Item>

            <Menu.Item key="2" onClick={() => { navigate(ADMIN_ROUTES?.PARKING_OVERVIEW); }} >
                <img src="/images/sidebar/2.png" alt="" />
                <span className="ml-3">Parking Overview</span>
            </Menu.Item>

            <Menu.Item key="3" onClick={() => { navigate(ADMIN_ROUTES?.PARKING_ANALYTICS); }} >
                <img src="/images/sidebar/3.png" alt="" />
                <span className="ml-3">Parking Analytics</span>
            </Menu.Item>

            <Menu.Item key="4" onClick={() => { navigate(ADMIN_ROUTES?.PARKING_SECTION); }} >
                <img src="/images/sidebar/4.png" alt="" />
                <span className="ml-3">Parking Section</span>
            </Menu.Item>

            <Menu.Item key="5" onClick={() => { navigate(ADMIN_ROUTES?.ACCESS_RULE); }} >
                <img src="/images/sidebar/5.png" alt="" />
                <span className="ml-3">Access Rule</span>
            </Menu.Item>

            <Menu.Item key="6" onClick={() => { navigate(ADMIN_ROUTES?.FINANCE); }} >
                <img src="/images/sidebar/6.png" alt="" />
                <span className="ml-3">Finance</span>
            </Menu.Item>

            <Menu.Item key="7" onClick={() => { navigate(ADMIN_ROUTES?.TEAM); }} >
                <img src="/images/sidebar/7.png" alt="" />
                <span className="ml-3">Team</span>
            </Menu.Item>


            <Menu.Item key="0" className="p-6 !absolute bottom-2" style={{ paddingLeft: "21px" }} onClick={() => { navigate(ADMIN_ROUTES?.SETTINGS); }} >
                <img src="/images/sidebar/0.png" alt="" />
                <span className="ml-3">Setting</span>
            </Menu.Item>
        </Menu>
    )
}