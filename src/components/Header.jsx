import React, { useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCheck, FaCalendarCheck, FaUserPlus } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { message: "User Tej Patil logged in", icon: <FaUserCheck /> },
    { message: "User Priya Sharma registered", icon: <FaUserPlus /> },
    { message: "Appointment booked by Rohan Mehta", icon: <FaCalendarCheck /> },
    { message: "New user sign-up: Anjali Verma", icon: <FaUserPlus /> },
  ];

  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>

      <div className="user-info">
        <FaEnvelope className="icon" />
        
        <div className="notification-container">
          <FaBell 
            className="icon" 
            onClick={() => setShowNotifications(!showNotifications)} 
          />
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">Notifications</div>
              {notifications.length > 0 ? (
                notifications.map((note, index) => (
                  <div key={index} className="notification-item">
                    <span className="notification-icon">{note.icon}</span>
                    {note.message}
                  </div>
                ))
              ) : (
                <div className="no-notifications">No new notifications</div>
              )}
            </div>
          )}
        </div>

        <div className="profile">
          <img src="/assets/profile.jpg" alt="Admin" className="profile-pic" />
          <div className="profile-details">
            <span className="admin-name">Tej Patil</span>
            <span className="admin-role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
