import { FaTrophy, FaCoins } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function BottomTabNavigator() {
  return (
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
      <div className="tab-item">
        <FaBars size={28} />
        <div>Menu</div>
      </div>
    </div>
  );
}
