import * as React from "react";

export const LoginLayout = (props) => {
  const { title, children } = props;
  document.body.classList.add("login");
  document.title = title;

  return <div className="flex">{children}</div>;
};
