import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Images } from "../../../images/images";

// Data for dropdown sections
const dropdownItems = {
  live: [
    { id: 1, name: "Live Casino" },
    { id: 2, name: "Live Games" },
    { id: 3, name: "Live Sports" },
  ],
  casino: [
    { id: 1, name: "Slots" },
    { id: 2, name: "Table Games" },
    { id: 3, name: "Card Games" },
    { id: 4, name: "Jackpots" },
  ],
  sports: [
    { id: 1, name: "Cricket" },
    { id: 2, name: "Football" },
    { id: 3, name: "Tennis" },
    { id: 4, name: "Horse Racing" },
    { id: 5, name: "Greyhound" },
    { id: 6, name: "Kabaddi" },
  ],
};

// Main menu items with dropdown indicators
const mainMenuItems = [
  {
    id: 1,
    name: "Main Page",
    icon: Images.homeIcon,
    // active: true,
    hasDropdown: false,
  },
  {
    id: 2,
    name: "Live",
    icon: Images.liveIcon,
    hasDropdown: true,
    dropdownKey: "live",
  },
  {
    id: 3,
    name: "Casino",
    icon: Images.casinoIcon,
    hasDropdown: true,
    dropdownKey: "casino",
  },
  {
    id: 4,
    name: "Sports",
    icon: Images.sportsIcon,
    hasDropdown: true,
    dropdownKey: "sports",
  },
];

// Account menu items (all single items)
const accountMenuItems = [
  { id: 1, name: "My Bets", icon: Images.myBets },
  { id: 2, name: "My Wallet", icon: Images.myWallet },
  { id: 3, name: "Account Statement", icon: Images.accountStatement },
  { id: 4, name: "P/L Statement", icon: Images.plStatement },
  { id: 5, name: "Commission Report", icon: Images.commissionReport },
  { id: 6, name: "Set Button Variables", icon: Images.setButtonVariables },
];

const MenuListSidebar = ({ open, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <div className={`menulist-sidebar-container${open ? " open" : ""}`}>
      <div className="sidebar-header">
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          onSelectLanguage={setSelectedLanguage}
        />

        <div className="d-flex gap-2 items-center">
          <div className="message-wrapper rounded-1">
            <BiSolidMessageDetail className="icon" size={22} />
          </div>
          <button className="sidebar-close-btn" onClick={onClose}>
            <IoMdClose className="icon" size={22} />
          </button>
        </div>
      </div>

      <div className="menuList-sidebar-content">
        {/* Main Menu Section */}
        <div className="sidebar-section">
          {mainMenuItems.map((item) => (
            <React.Fragment key={item.id}>
              <div
                className={`sidebar-link ${item.active ? "active" : ""}`}
                onClick={() =>
                  item.hasDropdown && toggleDropdown(item.dropdownKey)
                }
              >
                <div
                  className="flex-center img-wrapper rounded-circle "
                  aria-label={item.name.toLowerCase()}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="sidebar-img-icon"
                  />
                </div>
                <p className="m-0 sidebar-text">{item.name}</p>

                {item.hasDropdown && (
                  <span
                    className={`sidebar-arrow ${
                      openDropdowns[item.dropdownKey] ? "open" : ""
                    }`}
                  >
                    <FaChevronDown size={14} />
                  </span>
                )}
              </div>

              {item.hasDropdown && openDropdowns[item.dropdownKey] && (
                <ul className="sidebar-submenu">
                  {dropdownItems[item.dropdownKey].map((subItem) => (
                    <li key={subItem.id}>{subItem.name}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="more-item">
          <p className="m-0"> More </p>
        </div>

        <div className="sidebar-section">
          {accountMenuItems.map((item) => (
            <div key={item.id} className="sidebar-link">
              <div
                className="flex-center img-wrapper rounded-circle"
                aria-label={item.name.toLowerCase()}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="sidebar-img-icon"
                />
              </div>
              <p className="m-0">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-link">
            <div className="flex-center img-wrapper rounded-circle">
              <img
                src={Images.logoutIcon}
                alt="Log Out"
                className="sidebar-img-icon"
              />
            </div>
            <div className="sidebar-link logout">Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuListSidebar;
