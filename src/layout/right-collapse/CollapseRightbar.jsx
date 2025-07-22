import React, { useState } from "react";

const CollapseRightbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const rightbarWidth = collapsed ? 50 : 200;

  return (
    <div
      style={{
        width: rightbarWidth,
        transition: "width 0.3s",
        background: "#f5f5f5",
        borderLeft: "1px solid #ddd",
        position: "relative",
        height: "100vh",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: 10,
          left: -30,
          zIndex: 2,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCollapsed((c) => !c)}
      >
        {collapsed ? ">>" : "<<"}
      </button>
      <div
        style={{
          padding: 10,
          opacity: collapsed ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      >
        Content
      </div>
    </div>
  );
};

export default CollapseRightbar;
