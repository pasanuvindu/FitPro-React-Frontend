import React from "react";

function ActiveWorkouts() {
  // Sample workout plan data
  const sampleWorkoutPlan = [
    {
      day: "Day 1",
      exercise: "Push-ups",
      sets: 3,
      reps: 12,
    },
    {
      day: "Day 2",
      exercise: "Squats",
      sets: 3,
      reps: 10,
    },
    {
      day: "Day 3",
      exercise: "Planks",
      sets: 3,
      reps: 30,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Active Workouts</h2>

      <div className="mb-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/pushup-1462808858.gif"
          alt="Workout Image"
          className="w-full rounded-md shadow-md"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">Sample Workout Plan</h3>
      <ul className="list-disc pl-6">
        {sampleWorkoutPlan.map((workout, index) => (
          <li key={index}>
            <strong>{workout.day}:</strong> {workout.sets} sets of{" "}
            {workout.reps} reps of {workout.exercise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveWorkouts;
