import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import { MdOutlineDateRange } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({
  label,
  required,
  placeholder = "Select date",
  selectedDate,
  setSelectedDate,
  minDate,
  maxDate,
  disabled = false,
  error,
  value,
  icon,
  svgIcon,
  dateFormat = "dd/MM/yyyy",
}) => {
  const datePickerRef = useRef(null);

  return (
    <div className="input-group">
      {label && (
        <label htmlFor="input">
          {label}
          {required && <span className="span">*</span>}
        </label>
      )}

      <div className="input-section flex items-center justify-between">
        {icon && (
          <div className="input-logo-container flex-center">
            <img src={icon} alt="logo" className="input-logo" />
          </div>
        )}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat={dateFormat}
          placeholderText={placeholder}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          className=""
          ref={datePickerRef}
        />
        <div className="p-1 cursor-pointer" onClick={() => datePickerRef.current.setOpen(true)}>
          <MdOutlineDateRange size={18} className="color-blue1" />
        </div>
        {svgIcon && svgIcon()}
      </div>

      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default InputDate;
