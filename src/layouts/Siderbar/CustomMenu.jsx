import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "../../config/Constants";

export default function CustomMenu() {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes(ADMIN_ROUTES.PARKING)) setSelected("1");
        else if (location.pathname.includes(ADMIN_ROUTES.PARKING_OVERVIEW)) setSelected("2");
        else if (location.pathname.includes(ADMIN_ROUTES.PARKING_ANALYTICS)) setSelected("3");
        else if (location.pathname.includes(ADMIN_ROUTES.PARKING_SECTION)) setSelected("4");
        else if (location.pathname.includes(ADMIN_ROUTES.ACCESS_RULE)) setSelected("5");
        else if (location.pathname.includes(ADMIN_ROUTES.FINANCE)) setSelected("6");
        else if (location.pathname.includes(ADMIN_ROUTES.TEAM)) setSelected("7");
        else if (location.pathname.includes(ADMIN_ROUTES.SETTINGS)) setSelected("0");
        console.log(selected);
        
    }, [location]);

    const menuItems = [
        { key: "1", label: "Parking", route: ADMIN_ROUTES.PARKING, icon: "/images/sidebar/1.png" },
        { key: "2", label: "Parking Overview", route: ADMIN_ROUTES.PARKING_OVERVIEW, icon: "/images/sidebar/2.png" },
        { key: "3", label: "Parking Analytics", route: ADMIN_ROUTES.PARKING_ANALYTICS, icon: "/images/sidebar/3.png" },
        { key: "4", label: "Parking Section", route: ADMIN_ROUTES.PARKING_SECTION, icon: "/images/sidebar/4.png" },
        { key: "5", label: "Access Rule", route: ADMIN_ROUTES.ACCESS_RULE, icon: "/images/sidebar/5.png" },
        { key: "6", label: "Finance", route: ADMIN_ROUTES.FINANCE, icon: "/images/sidebar/6.png" },
        { key: "7", label: "Team", route: ADMIN_ROUTES.TEAM, icon: "/images/sidebar/7.png" },
        { key: "0", label: "Settings", route: ADMIN_ROUTES.SETTINGS, icon: "/images/sidebar/0.png", extraClass: "absolute bottom-2" }
    ];

    return (
        <Menu
            mode="inline"
            selectedKeys={[selected]}
            className="text-lg border-r-0 flex flex-col p-3 gap-0"
            onClick={(e) => {
                setSelected(e.key);
                const selectedItem = menuItems.find(item => item.key === e.key);
                if (selectedItem) navigate(selectedItem.route);
            }}
        >
            {menuItems.map(({ key, label, route, icon, extraClass }) => (
                <Menu.Item
                    key={key}
                    className={`p-4 rounded-md transition-all duration-300 ${selected == key ? "bg-blue-800 text-white" : "hover:bg-gray-100"
                        } ${extraClass || ""}`}
                >
                    <img src={icon} alt={label} className="inline-block w-6 h-6" />
                    <span className="ml-2">{label}</span>
                </Menu.Item>
            ))}
        </Menu>
    );
}
