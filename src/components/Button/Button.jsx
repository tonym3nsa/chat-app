import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = (props) => {
  const { className, children, type, isDisabled = false } = props;
  return (
    <button
      disabled={isDisabled}
      className={`button ${className}`}
      type={type}
      data-test="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button"]),
};
