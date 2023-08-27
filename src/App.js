import React from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BMICalculator from "./components/BmiCal";
import Login from "./components/Login/Login";
import Workout from "./components/Workout";
import WorkoutList from "./components/WorkoutList";
import WorkoutFrame from "./components/WorkoutFrame";
import Hero from "./components/Hero";
import Diet from "./components/Diet";

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

            {/* Updated routes */}
            <Route path="/workout" element={<Workout />}>
              <Route
                path="home-workout"
                element={<WorkoutList filter="home" />}
              />
              <Route
                path="gym-workout"
                element={<WorkoutList filter="gym" />}
              />
            </Route>

            <Route path="/workoutframe/:workoutId" element={<WorkoutFrame />} />
            <Route path="/diet" element={<Diet />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
