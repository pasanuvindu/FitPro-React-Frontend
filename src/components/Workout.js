import React from "react";
import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Choose Your Workout Plan</p>
          <p className="text-gray-600 mb-6">
            Welcome to our fitness training program. Transform your body and
            mind with our tailored workout plans designed to help you achieve
            your fitness goals.
          </p>
        </div>
        {/* <div className="flex items-center justify-center space-x-4">
          <a
            href="/home-workout"
            className="px-6 py-3 text-white bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-500 hover:to-pink-300 rounded-lg font-semibold"
          >
            Home Workout
          </a>
          <a
            href="/gym-workout"
            className="px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 rounded-lg font-semibold"
          >
            Gym Workout
          </a>
        </div> */}

        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/workoutlist?workoutPlace=Home"
            className="px-6 py-3 text-white bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-500 hover:to-pink-300 rounded-lg font-semibold"
          >
            Home Workout
          </Link>
          <Link
            to="/workoutlist?workoutPlace=Gym"
            className="px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 rounded-lg font-semibold"
          >
            Gym Workout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workout;
