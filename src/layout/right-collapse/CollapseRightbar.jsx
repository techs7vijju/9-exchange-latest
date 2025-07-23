import React, { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const CollapseRightbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const rightbarWidth = collapsed ? 50 : 250;

  return (
    <div
      className="collapse-right-bar-container"
      style={{ width: rightbarWidth }}
    >
      <div
        style={{
          transition: "opacity 0.3s",
        }}
      >
        {collapsed ? (
          <div className="flex-center p-2">
            <FaAnglesLeft
              className="pointer"
              size={18}
              color="text-white"
              onClick={() => setCollapsed((c) => !c)}
            />
          </div>
        ) : (
          <button
            className="xbtn d-flex gap-2 items-center justify-center"
            onClick={() => setCollapsed((c) => !c)}
          >
            Collapse
            <FaAnglesRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CollapseRightbar;
