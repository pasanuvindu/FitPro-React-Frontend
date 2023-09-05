import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DietFrame = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const diet = location.state?.diet;

  return (
    <div className="container mx-auto p-4">
      <br /> <br /> <br />
      {diet && (
        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">
            {diet.dietType} - {diet.dayofWeek}
          </h2>

          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Breakfast:</h3>
                <ul>
                  {diet.breakfast.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Lunch:</h3>
                <ul>
                  {diet.lunch.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Dinner:</h3>
                <ul>
                  {diet.dinner.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietFrame;
