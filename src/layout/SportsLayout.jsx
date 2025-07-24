import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CollapseRightbar from "./right-collapse/CollapseRightbar";
import SportsTabNavigator from "./mobile/components/SportsTabNavigator";
import { useMediaQuery } from "react-responsive";

const SportsLayout = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [activeTab, setActiveTab] = useState("cricket");
  const showTabs = isMobile && location.pathname.startsWith("/sports");
  return (
    <div className="w-100 d-flex h-100 flex-1">
      {showTabs && (
        <SportsTabNavigator activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      <div style={{ flex: "1" }}>
        <Outlet context={{ activeTab }} />
      </div>
      <div className="d-none d-lg-block">
        <CollapseRightbar />
      </div>
    </div>
  );
};
export default SportsLayout;
