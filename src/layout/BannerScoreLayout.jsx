import React, { useState } from "react";
import SidebarButtons from "./sidebar/SidebarButtons";

const BannerScoreLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="d-none d-lg-flex px-1">
        <SidebarButtons />
      </div>
      <div className="px-0 px-lg-2 w-100">{children}</div>
    </div>
  );
};

export default BannerScoreLayout;
