import React from "react";
import Select from "react-select";
import { customStyles } from "../styles/ReactSelectStyles";

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
      <label htmlFor="select">{label}
      {required && <span className="span ">*</span>}
      </label>
      <Select
      
        placeholder={placeholder}
        styles={customStyles}
        id="select"
        value={value}
        onChange={onChange}
        options={options}
        isSearchable={true}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default SelectInput;
