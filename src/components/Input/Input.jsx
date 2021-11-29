import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

export const Input = (props) => {
  const { handleChange, message, className, name, placeholder } = props;
  return (
    <input
      type="text"
      className={`input ${className}`}
      value={message}
      name={name}
      // onChange={(event) => handleChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  // handleChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
