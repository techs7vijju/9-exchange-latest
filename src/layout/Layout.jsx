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
      <Outlet />
      <Footer />
      {isMobile && <BottomTabNavigator />}
    </div>
  );
};

export default Layout;
