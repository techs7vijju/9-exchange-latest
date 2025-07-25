import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SportsTabNavigator from "./mobile/components/SportsTabNavigator";
import { useMediaQuery } from "react-responsive";
import CollapseRightbar from "./sidebar/CollapseRightbar";

const SportsLayout = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [activeTab, setActiveTab] = useState("cricket");
  const showTabs = isMobile && location.pathname.startsWith("/sports");
  return (
    <div className="w-100 d-flex h-100 flex-1 pt-2">
      {showTabs && (
        <SportsTabNavigator activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Outlet context={{ activeTab }} />
      </div>
      <div className="d-none d-lg-block">
        <CollapseRightbar />
      </div>
    </div>
  );
};
export default SportsLayout;
