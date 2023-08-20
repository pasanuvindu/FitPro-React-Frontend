import { SHOW_MESSAGE, HIDE_MESSAGE } from "../constants/actionTypes";

export const showMessage = (message) => ({
  type: SHOW_MESSAGE,
  payload: message,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
});
