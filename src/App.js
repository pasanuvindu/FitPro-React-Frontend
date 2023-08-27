import React from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import BMICalculator from "./components/BmiCal";
import Login from "./components/Login/Login";
import { UploadImage } from "./components/UploadImage/UploadImage";
import WorkoutMain from "./components/WorkoutTracker/WorkoutMain";
import DietTracker from "./components/WorkoutTracker/DietTracker";
import WorkoutTracker from "./components/WorkoutTracker/WorkoutTracker";
function App() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<BMICalculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/uploadImg" element={<UploadImage />} />
        <Route path="/workout" element={<WorkoutMain/>}/>
        <Route path= "/dietTracker" element={<DietTracker/>}/>
        <Route path = "/workoutTracker" element={<WorkoutTracker/>}/>
      </Routes>
      {/* </Layout>  */}

    </Router>
  );
}

export default App;
