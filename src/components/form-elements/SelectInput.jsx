import React from "react";
import Select from "react-select";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SelectInput = ({
  label,
  options,
  value,
  onChange,
  error,
  required,
  placeholder,
}) => {
  const DropdownIndicator = (props) => {
    return (
      <div {...props.innerProps} className="react-select__dropdown-indicator">
        {props.selectProps.menuIsOpen ? (
          <FaChevronUp className="react-select__chevron" />
        ) : (
          <FaChevronDown className="react-select__chevron" />
        )}
      </div>
    );
  };

  return (
    <div className="select-group">
      <label htmlFor="select">
        {label}
        {required && <span>*</span>}
      </label>
      <Select
        classNamePrefix="react-select"
        placeholder={placeholder}
        id="select"
        value={value}
        onChange={onChange}
        options={options}
        isSearchable={true}
        className={error ? "is-invalid" : ""}
        components={{ DropdownIndicator }}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default SelectInput;