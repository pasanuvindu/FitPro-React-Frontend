import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./components/BmiCal";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="" element={<BMICalculator />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
