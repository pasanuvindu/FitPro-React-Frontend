import React from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BMICalculator from "./components/BmiCal";
import Login from "./components/Login/Login";
import WorkoutMain from "./components/WorkoutTracker/WorkoutMain";
import DietTracker from "./components/WorkoutTracker/DietTracker";
import WorkoutTracker from "./components/WorkoutTracker/WorkoutTracker";
import Workout from "./components/Workout";
import WorkoutList from "./components/WorkoutList";
import WorkoutFrame from "./components/WorkoutFrame";
import Hero from "./components/Hero";
import ImagePicker from "./components/UploadImage/ImagePicker";
import Diet from "./components/Diet";
import DailyWorkout from "./components/WorkoutTracker/DailyWorkout";
import MonthlyWorkout from "./components/WorkoutTracker/MonthlyWorkout";
import DietList from "./components/DietList";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/workout" element={<Workout />} />
            <Route path="/workoutlist" element={<WorkoutList />} />

            {/* Updated routes */}
            {/* <Route path="/workout" element={<Workout />}>
              <Route
                path="home-workout"
                element={<WorkoutList filter="home" />}
              />
              <Route
                path="gym-workout"
                element={<WorkoutList filter="gym" />}
              />
            </Route> */}

            <Route path="/workoutframe/:workoutId" element={<WorkoutFrame />} />
            <Route path="/uploadImg" element={<ImagePicker />} />
            <Route path="/workoutTypes" element={<WorkoutMain />} />
            <Route path="/dietTracker" element={<DietTracker />} />
            <Route path="/workoutTracker" element={<WorkoutTracker />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/monthlyWorkout" element={<MonthlyWorkout />} />
            <Route path="/dailyWorkout" element={<DailyWorkout />} />
            <Route path="/dietlist" element={<DietList />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
