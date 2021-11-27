import React from "react";
import PropTypes from "prop-types";
import "./Bubble.css";
import { getFormattedTime } from "../../utils/timestamp-util";

export const Bubble = (props) => {
  const { message, timeStamp, userName, userType, className } = props;
  const currentUser = localStorage.getItem('chat_user')
  return (
    <div className={`bubble ${currentUser === userName ? 'self ': 'other '} ${className}`}>
      <div>{userName}</div>
      <p>{message}</p>
      <div className="timestamp">{getFormattedTime(timeStamp)}</div>
    </div>
  );
};

Bubble.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  timeStamp: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(["self", "other"]),
};
