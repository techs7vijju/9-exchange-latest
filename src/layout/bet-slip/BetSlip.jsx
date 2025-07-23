import React, { useState } from "react";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import StepperInput from "../bet-slip/components/StepperInput";

const BetSlip = () => {
  const [activeTab, setActiveTab] = useState("betslip");

  const activeStyle = {
    background: "#276AA5",
  };

  const inactiveStyle = {
    background: "#205582",
  };
  
  return (
    <div>
      <div className="bet-slip-container">
        <div className="flex align-items-center">
          <div className="">
            <button
              className="xbtn d-flex gap-2 items-center justify-center"
              style={activeTab === "betslip" ? activeStyle : inactiveStyle}
              onClick={() => setActiveTab("betslip")}
            >
              BETSLIP
            </button>
          </div>
          <div className="">
            <button
              className="xbtn d-flex gap-2 items-center justify-center"
              style={activeTab === "mybets" ? activeStyle : inactiveStyle}
              onClick={() => setActiveTab("mybets")}
            >
              MY BETS
            </button>
          </div>
        </div>

        {activeTab === "betslip" && (
          <div className="betslip-content">
            <div className="d-flex justify-content-between align-items-center ">
              <p className="p-blue">YOUR BETS</p>
              <div className="betslip-icon">
                <IoSettingsSharp />
              </div>
            </div>
            <div className="betslip-modal">
              <div className="d-flex align-items-center justify-content-between">
                <div className="modal-title">4232 ICC World Cup 2023</div>
                <div className="icon">
                  <IoClose size={28} />
                </div>
              </div>
              <div className="modal-sub-title">India vs New Zealand</div>
              <div className=" modal-btn d-flex align-items-center justify-content-between mt-4">
                <div>
                  <button className="xbtn grey-8-btn">Back</button>
                </div>
                <div>
                  <button className="xbtn grey-8-btn">1.36</button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4">
              <p className="p-blue">Overall Odds</p>
              <p className="p-blue-dark">1.36</p>
            </div>
            <div className="stake-container">
              <p className="p-blue-dark">Stake</p>
              <StepperInput
                value={500}
                min={0}
                max={1000}
                step={50}
                onChange={(val) => console.log("Value:", val)}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <p className="p-blue">INDIA Wins</p>
              <p className="p-blue-dark">180 INR</p>
            </div>
            <div>
                <button className="xbtn button-blue">Place Bet</button>
            </div>
          </div>
        )}
        {activeTab === "mybets" && (
          <div className="mybets-content">
            <p>MY BETS Content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BetSlip;
