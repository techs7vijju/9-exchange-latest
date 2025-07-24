import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Images } from "../../images/images";
// import PrivacyPolicy from "./Popups/PrivacyPolicy";
// import TermsService from "./Popups/TermsService";
import DropdownMenu from "../../components/common/DropdownMenu"; // adjust the path if needed

const Sidebarbtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  // const [openPrivacy, setOpenPrivacy] = useState(false);
  // const [openTerms, setOpenTerms] = useState(false);
  const [activeIcon, setActiveIcon] = useState(
    localStorage.getItem("activeIcon") || null
  );

  useEffect(() => {
    if (activeIcon) {
      localStorage.setItem("activeIcon", activeIcon);
    }
  }, [activeIcon]);

  useEffect(() => {
    if (location.pathname === "/live-matches") {
      setActiveIcon("play");
    } else {
      setActiveIcon(null);
    }
  }, [location.pathname]);

  const sidebarIcons = [
    { key: "thumb", img: Images.thump },
    { key: "star", img: Images.star },
    { key: "play", img: Images.live, onClick: () => handleIconClick("play") },
    { key: "settings", img: Images.settings },
    {
      key: "personal",
      img: Images.personal,
      isDropdown: true,
    },
  ];

  const dropdownOptions = [
    {
      name: "Make a Deposit",
      img: Images.deposit,
    },
    {
      name: "Withdraw Funds",
      img: Images.money,
    },
    {
      name: "Invite Friends",
      img: Images.invite,
    },
    {
      name: "Personal Profile",
      img: Images.layer,
    },
    {
      name: "Privacy Policy",
      img: Images.privacy,
      onClick: () => setOpenPrivacy(true),
    },
    {
      name: "Terms of Service",
      img: Images.terms,
      onClick: () => setOpenTerms(true),
    },
  ];

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (icon === "play") {
      navigate(`/live-matches/${icon}`);
    }
  };

  return (
    <div className="d-flex flex-col h-100">
      {sidebarIcons.map((item, index) => (
        <div
          key={index}
          className="small-button white-font pointer position-relative"
          onClick={() => {
            if (item.onClick) {
              item.onClick();
            } else if (item.isDropdown) {
              setShowDropdown(!showDropdown);
            }
          }}
        >
          <img src={item.img} className="payment-images" alt={item.key} />

          {item.isDropdown && (
            <DropdownMenu
              title=""
              open={showDropdown}
              onToggle={setShowDropdown}
              items={dropdownOptions}
              showImages={true}
            />
          )}
        </div>
      ))}

      {/* <PrivacyPolicy openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy} />
      <TermsService openTerms={openTerms} setOpenTerms={setOpenTerms} /> */}
    </div>
  );
};

export default Sidebarbtn;
