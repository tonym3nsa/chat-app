import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = (props) => {
  const { className, children, type, isDisabled = false } = props;
  const [focus, setFocus] = useState(false);
  return (
    <button
      disabled={isDisabled}
      className={`button ${className}`}
      type={type}
      data-test="button"
      onClick={() => setFocus(true)}
      onMouseUp={() => setFocus(false)}
      aria-pressed={focus}
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
