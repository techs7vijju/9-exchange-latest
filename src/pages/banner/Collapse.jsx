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

const CollapsePage = () => {
  return (
    <div className="d-flex flex-col-start h-100">
      <div className="xbtn login large-font w-100">Collapse block</div>
    </div>
  );
};

export default CollapsePage;
