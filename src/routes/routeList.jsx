import { CHAT, LOGIN } from "../constants/constants";
import { LoginPage } from "../containers/LoginPage";
import { ChatPage } from "../containers/ChatPage";

export const routeList = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
    isLogin: true,
  },
  {
    path: "/chat",
    exact: true,
    component: ChatPage,
  },
];
