import { CHATS, PAGE_LENGTH } from "../../constants/constants";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_ENDPOINT;
export const postMessage = (payload) => {
  return (dispatch) => {
    return axios
      .post(apiURL, payload)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  };
};

export const getMessages = (limit = PAGE_LENGTH) => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}`)
      .then((response) => {
        dispatch({ type: CHATS, chats: response.data });
      })
      .catch((error) => {
        return error;
      });
  };
};

export default { postMessage };
