import React from "react";
import ProgressCard from "./ProgressCard";
import ActiveWorkouts from "./ActiveWorkouts";
import DietPlan from "./DietPlan";

function HealthDashboard() {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-3xl font-semibold mb-4">Health Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProgressCard />
        <ActiveWorkouts />
        {/* <ActiveWorkouts /> */}
        <DietPlan />
      </div>
    </div>
  );
}

export default HealthDashboard;
