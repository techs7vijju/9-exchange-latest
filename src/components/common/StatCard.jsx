import React from "react";


const CommonStatCard = ({
  buy = 0,
  sale = 0,
  balance = 0,
  className = "",
}) => {
  return (
    <div className={`common-stat-card ${className}`}>
      <div className="flex-between">
        <p className="label">Buy</p>
        <p className="value">{buy}</p>
      </div>
      <div className=" flex-between">
        <p className="label">Sale</p>
        <p className="value">{sale}</p >
      </div>
      <div className=" flex-between">
        <p className="label">Bal</p>
        <p className="value">{balance}</p>
      </div>
    </div>
  );
};

export default CommonStatCard;