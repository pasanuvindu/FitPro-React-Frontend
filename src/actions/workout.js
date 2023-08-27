import * as api from "../api";
import { FETCH_WORKOUTS } from "../constants/actionTypes";

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts();
    dispatch({ type: FETCH_WORKOUTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
