import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const WorkoutFrame = () => {
  const { workoutId } = useParams(); // Get the workoutId from URL parameters
  const workoutData = useSelector((state) => state.workouts);

  const selectedWorkout = workoutData.find(
    (workout) => workout._id === workoutId
  );

  if (!selectedWorkout) {
    return <div>Workout not found.</div>;
  }

  return (
    <div className="frame h-[568px] relative w-[1087px] flex">
      <div className="overlap-group bg-white rounded-[22px] shadow-[0px 4px 11px #00000040] h-[509px] absolute top-[59px] left-0 w-full flex">
        <div className="left-part w-1/2">
          <img
            className="rectangle h-[405px] object-cover absolute top-[57px] left-[43px] w-[370px]"
            alt="Rectangle"
            src={selectedWorkout.image}
          />
        </div>
        <div className="right-part w-1/2 p-8">
          <div className="label">
            <p className="STEPS-get-down-on">
              <span className="text-xl font-bold block mb-4">STEPS:</span>
              {/* <span className="text-base block whitespace-pre-line">
                Use selectedWorkout.sets, selectedWorkout.reps, etc.
                {selectedWorkout.sets} sets x {selectedWorkout.reps} reps
              </span> */}

              <ol className="text-base pl-6 list-decimal">
                {selectedWorkout.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>

              <span className="text-base block mt-6">
                {selectedWorkout.caloriesEstimation} calories
              </span>
            </p>
          </div>
          <div className="button-wrapper flex justify-between mt-6">
            <button className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md">
              COMPLETE
            </button>
            <button className="mt-4 px-4 py-2 w-32 bg-gradient-to-r bg-gray-600 to-orange-400 text-white font-medium rounded-full shadow-md">
              SKIP
            </button>
          </div>
        </div>
      </div>
      <div className="text-wrapper-3 text-black font-bold text-xl absolute top-[-1px] left-[16px] w-[277px]">
        {/* Use selectedWorkout.workoutName */}
        {selectedWorkout.workoutName}
      </div>
    </div>
  );
};

export default WorkoutFrame;
