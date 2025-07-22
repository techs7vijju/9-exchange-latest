import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../images/images";
import { IoChevronForwardOutline } from "react-icons/io5";

const MoreSidebarbtn = () => {

  const menuItems = [
    { path: "deposits", icon: Images.deposit, label: "Deposits" },
    { path: "withdrawals", icon: Images.money, label: "Withdrawals" },
    { path: "tickets", icon: Images.layer, label: "My Tickets" },
    { path: "profile", icon: Images.personal, label: "Profile" },
  ];

  return (
    <div className="d-flex flex-col-more py-2 h-100 blue-color13-bg">
      <h6 className="grey-color9 px-2 large-font fw-400"> MORE </h6>
      <hr />
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <Link 
            to={item.path}
            className="d-flex flex-between px-2 text-decoration-none"
          >
            <div className="d-flex flex-between white-font gap-2">
              <img src={item.icon} className="payment-images" />
              <span className="large-font fw-600">{item.label}</span>
            </div>
            <IoChevronForwardOutline className="ms-1 xl-large-font blue-color1" />
          </Link>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MoreSidebarbtn;
