import React from "react";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

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
  hideErrorMessage
}) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="span">*</span>}
        </label>
      )}

      <div className="input-section flex items-center">
        {icon && (
          <div className="input-logo-container flex-center">
            <img src={icon} alt="logo" className="input-logo" />
          </div>
        )}
        <input
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
        />
        
        {type === "password" && (
          <>
            {showPassword ? (
              <FaEye size={18} className="icon" onClick={togglePassword} />
            ) : (
              <FaEyeSlash size={18} className="icon" onClick={togglePassword} />
            )}
          </>
        )}
        
        {showLoading && <span >...</span>}
        
        {showCheckmark && (
          <span className=" text-success border-none">
            <FaCheck />
          </span>
        )}
        
        {svgIcon && svgIcon()}
      </div>
      
      {!hideErrorMessage && error && <small className="error">{error}</small>}
    </div>
  );
};

export default TextInput;