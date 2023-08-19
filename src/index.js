// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import bmicalculatorReducer from "./reducers/bmicalculatorSlice"; // Import your reducer
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: {
    bmicalculator: bmicalculatorReducer, // Use your reducer here
  },
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
