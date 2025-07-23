import { useState } from "react";
import {
  FaTrophy,
  FaCoins,
  FaTicketAlt,
  FaPlusCircle,
  FaBars,
} from "react-icons/fa";
import MenuListSidebar from "./components/MenuListSidebar";

export default function BottomTabNavigator() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bottom-tab-navigator">
        <div className="tab-item">
          <FaTrophy size={28} />
          <div>Sports</div>
        </div>
        <div className="tab-item">
          <FaCoins size={28} />
          <div>Casino</div>
        </div>
        <div className="tab-item active">
          <FaTicketAlt size={28} />
        </div>
        <div className="tab-item">
          <FaPlusCircle size={28} />
          <div>Deposit</div>
        </div>
        <div className="tab-item" onClick={() => setSidebarOpen(true)}>
          <FaBars size={28} />
          <div>Menu</div>
        </div>
      </div>
      <MenuListSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
