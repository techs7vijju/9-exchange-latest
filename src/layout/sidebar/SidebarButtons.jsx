import { Images } from "../../images/images";

const SidebarButtons = () => {
  return (
    <div className="sidebar-buttons-container h-100">
      <div className="d-flex gap-1-5 gap-xxl-2 flex-column h-100">
        <div className="button-wrapper">
          <img src={Images.thump} alt="Thumb" />
        </div>
        <div className="button-wrapper">
          <img src={Images.star} alt="Star" />
        </div>
        <div className="button-wrapper">
          <img src={Images.live} alt="Live" />
        </div>
        <div className="button-wrapper">
          <img src={Images.settings} alt="Settings" />
        </div>
        <div className="button-wrapper">
          <img src={Images.personal} alt="Personal" />
        </div>
      </div>
    </div>
  );
};

export default SidebarButtons;
