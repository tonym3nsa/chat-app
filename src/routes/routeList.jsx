import { LoginPage } from "../containers/LoginPage/LoginPage";
import { ChatPage } from "../containers/ChatPage/ChatPage";
import { CHAT_PAGE, LOGIN_PAGE } from "../constants/constants";

export const routeList = [
  {
    path: LOGIN_PAGE,
    exact: true,
    component: LoginPage,
    isLogin: true,
    title: "Login",
  },
  {
    path: CHAT_PAGE,
    exact: true,
    component: ChatPage,
    title: "Chat",
  },
];
