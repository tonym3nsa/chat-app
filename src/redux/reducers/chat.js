import { CHATS } from "../../constants/constants";

const initialState = {
  chat: [],
};

const chatReducer = (state = initialState, action) => {
  console.log("chats...>>>", action);
  switch (action.type) {
    case CHATS:
      return { ...state, chats: action.chats };
      break;
    default:
      return state;
  }
};

export default chatReducer;
