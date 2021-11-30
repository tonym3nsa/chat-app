import * as React from "react";
import { Route, useHistory } from "react-router-dom";
import { LoginLayout } from "../layouts/LoginLayout";
import { ChatLayout } from "../layouts/ChatLayout";
import { isUserActive } from "../utils/utils";
import { CHAT_PAGE, LOGIN_PAGE } from "../constants/constants";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = rest;
  const history = useHistory();

  React.useEffect(() => {
    if (!isUserActive()) {
      history.push(LOGIN_PAGE);
    } else {
      history.push(CHAT_PAGE);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <LoginLayout {...rest}>
            <Component {...props} />
          </LoginLayout>
        ) : (
          <ChatLayout {...rest}>
            <Component {...props} />
          </ChatLayout>
        )
      }
    />
  );
};
export default AuthRoute;
