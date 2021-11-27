import React from "react";
import PropTypes from "prop-types";
import "./TextEditor.css";

export const TextEditor = (props) => {
  const { handleChange, message, className } = props;
  return (
    <div>
      <textarea
        className={`textarea ${className}`}
        value={message}
        onChange={(event) => handleChange(event.target.value)}
      ></textarea>
    </div>
  );
};

TextEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
};
