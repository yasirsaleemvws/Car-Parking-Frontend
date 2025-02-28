import React, { useEffect, useState } from 'react'
import { Menu } from "antd";
import { useLocation, useNavigate } from 'react-router-dom';
import { RiTeamFill, RiDashboardFill } from "react-icons/ri";
import { FaChartPie, FaKey } from "react-icons/fa";
import { IoLayers, IoSettingsSharp } from "react-icons/io5";
import { SiGraphql } from "react-icons/si";
import { ImStackoverflow } from "react-icons/im";
import { FaSquareParking } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { ADMIN_ROUTES, APP_ROUTES } from '../config/Constants';


export default function SidebarMenu() {
    const [selected, setSelected] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const role = localStorage.getItem("role");
    useEffect(() => {
        if (location.pathname.endsWith(APP_ROUTES?.SETTINGS)) {
            setSelected("0");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING)) {
            setSelected("1");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_OVERVIEW)) {
            setSelected("2");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_ANALYTICS)) {
            setSelected("3");
        } else if (location.pathname.endsWith(APP_ROUTES?.AVG_PARKING)) {
            setSelected("3");
        } else if (location.pathname.endsWith(APP_ROUTES?.PEAK_TRAFFIC)) {
            setSelected("3");
        } else if (location.pathname.endsWith(APP_ROUTES?.AVG_VEHICLE)) {
            setSelected("3");
        } else if (location.pathname.endsWith(APP_ROUTES?.AVG_OCCUPANCY)) {
            setSelected("3");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_SECTION)) {
            setSelected("4");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_AREA)) {
            setSelected("4");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_CAMERA)) {
            setSelected("4");
        } else if (location.pathname.endsWith(APP_ROUTES?.PARKING_CAMERA_DETAILS)) {
            setSelected("4");
        } else if (location.pathname.endsWith(APP_ROUTES?.ACCESS_RULE)) {
            setSelected("5");
        } else if (location.pathname.endsWith(APP_ROUTES?.FINANCE)) {
            setSelected("6");
        } else if (location.pathname.endsWith(APP_ROUTES?.TEAM)) {
            setSelected("7");
        }

        else if (location.pathname.endsWith(ADMIN_ROUTES?.CHANGE_PASSWORD)) {
            setSelected("000");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.DASHBOARD)) {
            setSelected("100");
        } else if (location.pathname.endsWith(ADMIN_ROUTES?.COMPANIES)) {
            setSelected("200");
        }
    }, [location]);


    return (
        <Menu
            mode="inline"
            selectedKeys={[selected]}
            className="text-lg !border-r-0 flex flex-col p-3 gap-0"
            onClick={(e) => setSelected(e.key)}
        >
            {role == 'Admin' ? (
                <>
                    <Menu.Item key="100" className='m-0' onClick={() => { navigate(ADMIN_ROUTES?.DASHBOARD); }} >
                        <MdDashboard className='text-xl' />
                        <span className="ml-3">Dashboard</span>
                    </Menu.Item>

                    <Menu.Item key="200" className='m-0' onClick={() => { navigate(ADMIN_ROUTES?.COMPANIES); }} >
                        <PiBuildingOfficeBold className='text-xl' />
                        <span className="ml-3">Companies</span>
                    </Menu.Item>

                    <Menu.Item key="000" className='m-0' onClick={() => { navigate(ADMIN_ROUTES?.CHANGE_PASSWORD); }} >
                        <FaKey className='text-xl' />
                        <span className="ml-3">Change Passwrod</span>
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item key="1" className='m-0' onClick={() => { navigate(APP_ROUTES?.PARKING); }} >
                        <FaSquareParking className='text-xl' />
                        <span className="ml-3">Parking</span>
                    </Menu.Item>

                    <Menu.Item key="2" className='m-0' onClick={() => { navigate(APP_ROUTES?.PARKING_OVERVIEW); }} >
                        <ImStackoverflow className='text-xl' />
                        <span className="ml-3">Parking Overview</span>
                    </Menu.Item>

                    <Menu.Item key="3" className='m-0' onClick={() => { navigate(APP_ROUTES?.PARKING_ANALYTICS); }} >
                        <SiGraphql className='text-xl' />
                        <span className="ml-3">Parking Analytics</span>
                    </Menu.Item>

                    <Menu.Item key="4" className='m-0' onClick={() => { navigate(APP_ROUTES?.PARKING_SECTION); }} >
                        <RiDashboardFill className='text-xl' />
                        <span className="ml-3">Parking Section</span>
                    </Menu.Item>

                    <Menu.Item key="5" className='m-0' onClick={() => { navigate(APP_ROUTES?.ACCESS_RULE); }} >
                        <IoLayers className='text-xl' />
                        <span className="ml-3">Access Rule</span>
                    </Menu.Item>

                    <Menu.Item key="6" className='m-0' onClick={() => { navigate(APP_ROUTES?.FINANCE); }} >
                        <FaChartPie />
                        <span className="ml-3">Finance</span>
                    </Menu.Item>

                    <Menu.Item key="7" className='m-0' onClick={() => { navigate(APP_ROUTES?.TEAM); }} >
                        <RiTeamFill className='text-xl' />
                        <span className="ml-3">Team</span>
                    </Menu.Item>

                    <Menu.Item key="0" className='m-0 !absolute bottom-2' style={{ paddingLeft: "21px" }} onClick={() => { navigate(APP_ROUTES?.SETTINGS); }} >
                        <IoSettingsSharp className='text-xl' />
                        <span className="ml-3">Setting</span>
                    </Menu.Item>
                </>
            )}
        </Menu>
    )
}