import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../layout/mobile/components/MobileHeader";
import { IoMenu } from "react-icons/io5";
import SportsListMenu from "./SportsListMenu";

const cricketIcon = "https://cdn-icons-png.flaticon.com/128/919/919841.png";
const footballIcon = "https://cdn-icons-png.flaticon.com/128/861/861512.png";
const tennisIcon = "https://cdn-icons-png.flaticon.com/128/119/119598.png";
const kabaddiIcon = "https://cdn-icons-png.flaticon.com/128/3944/3944287.png";
const menuIcon = <IoMenu size={40} />;

const tabs = [
  { label: "Cricket", value: "cricket", image: cricketIcon },
  { label: "Football", value: "football", image: footballIcon },
  { label: "Tennis", value: "tennis", image: tennisIcon },
  { label: "Kabaddi", value: "kabaddi", image: kabaddiIcon },
  {
    label: "More",
    icon: menuIcon,
  },
];

const SportsTabNavigator = ({ activeTab, onTabChange }) => {
  const [sportsSidebarOpen, setSportsSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 991 });
  if (!isMobile) return null;

  return (
    <>
      <div className="sports-tab-navigator mobile flex flex-col">
        <div>
          <MobileHeader />
        </div>
        <div className="p-2 sports-tab-navigator-content">
          <div className="row g-1 h-100">
            {tabs.map((tab) => (
              <div className="col align-self-stretch w-100">
                <div className="flex-center" style={{ height: "65px" }}>
                  <button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={`w-100 d-flex flex-col justify-center items-center tab-button  ${
                      activeTab === tab.value ? "active" : ""
                    }`}
                  >
                    {tab.image && (
                      <img
                        src={tab.image}
                        alt={tab.label}
                        style={{ alignItems: "center" }}
                      />
                    )}
                    {tab.icon ? (
                      <span className="text-center">{tab.icon}</span>
                    ) : (
                      <p className="m-0">{tab.label}</p>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SportsListMenu
        open={sportsSidebarOpen}
        onClose={() => setSportsSidebarOpen(false)}
      />
    </>
  );
};

export default SportsTabNavigator;
