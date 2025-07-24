import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const tabs = [
  { label: "Cricket", value: "cricket" },
  { label: "Tennis", value: "tennis" },
  { label: "Soccer", value: "soccer" },
];

const SportsTabNavigator = ({ activeTab, onTabChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (!isMobile) return null;

  return (
    <div
      className="sports-tab-navigator mobile"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#fff",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          style={{
            background: activeTab === tab.value ? "#007bff" : "transparent",
            color: activeTab === tab.value ? "#fff" : "#333",
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            fontWeight: activeTab === tab.value ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SportsTabNavigator;


