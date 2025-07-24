import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Images } from "../../images/images";
import DropdownMenu from "../../components/common/DropdownMenu";

const Sidebarbtn = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleItemClick = (label) => {
    switch (label) {
      case "Privacy Policy":
        setOpenPrivacy(true);
        break;
      case "Terms of Service":
        setOpenTerms(true);
        break;
      case "Make a Deposit":
        navigate("/deposite-withdraw/deposit");
        break;
      case "Withdraw Funds":
        navigate("/deposite-withdraw/withdraw");
        break;
    }
    setDropdownOpen(false);
  };

  const options = [
    { name: "Make a Deposit", img: Images.deposit },
    { name: "Withdraw Funds", img: Images.money },
    { name: "Invite Friends", img: Images.invite },
    { name: "Personal Profile", img: Images.layer },
  ];

  return (
    <div className="sidebar-container">
      <div className="d-flex flex-col h-100">
        <div className="small-button white-font pointer">
          <img src={Images.thump} className="payment-images" />
        </div>
        <div className="small-button white-font pointer">
          <img src={Images.star} className="payment-images" />
        </div>
        <div className="small-button white-font pointer">
          <img src={Images.live} className="payment-images" />
        </div>
        <div className="small-button white-font pointer">
          <img src={Images.settings} className="payment-images" />
        </div>

        <div className="small-button">
          <DropdownMenu
            title=""
            open={dropdownOpen}
            onToggle={setDropdownOpen}
            items={options}
            showImages={true}
            onItemClick={handleItemClick}
            trigger={
              <div className="pointer">
                <img src={Images.personal} className="payment-images" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebarbtn;
