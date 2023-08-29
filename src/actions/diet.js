import * as api from "../api";
import { FETCH_DIETS } from "../constants/actionTypes"; // Make sure to define FETCH_DIETS in your actionTypes file

export const getDiets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDiets(); // Assuming you have a fetchDiets function in your api.js
    dispatch({ type: FETCH_DIETS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
