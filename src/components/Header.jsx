import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>

      <div className="user-info">
        <FaEnvelope className="icon" />
        <FaBell className="icon" />
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
