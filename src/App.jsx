// App.js
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./pages/header/Header";
import Home from "./pages/home/Homepage";
import Appui from "./pages/home/Appui";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const body = isMobile ? "body1" : "body";
  return (
    <div className={body}>
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Home />} />
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

export default App;
