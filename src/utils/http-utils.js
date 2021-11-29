import axios from "axios";

const apiURL = process.env.REACT_APP_API_ENDPOINT;

export const post = (payload) => {
  return axios
    .post(apiURL, payload)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const get = () => {
  return axios
    .get(`${apiURL}&limit=10`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
