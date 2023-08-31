import React from "react";
import "./WorkoutTrackerTYpes.css";
import { Link } from "react-router-dom";

function WorkoutTrackerTypes() {
  return (
    <div className="workout-card-container">
      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group flex-wrap flex justify-center items-center">
        <Link to="/dailyWorkout">
          <button className="daily-button">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              className="transition-transform group-hover:scale-110 duration-200"
              alt="Daily Progress"
            ></img>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="p-4 text-white">Daily Progress</div>
            </div>
          </button>
        </Link>
      </div>

      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group flex-wrap flex justify-center items-center">
        <Link to="/monthlyWorkout">
          <button className="daily-button">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              className="transition-transform group-hover:scale-110 duration-200"
              alt="Daily Progress"
            ></img>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="p-4 text-white">Monthly Progress</div>
            </div>
          </button>
        </Link>
      </div>

      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group flex-wrap flex justify-center items-center">
        <Link to="/progressStat">
          <button className="daily-button">
            <img
              src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80"
              className="transition-transform group-hover:scale-110 duration-200"
              alt="Daily Progress"
            ></img>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="p-4 text-white">Progress Stats</div>
            </div>
          </button>
        </Link>
      </div>

    </div>
  );
}

export default WorkoutTrackerTypes;
