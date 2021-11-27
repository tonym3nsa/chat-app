import * as React from "react";
import { Route } from "react-router-dom";
import { LoginLayout } from "../Layouts/LoginLayout";
import { ChatLayout } from "../Layouts/ChatLayout";

const RouteSelection = ({ component: Component, ...rest }) => {
  const { isLogin } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <LoginLayout>
            <Component {...props} />
          </LoginLayout>
        ) : (
          <ChatLayout>
            <Component {...props} />
          </ChatLayout>
        )
      }
    />
  );
};
export default RouteSelection;
