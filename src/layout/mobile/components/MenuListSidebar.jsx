import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const sportsList = [
  { id: 1, name: "Cricket" },
  { id: 2, name: "Football" },
  { id: 3, name: "Tennis" },
  { id: 4, name: "Horse Racing" },
  { id: 5, name: "Greyhound" },
  { id: 6, name: "Kabaddi" },
];

const mainMenuItems = [
  { id: 1, name: "Main Page", icon: <TiHome />, active: true },
  { id: 2, name: "Live", icon: "🔴" },
  { id: 3, name: "Casino", icon: "🎰" },
];

const accountMenuItems = [
  { id: 1, name: "More" },
  { id: 2, name: "My Bets" },
  { id: 3, name: "My Wallet" },
  { id: 4, name: "Account Statement" },
  { id: 5, name: "P/L Statement" },
  { id: 6, name: "Commission Report" },
  { id: 7, name: "Set Button Variables" },
];

const MenuListSidebar = ({ open, onClose }) => {
  const [showSports, setShowSports] = useState(false);

  const toggleSports = () => {
    setShowSports((prev) => !prev);
  };

  return (
    <div className={`menulist-sidebar-container${open ? " open" : ""}`}>
      <div className="sidebar-header">
        <span>EN</span>
        <button className="sidebar-close-btn" onClick={onClose}>
          <FaTimes size={18} />
        </button>
      </div>

      <div className="menuList-sidebar-content">
        <div className="sidebar-section">
          {mainMenuItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-link ${item.active ? "active" : ""}`}
            >
              <span
                className="sidebar-icon"
                aria-label={item.name.toLowerCase()}
              >
                {item.icon}
              </span>
              <span className="sidebar-text">{item.name}</span>
            </div>
          ))}

          <div className="sidebar-link" onClick={toggleSports}>
            <span className="sidebar-icon" aria-label="sports">
              🏅
            </span>
            <span className="sidebar-text">Sports</span>
            <span className={`sidebar-arrow ${showSports ? "open" : ""}`}>
              <FaChevronDown size={14} />
            </span>
          </div>

          {showSports && (
            <ul className="sidebar-submenu">
              {sportsList.map((sport) => (
                <li key={sport.id}>{sport.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="sidebar-section">
          {accountMenuItems.map((item) => (
            <div key={item.id} className="sidebar-link">
              {item.name}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-link logout">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default MenuListSidebar;
