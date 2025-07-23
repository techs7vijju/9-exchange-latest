import React from "react";
import { Dropdown } from "react-bootstrap";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const DropdownMenu = ({
  title = "Dropdown",
  open = false,
  onToggle = () => {},
  items = [],
  showImages = true,
}) => {
  return (
    <div className="dropdown-container">
      <Dropdown show={open} onToggle={onToggle}>
        <Dropdown.Toggle className="dropdown-header">
          <span className="dropdown-title">{title}</span>
          {open ? (
            <IoChevronUpSharp className="dropdown-toggle-icon" />
          ) : (
            <IoChevronDownSharp className="dropdown-toggle-icon" />
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-custom">
          {items.map((item, index) => (
            <Dropdown.Item key={index} className="dropdown-item-custom">
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
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
