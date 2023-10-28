import React from "react";

function DietPlan() {
  // Sample meal plan data
  const sampleMealPlan = [
    {
      meal: "Breakfast",
      description: "Scrambled eggs, whole wheat toast, and a fruit smoothie.",
    },
    {
      meal: "Lunch",
      description: "Grilled chicken salad with mixed greens and vinaigrette.",
    },
    {
      meal: "Dinner",
      description: "Salmon with quinoa and steamed vegetables.",
    },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Diet Plan</h2>

      <div className="mb-4">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Diet Image"
          className="max-w-full h-auto rounded"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">Sample Meal Plan</h3>
      <ul className="list-disc pl-6">
        {sampleMealPlan.map((meal, index) => (
          <li key={index} className="text-lg">
            <strong>{meal.meal}:</strong> {meal.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DietPlan;
