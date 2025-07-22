import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "../pages/home/Homepage";
import Appui from "../pages/home/Appui";
import Layout from "../layout/Layout";
import Tickets from "../pages/more/tickets/tickets";
import MoreHome from "../pages/more/moreHome";
import SportsLayout from "../layout/SportsLayout";
import Sports from "../pages/sports/Sports";
import PageNotFound from "../pages/page-not-found/PageNotFound";

function AppRoutes() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const body = isMobile ? "body1" : "body";
  return (
    <div className={body}>
      <Routes>
        <Route element={<Layout />}>
          {/* Main pages with right bar */}
          <Route element={<SportsLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<Sports />} />
          </Route>
          <Route path="/more" element={<MoreHome />}>
            <Route index element={<DefaultMoreContent />} />
            <Route path="tickets" element={<Tickets />} />
          </Route>
        </Route>
        <Route path="/appui" element={<Appui />} />

        <Route path="appui" element={<Appui />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
function DefaultMoreContent() {
  return (
    <div className="w-80 h-100 grey-color1-bg">
      Select an option from the sidebar
    </div>
  );
}
export default AppRoutes;
