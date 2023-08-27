import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts } from "../actions/workout"; // Adjust the path as needed
import { useLocation, useNavigate } from "react-router-dom"; // Import the useNavigate hook

const WorkoutCard = ({ workout }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
      <img
        className="w-24 h-24 object-cover"
        src={workout.image}
        alt={workout.workoutName}
      />
      <div className="p-4 flex flex-col">
        <div className="text-xl font-semibold">{workout.workoutName}</div>
        <div className="flex items-center space-x-2 mt-2 text-gray-600 text-sm">
          <span>{workout.duration}min</span>
          <span>|</span>
          <span>Intensity</span>
          {Array.from({ length: workout.intensity }).map((_, index) => (
            <span
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full"
            ></span>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
          onClick={() => navigate(`/workoutframe/${workout._id}`)}
        >
          START
        </button>
      </div>
    </div>
  );
};

const WorkoutList = () => {
  const dispatch = useDispatch();
  const workoutData = useSelector((state) => state.workouts);
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Get query parameters
  const filter = queryParams.get("filter"); // Get the 'filter' parameter value

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  const filteredWorkouts = filter
    ? workoutData.filter(
        (workout) => workout.workoutPlace.toLowerCase() === filter
      )
    : workoutData;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
        <div className="text-2xl font-bold mb-6">
          {filter === "home" ? "Your Home Workouts" : "Your Gym Workouts"}
        </div>
        {filteredWorkouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
