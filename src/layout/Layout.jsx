import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BottomTabNavigator from "./mobile/BottomTabNavigator";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 992 });

  return (
    <div>
      <Header />

      {/* Main content area */}
      <div className="layout-main-content">
        <Outlet />
      </div>
      <Footer />
      {isMobile && <BottomTabNavigator />}
    </div>
  );
};

export default Layout;
