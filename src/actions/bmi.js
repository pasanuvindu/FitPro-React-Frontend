import * as api from "../api";
import {
  CALCULATE_BMI,
  CALCULATE_BMI_SUCCESS,
  CALCULATE_BMI_ERROR,
} from "../constants/actionTypes";

export const calculateBMI = (data) => async (dispatch) => {
  try {
    // Make API call to save BMI data
    const response = await api.calculateBMI(data); // Adjust this based on your API endpoint

    // Dispatch success action with the response data
    dispatch({
      type: CALCULATE_BMI_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Dispatch error action if API call fails
    dispatch({
      type: CALCULATE_BMI_ERROR,
      payload: error.message,
    });
  }
};
