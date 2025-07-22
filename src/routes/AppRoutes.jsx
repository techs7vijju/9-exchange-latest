import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "../pages/home/Homepage";
import Appui from "../pages/home/Appui";
import Layout from "../layout/Layout";
import Tickets from "../pages/more/tickets/tickets";
import MoreHome from "../pages/more/moreHome";
import PageNotFound from "../pages/page-not-found/PageNotFound";

function AppRoutes() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const body = isMobile ? "body1" : "body";
  return (
    <div className={body}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<MoreHome />}>
            <Route index element={<DefaultMoreContent />} />
            {/* <Route path="deposits" element={<Deposits />} /> */}
            {/* <Route path="withdrawals" element={<Withdrawals />} /> */}
            <Route path="tickets" element={<Tickets />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            {/* <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
            {/* <Route path="terms-of-service" element={<TermsOfService />} /> */}
          </Route>

          <Route path="appui" element={<Appui />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
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
