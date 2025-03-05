import React, { useState } from "react";
import { FaHome, FaCogs } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";
import logosrc from '../assests/logo.png'


const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, route: "/" },
    { name: "Doctors", icon: <FaUserDoctor />, route: "/doctors" },
    { name: "Appointments", icon: <MdCalendarMonth />, route: "/appointment" },
    { name: "Patients", icon: <FaUserGroup />, route: "/patients" },
    { name: "Pharmacy", icon: <GiMedicines />, route: "/pharmacy" },
  ];

  const [activeMenu, setActiveMenu] = useState(menuItems[0].name);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logosrc} alt="Logo" />
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${activeMenu === item.name ? "active" : ""}`}
            onClick={() => setActiveMenu(item.name)}
          >
            {item.icon}
            <span className="menu-text">{item.name}</span>
          </li>
        ))}
      </ul>

     
      <ul className="menu">
        <li className="menu-item" onClick={() => setActiveMenu("Settings")}>
          <FaCogs />
          <span className="menu-text">Settings</span>
        </li>
        <li className="menu-item logout-item" onClick={handleLogout}>
          <FaSignOutAlt />
          <span className="menu-text">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
