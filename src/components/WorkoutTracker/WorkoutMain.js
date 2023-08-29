import React from "react";
import WorkoutTypes from "./WorkoutTypes";
function WorkoutMain() {
  const imageWorkout =
    "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1785&q=80";
  const dietWorkout =
    "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80";
  const workoutHeader = "Workout Tracker";
  const dietHeader = "Diet Tracker";
  const buttonWorkout = "Go to Workout Tracker";
  const buttondiet = "Go to Diet Tracker";
  const linkWorkout = "/workoutTracker";
  const linkDiet = "/dietTracker";
  const desc1 = "You will get the progress of the monthly and daily workouts related through this tracker"
  const desc2 = "You will get the progress related to the diets which you have gained through this tracker"
  return (
    <div>
      <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
        <div className="flex gap-4">
          <WorkoutTypes
            image={imageWorkout}
            header={workoutHeader}
            button={buttonWorkout}
            link={linkWorkout}
            desc= {desc1}
          />
          <WorkoutTypes
            image={dietWorkout}
            header={dietHeader}
            button={buttondiet}
            link={linkDiet}
            desc = {desc2}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkoutMain;
