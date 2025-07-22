import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "../pages/home/Homepage";
import Appui from "../pages/home/Appui";
import Layout from "../layout/Layout";

function AppRoutes() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const body = isMobile ? "body1" : "body";
  return (
    <div className={body}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/appui" element={<Appui />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
