import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = (props) => {
  const { message, className, name, placeholder } = props;
  return (
    <input
      type="text"
      className={`input ${className}`}
      value={message}
      name={name}
      placeholder={placeholder}
      data-test="input"
    />
  );
};

Input.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
