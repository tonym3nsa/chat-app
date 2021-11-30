import React from "react";

export const ChatLayout = (props) => {
  const { title, children } = props;
  document.title = title;
  document.body.classList.remove("login");

  return <div className="flex">{children}</div>;
};
