import { MONTHS } from "../constants/constants";

export const getCurrentTimeStamp = () => {
  return new Date();
};

export const getFormattedTime = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}:${minutes}`;
};
