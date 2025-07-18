import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Appui from "./pages/home/Appui";

function App() {

  return (
    <>
      <div className="body">
        <div>
          <Routes>
            <Route path="/appui" element={<Appui />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
