import React from "react";

import { IoWalletOutline } from "react-icons/io5";

const InfoCard = ({
  title = "Total Revenue",
  value = "0",
  icon = <IoWalletOutline size={28} color="#333" />,
}) => {
  return (
    <div className="wallet-common-card flex justify-between items-center">
      <div className="icon">{icon}</div>
      <div className="flex flex-col">
        <h6 className="p-light">{title}</h6>
        <h3 className="h1-light">{value}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
