import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

const MobileHeader = () => {
  return (
    <div className="mobile-header-container p-2">
      <div className="mobile-header-content">
        <div className="mobile-content-left mx-1">
          <div className="flex-center icon-wrapper">
            <IoArrowBack className="icon" size={20} />
          </div>
          <p>SPORTS</p>
        </div>
        <div className="mobile-content-right mx-1">
          <div className="flex-center icon-wrapper">
            <FaSearch className="icon" size={20} />
          </div>
          <div className="flex-center icon-wrapper">
            <FaStar className="icon" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
