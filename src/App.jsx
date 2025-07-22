// App.js
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./pages/header/Header";
import Home from "./pages/home/Homepage";
import MoreHome from "./pages/more/moreHome";
import Appui from "./pages/home/Appui";
// import Deposits from "./pages/more/Deposits";
// import Withdrawals from "./pages/more/Withdrawals";
import Tickets from "./pages/more/tickets/tickets";
// import Profile from "./pages/more/Profile";
// import PrivacyPolicy from "./pages/more/PrivacyPolicy";
// import TermsOfService from "./pages/more/TermsOfService";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const body = isMobile ? "body1" : "body";
  return (
    <div className={body}>
      <Routes>
        <Route element={<LayoutWithHeader />}>
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
        </Route>
        <Route path="/appui" element={<Appui />} />
      </Routes>
    </div>
  );
}

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function DefaultMoreContent() {
  return (
    <div className="w-80 h-100 grey-color1-bg">
      Select an option from the sidebar
    </div>
  );
}

export default App;
