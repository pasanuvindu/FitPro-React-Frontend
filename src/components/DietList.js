import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../actions/diet"; // Assuming you have a similar diet action to fetch data
import { useNavigate } from "react-router-dom";

const DietCard = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
      <img
        className="w-24 h-24 object-cover"
        src={meal.image}
        alt={meal.mealName}
      />
      <div className="p-4 flex flex-col">
        <div className="text-xl font-semibold">{meal.mealName}</div>
        <div className="mt-2 text-gray-600 text-sm">{meal.description}</div>
        <div className="mt-4">
          {meal.foods.map((food, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{food.foodName}</span>
              <span>{`${food.quantity} | ${food.calories} calories`}</span>
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
          onClick={() => navigate(`/dietframe/${meal.mealName}`)}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

const DietList = () => {
  const dispatch = useDispatch();
  const dietData = useSelector((state) => state.diets); // Assuming you have a diet reducer

  useEffect(() => {
    dispatch(getDiets()); // Dispatch the action to fetch diets when the component mounts
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
        <div className="text-2xl font-bold mb-6">Your Diet Plans</div>
        {dietData?.map((diet, index) => (
          <DietCard key={index} meal={diet} />
        ))}
      </div>
    </div>
  );
};

export default DietList;
