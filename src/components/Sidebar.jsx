import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHome, FaCogs } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize navigate
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, route: "/" },
    { name: "Doctors", icon: <FaUserDoctor />, route: "/doctors" },
    { name: "Appointments", icon: <MdCalendarMonth />, route: "/appointment" },
    { name: "Patients", icon: <FaUserGroup />, route: "/patients" },
    { name: "Pharmacy", icon: <GiMedicines />, route: "/pharmacy" },
    { name: "Recents", icon: <MdCalendarMonth />, route: "/recents" }, // Route for Recents
  ];

  const [activeMenu, setActiveMenu] = useState(menuItems[0].name);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu.name);
    navigate(menu.route); // Navigate to the route
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/assets/" alt="Logo" />
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${activeMenu === item.name ? "active" : ""}`}
            onClick={() => handleMenuClick(item)} // Call handleMenuClick
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
