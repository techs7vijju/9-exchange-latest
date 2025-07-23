import React from "react";
import { Outlet } from "react-router-dom";
import CollapseRightbar from "./right-collapse/CollapseRightbar";

const SportsLayout = () => {
  return (
    <div className="w-100 d-flex h-100 flex-1">
      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
      <div className="d-none d-lg-block">
        <CollapseRightbar />
      </div>
    </div>
  );
};
export default SportsLayout;

