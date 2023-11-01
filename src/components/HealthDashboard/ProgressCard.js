import React, { useState } from "react";

function ProgressCard() {
  const [waterConsumed, setWaterConsumed] = useState(0);
  const totalWaterIntake = 3000; // Total daily water intake in ml

  const handleAddWater = () => {
    if (waterConsumed + 200 <= totalWaterIntake) {
      setWaterConsumed(waterConsumed + 200);
    }
  };

  const handleRemoveWater = () => {
    if (waterConsumed - 200 >= 0) {
      setWaterConsumed(waterConsumed - 200);
    }
  };

  const completedPercentage = (
    (waterConsumed / totalWaterIntake) *
    100
  ).toFixed(2);
  const remainingPercentage = (100 - completedPercentage).toFixed(2);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">BMI</h3>
        <p className="text-gray-600">BMI Score: 21.73</p>
        <p className="text-gray-600">Waist: 34.00</p>
        <p className="text-gray-600">Hip: 36.21</p>
        <p className="text-gray-600">Waist to Hip Ratio: 0.94</p>
        <p className="text-gray-600">
          Risk Level: (0.90 - 0.95 - Moderate Risk)
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          FIT BIT DATA
        </h3>
        <p className="text-gray-600">Steps Count: 648</p>
        <p className="text-gray-600">Calories Burned: 60</p>
        <p className="text-gray-600">AVG Heart Rate: 73</p>
        <p className="text-gray-600">Fitness Level: 10</p>
        <p className="text-gray-600">Sleep: 7hrs</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">NUTRITION</h3>
        <p className="text-gray-600">Calories: 245</p>
        <p className="text-gray-600">Carbs: 28%</p>
        <p className="text-gray-600">Fat: 22%</p>
        <p className="text-gray-600">Protein: 30%</p>
        <p className="text-gray-600">Other: 20%</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          DAILY WATER CONSUMPTION
        </h3>
        <p className="text-gray-600">Completed {completedPercentage}%</p>
        <p className="text-gray-600">Remaining {remainingPercentage}%</p>
        <div className="flex justify-between mt-2">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleAddWater}
          >
            +
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleRemoveWater}
          >
            -
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => {
              // Navigate to the "/watertrekker" page
              window.location.href = "/watertrekker";
            }}
          >
            Weekly Watertrekker
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
