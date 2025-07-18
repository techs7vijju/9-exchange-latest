import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";

const InfoCard = ({
  title   = "Total Revenue",
  value   = "0",
  percent = null,                   
  icon    = <GiTakeMyMoney size={28} color="#fff" />,
}) => {
  /* ------- optional % -------- */
  const hasPercent   = typeof percent === "number";
  const percentColor = hasPercent && percent >= 0 ? "#33c548" : "#e63946";
  const signed       = hasPercent && percent >= 0 ? `+${percent}` : percent;

  /* ------- optional icon ----- */
  const hasIcon = Boolean(icon);

  return (
    <div className=" flex-between common-card">
      {/* text block */}
      <div className=" ">
        <p className="p-light">{title}</p>
        <h1 className="h1-light">
          {value}
          {hasPercent && (
            <small className="small-green ">
              {signed}%
            </small>
          )}
        </h1>
      </div>

      {/* icon bubble (only if provided) */}
      {hasIcon && (
        <div
          className="icon"
       
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
