import { CHATS, LOCAL_CHATS } from "../../constants/constants";

const initialState = {
  chat: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS:
      localStorage.setItem(LOCAL_CHATS, JSON.stringify(action.chats));
      return { ...state, chats: action.chats };
    default:
      return state;
  }
};

export default chatReducer;
