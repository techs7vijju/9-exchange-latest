import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  register,
  name,
  errors,
  onKeyDown,
  onInput,
  onPaste,
}) => {
  const error = errors?.[name]?.message;

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
          maxLength={maxLength}
          placeholder={placeholder}
          className={error ? "input-error" : ""}
          {...(register && name ? register(name) : {})}
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
        {svgIcon && svgIcon()}
      </div>
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default TextInput;
