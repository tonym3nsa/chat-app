import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

export const Input = (props) => {
  const { handleChange, message, className } = props;
  return (
    <input
        type="text"
      className={`textarea ${className}`}
      value={message}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
};
