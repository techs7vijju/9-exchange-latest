import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

function DefaultMoreContent() {
  return (
    <div className="w-80 h-100 grey-color1-bg">
      Select an option from the sidebar
    </div>
  );
}

export default App;
