import { AUTHOR, MONTHS } from "../constants/constants";

/**
 * Returns human readable time from UNIX time
 * @param {number} timestamp
 * @returns {string}
 */

export const getFormattedTime = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}:${minutes}`;
};

/**
 * Returns boolean to detect the presence of the 'author' variable in local storage
 * @returns {boolean}
 */

export const isUserActive = () => {
  const author = localStorage.getItem(AUTHOR);
  return author ? true : false;
};
