import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Images } from "../../images/images";
import PrivacyPolicy from "./Popups/PrivacyPolicy";
import TermsService from "./Popups/TermsService";

const Sidebarbtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownMenuRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sidebarIcons = [
    { key: "thumb", img: Images.thump },
    { key: "star", img: Images.star },
    { key: "play", img: Images.live, onClick: () => handleIconClick("play") },
    { key: "settings", img: Images.settings },
    {
      key: "personal",
      img: Images.personal,
      onClick: () => setShowDropdown(!showDropdown),
      isDropdown: true,
    },
  ];

  const dropdownOptions = [
    {
      label: "Make a Deposit",
      icon: Images.deposit,
    },
    {
      label: "Withdraw Funds",
      icon: Images.money,
    },
    {
      label: "Invite Friends",
      icon: Images.invite,
    },
    {
      label: "Personal Profile",
      icon: Images.layer,
    },
    {
      label: "Privacy Policy",
      icon: Images.privacy,
      onClick: () => setOpenPrivacy(true),
    },
    {
      label: "Terms of Service",
      icon: Images.terms,
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
    <div className="d-flex flex-col  h-100">
      {sidebarIcons.map((item, index) => (
        <div
          key={index}
          className="small-button  white-font pointer position-relative"
          onClick={item.onClick}
          ref={item.isDropdown ? dropdownMenuRef : null}
        >
          <img src={item.img} className="payment-images" alt={item.key} />

         
          {item.isDropdown && showDropdown && (
            <div className="exact-dropdown">
              <div className="dropdown-pointer-left" />
              {dropdownOptions.map((option, idx) => (
                <div
                  className="dropdown-row d-flex align-items-center"
                  key={idx}
                  onClick={() => {
                    option.onClick?.();
                    setShowDropdown(false);
                  }}
                >
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="dropdown-icon me-2"
                  />
                  <span className="flex-grow-1 fw-semibold">
                    {option.label}
                  </span>
                  <span className="fw-bold text-secondary">&gt;</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

    
      <PrivacyPolicy openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy} />
      <TermsService openTerms={openTerms} setOpenTerms={setOpenTerms} />
    </div>
  );
};

export default Sidebarbtn;
