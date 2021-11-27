import * as React from "react";

export const ChatLayout = (props) => {
  const { children } = props;
  return <div className="flex">{children}</div>;
};
