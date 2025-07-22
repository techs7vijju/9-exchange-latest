import React from "react";
import { Outlet } from "react-router-dom";
import CollapseRightbar from "./right-collapse/CollapseRightbar";

const SportsLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, overflow: "auto" }}>
        <Outlet />
      </div>
      <CollapseRightbar />
    </div>
  );
};

export default SportsLayout;
