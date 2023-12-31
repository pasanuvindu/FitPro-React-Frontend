import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import bmicalculatorReducer from "./reducers/bmicalculatorSlice";
import workoutsReducer from "./reducers/workouts";
import dietsReducer from "./reducers/diets";

// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: {
    bmicalculator: bmicalculatorReducer,
    workouts: workoutsReducer,
    diets: dietsReducer,
  },
  middleware: [thunk],
});

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
