import React, { useState } from "react";

const CollapseRightbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const rightbarWidth = collapsed ? 50 : 200;

  return (
    <div
      className="collapse-right-bar-container"
      style={{ width: rightbarWidth }}
    >
      <div
        style={{
          padding: 10,
          opacity: collapsed ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      >
        <p onClick={() => setCollapsed((c) => !c)}> Collepse </p>
      </div>
    </div>
  );
};

export default CollapseRightbar;
