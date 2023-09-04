import React, { useState, useEffect } from "react";
import axios from "axios";
// Adjust the path as needed
import { useNavigate } from "react-router-dom";

const DietCard = (props) => {
  const diet = props.diet;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
      <img
        className="w-24 h-24 object-cover"
        //src={diet.image}
        src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        alt={diet.dietType}
      />
      <div className="p-4 flex flex-col">
        {/* <div className="text-xl font-semibold">{diet.dietType}</div> */}
        <div className="text-xl font-semibold">{diet.dayofWeek}</div>
        <div className="flex items-center space-x-2 mt-2 text-gray-600 text-sm">
          {/* <span>{diet.dayofWeek}</span> */}
          <span>{diet.dietType}</span>
        </div>
        <button
          className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
          onClick={() => navigate(`/workoutframe/${diet.dayofWeek}`)}
        >
          VIEW
        </button>

        <div className="mt-4">
          <div className="font-semibold">Breakfast:</div>
          <ul>
            {diet.breakfast.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Lunch:</div>
          <ul>
            {diet.lunch.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Dinner:</div>
          <ul>
            {diet.dinner.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DietListNonVeg = () => {
  const [records, setRecords] = useState([]);
  const [day, setDay] = useState(null);
  useEffect(() => {
    const dietType = "LowCarbs";
    const date = "Monday";
    const isVeg = "No";

    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeekIndex = currentDate.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    setDay(dayOfWeek);
    const apiURL = `http://localhost:5000/api/diets/${dietType}/${isVeg}`;
    axios.get(apiURL).then((response) => {
      if (response.data) {
        console.log("data", response.data);
        setRecords(response.data);
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
        <div className="text-2xl font-bold mb-6">Your Diets</div>
        {records?.map((diet, index) => (
          <DietCard key={index} diet={diet} />
        ))}
      </div>
    </div>
  );
};

export default DietListNonVeg;
