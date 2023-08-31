import { FETCH_DIETS } from "../constants/actionTypes";

const dietsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DIETS:
      return action.payload;
    default:
      return state;
  }
};

export default dietsReducer;
