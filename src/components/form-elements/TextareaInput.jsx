import React from "react";

const TextareaInput = ({
  type,
  label,
  required,
  placeholder,
  error,
  value,
  cols,
  rows,
  onChange,
}) => {
  return (
    <div className="textarea-group">
      {label && <label>{label}
        {required && <span className="span ">*</span>}
        </label>}
      <textarea
        type={type}
        id="textarea"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        cols={cols}
        rows={rows}
      />
      {error && <small className="small">{error}</small>}
    </div>
  );
};

export default TextareaInput;
