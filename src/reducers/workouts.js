import { FETCH_WORKOUTS } from "../constants/actionTypes";

const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WORKOUTS:
      return action.payload;
    default:
      return state;
  }
};

export default workoutsReducer; // Export using the same name
