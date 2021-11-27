import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = (props) => {
  const { handleClick, className, children, isDisabled = false } = props;
  return (
    <button
      disabled={isDisabled}
      className={`button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};
