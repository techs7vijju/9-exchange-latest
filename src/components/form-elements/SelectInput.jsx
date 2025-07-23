import React from "react";
import Select from "react-select";
// import "./SelectInput.css"; // Your CSS file with the above styles

const SelectInput = ({
  label,
  options,
  value,
  onChange,
  error,
  required,
  placeholder,
}) => {
  return (
    <div className="select-group">
      <label htmlFor="select">
        {label}
        {required && <span className="span">*</span>}
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
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default SelectInput;