import React from "react";
import PropTypes from "prop-types";
import "./Bubble.css";
import { getFormattedTime } from "../../utils/timestamp-utils";

export const Bubble = (props) => {
  const { message, timeStamp, author, userType, className } = props;
  const currentUser = localStorage.getItem("chat_user");
  return (
    <div
      className={`bubble ${
        currentUser === author ? "self " : "other "
      } ${className}`}
    >
      <div className="author">{author}</div>
      <p>{message}</p>
      <div className="timestamp">
        {timeStamp && getFormattedTime(timeStamp)}
      </div>
    </div>
  );
};

Bubble.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  timeStamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(["self", "other"]),
};
