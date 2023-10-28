import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts } from "../actions/workout"; // Adjust the path as needed
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";
const WorkoutCard = ({ workout }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="my-4">
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
      <img
        className="w-24 h-24 object-cover"
        src={workout.image}
        alt={workout.workoutName}
      />
      <div className="p-4 flex flex-col">
        <div className="text-xl font-semibold" style={{ marginLeft: '-352px' }}>{workout.workoutName}</div>
        <div style={{ marginRight: '12px' }}>
          <div className="flex items-center space-x-2 mt-2  text-gray-600 text-sm" style={{ marginLeft: '67px' }}>
            <span>{workout.duration}min</span>
            <span>|</span>
            <span>Intensity</span>
            {Array.from({ length: workout?.intensity }).map((_, index) => (
              <span
                key={index}
                className="w-2 h-2 bg-gray-400 rounded-full"
              ></span>
            ))}
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
          style={{ marginLeft: '382px' }}
          onClick={() => navigate(`/workoutframe/${workout._id}`)}
        >
          START
        </button>
      </div>
    </div>
    </div>
  );
};

const WorkoutList = () => {
  const dispatch = useDispatch();
  const wotype = window.location.search.substring("workoutPlace").split("=")[1];
  const [records, setRecords] = useState({});

  const [workoutData, setWorkoutData] = useState([]); // Assuming you've named your reducer 'workouts'

  // const workoutData = useSelector((state) =>
  //   state.workouts.filter((w) => w.workoutPlace === wotype)
  // ); // Assuming you've named your reducer 'workouts'

  // useEffect(() => {
  //   dispatch(getWorkouts()); // Dispatch the action to fetch workouts when the component mounts
  // }, [dispatch]);


  useEffect(() => {
    const savedHeight =
      localStorage.getItem("height") === null
        ? 143
        : localStorage.getItem("height");
    const savedWeight =
      localStorage.getItem("weight") === null
        ? 60
        : localStorage.getItem("weight");

    const Data = {
      age: savedHeight,
      weight_kg: savedWeight,
      exercise_hours_per_week: 5,
      calories_consumed_per_day: 2200,
    };

    const apiURL = "http://localhost:8000/workout/predict/workout";

    axios.post(apiURL, Data).then((response) => {
      if (response.data) {
        setRecords(response.data);
        const baseURL = `http://localhost:5000/api/workouts?workoutType=${response.data.workout_recommendation}`;
        console.log("baseURL:", response.data);

        axios.get(baseURL).then((secondResponse) => {
          if (secondResponse.data) {
            console.log("second call", secondResponse.data);
            setWorkoutData(secondResponse.data);
          }
        });
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
        <div className="text-2xl font-bold mb-6">Your Home Workouts</div>
        {workoutData?.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
