import React from "react";
import PropTypes from "prop-types";
import { getFormattedTime } from "../../utils/utils";
import { AUTHOR } from "../../constants/constants";
import "./bubble.css";

export const Bubble = (props) => {
  const { message, timestamp, author, className } = props;
  const currentUser = localStorage.getItem(AUTHOR);
  return (
    <div
      role="listitem"
      className={`bubble ${
        currentUser === author ? "self " : "other "
      } ${className}`}
    >
      <div className="author">{author}</div>
      <p data-test="bubble-message">{message}</p>
      <div className="timestamp" data-test="timestamp">
        {(timestamp || Number.isInteger(timestamp)) &&
          getFormattedTime(timestamp)}
      </div>
    </div>
  );
};

Bubble.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(["self", "other"]),
};
