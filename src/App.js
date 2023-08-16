import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BMICalculator from "./components/BmiCal";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <BMICalculator />
      </Router>
    </div>
  );
}

export default App;
