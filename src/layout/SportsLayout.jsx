import React from "react";
import { Outlet } from "react-router-dom";
import CollapseRightbar from "./right-collapse/CollapseRightbar";

const SportsLayout = () => {
  return (
    <div className="d-flex h-100">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <CollapseRightbar />
    </div>
  );
};

export default SportsLayout;
