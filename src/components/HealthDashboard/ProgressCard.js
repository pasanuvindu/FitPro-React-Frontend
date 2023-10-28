import React from "react";

function ProgressCard() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-md shadow-md text-white">
        <h3 className="text-xl font-semibold mb-2">Card 1</h3>
        <p>BMI Score: 21.73</p>
        <p>Waist: 34.00</p>
        <p>Hip: 36.21</p>
        <p>Waist to Hip Ratio: 0.94</p>
        <p>Risk Level: (0.90 - 0.95 - Moderate Risk)</p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-md shadow-md text-white">
        <h3 className="text-xl font-semibold mb-2">Card 2</h3>
        <p>Fit Bit Data</p>
        <p>Steps Count: 648</p>
        <p>Calories Burned: 60</p>
        <p>AVG Heart Rate: 73</p>
        <p>Fitness Level: 10</p>
        <p>Sleep: 7hrs</p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-md shadow-md text-white">
        <h3 className="text-xl font-semibold mb-2">Card 3</h3>
        <p>Calories: 245</p>
        <p>Carbs: 28%</p>
        <p>Fat: 22%</p>
        <p>Protein: 30%</p>
        <p>Other: 20%</p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-md shadow-md text-white">
        <h3 className="text-xl font-semibold mb-2">Card 4</h3>
        <p>Daily Water Consumption</p>
        <p>Completed 62%</p>
        <p>Remaining 38%</p>
        <div className="flex justify-between mt-2">
          <button className="bg-blue-500 text-white p-2 rounded">+</button>
          <button className="bg-red-500 text-white p-2 rounded">-</button>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
