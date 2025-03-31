import React, { useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaUser, FaPlus, FaCalendarAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [showQuickLinks, setShowQuickLinks] = useState(false);

    return (
        <div className="header">
            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search anything..." />
                <FaSearch className="search-icon" />
            </div>

            {/* Right Section */}
            <div className="user-info">
                <FaEnvelope className="icon" />
                <FaBell className="icon" />

                {/* Quick Links Dropdown Trigger */}
                <div
                    className="quick-links-dropdown-trigger"
                    onClick={() => setShowQuickLinks(!showQuickLinks)}
                >
                    Quick Links ▾
                    {showQuickLinks && (
                        <div className="quick-links-dropdown">
                            <button onClick={() => console.log("New Patient Registration clicked")}>
                                <FaUser className="link-icon" /> New Patient Registration
                            </button>
                            <button onClick={() => console.log("New Appointment Scheduling clicked")}>
                                <FaCalendarAlt className="link-icon" /> New Appointment Scheduling
                            </button>
                            <button onClick={() => console.log("Add Medical Record clicked")}>
                                <FaPlus className="link-icon" /> Add Medical Record
                            </button>
                        </div>
                    )}
                </div>

                {/* Profile */}
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
