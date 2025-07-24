import React, { useRef } from "react";
import { FaCalendar, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

const TextInput = ({
  type,
  label,
  required,
  maxLength,
  placeholder,
  icon,
  svgIcon,
  togglePassword,
  showPassword,
  name,
  error,
  onKeyDown,
  onInput,
  onPaste,
  value,
  onChange,
  showCheckmark,
  showLoading,
  hideErrorMessage,
  minDate,
  maxDate,
}) => {
  const inputRef = useRef(null);

  const handleWrapperClick = () => {
    if (type === "date" && inputRef.current) {
      inputRef.current.showPicker?.();
      inputRef.current.focus();
    }
  };

  return (
    <div className="input-group label">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="span">*</span>}
        </label>
      )}

      <div
        className="input-section flex items-center"
        onClick={handleWrapperClick}
        style={{ cursor: type === "date" ? "pointer" : "default" }}
      >
        {icon && (
          <div className="input-logo-container flex-center">
            <img src={icon} alt="logo" className="input-logo" />
          </div>
        )}

        <input
          ref={inputRef}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          className={error ? "input-error" : ""}
          onKeyDown={onKeyDown}
          onInput={onInput}
          onPaste={onPaste}
          min={type === "date" ? minDate : undefined}
          max={type === "date" ? maxDate : undefined}
        />

        {type === "password" &&
          (showPassword ? (
            <FaEye size={18} className="icon" onClick={togglePassword} />
          ) : (
            <FaEyeSlash size={18} className="icon" onClick={togglePassword} />
          ))}

        {type === "date" && <FaCalendar size={18} className="icon" />}

        {showLoading && (
          <span className="spinner-border spinner-border-sm blue-color"></span>
        )}

        {showCheckmark && <FaCheck className="icon" />}

        {svgIcon && (
          <span className="icon">
            <img src={icon} />
          </span>
        )}
      </div>

      {!hideErrorMessage && error && <small className="error">{error}</small>}
    </div>
  );
};

export default TextInput;
