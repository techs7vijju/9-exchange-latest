import React, { useRef, useEffect } from "react";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const DropdownMenu = ({
  title = "Dropdown",
  open = false,
  onToggle = () => {},
  items = [],
  showImages = true,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onToggle]);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className="dropdown-header"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => onToggle(!open)}
      >
        <span className="dropdown-title">{title}</span>
        {open ? (
          <IoChevronUpSharp className="dropdown-toggle-icon" />
        ) : (
          <IoChevronDownSharp className="dropdown-toggle-icon" />
        )}
      </button>
      {open && (
        <div className="dropdown-menu-custom" role="listbox">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item-custom" tabIndex={0} role="option">
              <div className="dropdown-item-wrapper">
                <div className="dropdown-item-content">
                  {showImages && item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="dropdown-icon"
                    />
                  )}
                  <span className="dropdown-label">{item.name}</span>
                </div>
                <FaChevronRight className="dropdown-arrow" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
