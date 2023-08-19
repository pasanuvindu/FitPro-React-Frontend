import React from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import BMICalculator from "./components/BmiCal";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Router>
        {/* <Layout> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="" element={<BMICalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Layout>  */}
      </Router>
    </div>
  );
}

export default App;
