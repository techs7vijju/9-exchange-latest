import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronRight, FaThumbsUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { ImPlay2 } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Images } from "../../images/images";
import { IoMdThumbsUp } from "react-icons/io";
import { LiaThumbsUpSolid } from "react-icons/lia";
import PrivacyPolicy from "./Popups/PrivacyPolicy";
import TermsService from "./Popups/TermsService";

const Sidebarbtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownMenuRef = useRef(null);

  const handlewithDraw = (id) => {
    navigate(`/deposite-withdraw/${id}`);
  };

  const [dropdown, setdropdown] = useState(false);
  const handledropdown = () => {
    setdropdown(!dropdown);
  };
  const handleNavigate = (item) => {
    navigate(item);
    setdropdown(false);
  };

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

  const icons = [
    { name: "star", component: FaStar },
    { name: "award", component: FaAward },
    { name: "play", component: ImPlay2 },
    { name: "settings", component: IoSettingsSharp },
  ];

  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
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

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (icon === "play") {
      navigate(`/live-matches/${icon}`);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="small-button  white-font pointer">
        <img src={Images.thump} className="payment-images" />
      </div>
      <div className="small-button  white-font pointer">
        <img src={Images.star} className="payment-images" />
      </div>
      <div className="small-button white-font pointer">
        <img src={Images.live} className="payment-images" />
      </div>
      <div className="small-button white-font pointer">
        <img src={Images.settings} className="payment-images" />
      </div>
      <div className="small-button1 position-relative" ref={dropdownMenuRef}>
        <div
          className="sidebar-icon white-font pointer "
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src={Images.personal} className="payment-images" />
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="exact-dropdown">
            <div className="dropdown-pointer-left" />
            {options.map((item, index) => (
              <div
                className="dropdown-row d-flex align-items-center"
                key={index}
                onClick={item.onClick}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="dropdown-icon me-2"
                />
                <span className="flex-grow-1 fw-semibold">{item.label}</span>
                <span className="fw-bold text-secondary">&gt;</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <PrivacyPolicy
        openPrivacy={openPrivacy}
        setOpenPrivacy={setOpenPrivacy}
      />
      <TermsService
      openTerms={openTerms}
      setOpenTerms={setOpenTerms}/>
    </div>
  );
};

export default Sidebarbtn;
