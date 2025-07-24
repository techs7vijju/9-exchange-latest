import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../layout/mobile/components/MobileHeader";
import { IoMenu } from "react-icons/io5";

// Sample icons or image URLs (use your actual image paths or imports)
const cricketIcon = "https://cdn-icons-png.flaticon.com/128/919/919841.png";
const footballIcon = "https://cdn-icons-png.flaticon.com/128/861/861512.png";
const tennisIcon = "https://cdn-icons-png.flaticon.com/128/119/119598.png";
const kabaddiIcon = "https://cdn-icons-png.flaticon.com/128/3944/3944287.png";
const menuIcon = <IoMenu  size={40}/>;

const tabs = [
  { label: "Cricket", value: "cricket", image: cricketIcon },
  { label: "Football", value: "football", image: footballIcon },
  { label: "Tennis", value: "tennis", image: tennisIcon },
  { label: "Kabaddi", value: "kabaddi", image: kabaddiIcon },
  {
    label: "More",
    value: "hockey",
    icon: menuIcon,
  },
];

const SportsTabNavigator = ({ activeTab, onTabChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  if (!isMobile) return null;

  return (
    <div className="sports-tab-navigator mobile flex flex-column">
      <div>
        <MobileHeader />
      </div>
      <div className="p-2 sports-tab-navigator-content">
        <div className="row g-1">
          {tabs.map((tab) => (
            <div className="col align-items-center">
              <button
                key={tab.value}
                onClick={() => onTabChange(tab.value)}
                className={`w-100 align-self-stretch tab-button ${
                  activeTab === tab.value ? "active" : ""
                }`}
              >
                {tab.image && (
                  <img src={tab.image} alt={tab.label} style={{alignItems:"center"}} />
                )}
                {tab.icon ? tab.icon : <span clas>{tab.label}</span>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsTabNavigator;
