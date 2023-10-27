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
        src={diet.image}
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
          onClick={() =>
            navigate(`/dietframe/${diet.dayofWeek}`, { state: { diet } })
          }
        >
          VIEW
        </button>

        {/* <div className="mt-4">
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
        </div> */}
      </div>
    </div>
  );
};

const DietListVeg = () => {
  const [records, setRecords] = useState([]);
  const [day, setDay] = useState(null);
  const [dietType, setDietType] = useState();
  useEffect(() => {
    const isVeg = "No";

    const BaseURL = `http://localhost:8000/meal/predict/meal`;

    const savedAge = localStorage.getItem("age");
    const savedGender = localStorage.getItem("gender");

    const age = savedAge ? parseInt(savedAge) : 30;

    const gender = savedGender
      ? savedGender.charAt(0).toUpperCase().toString()
      : "M";

    console.log("gender", gender);
    console.log("age", age);

    const Data = {
      Age: age,
      Gender: gender,
      Activity: "Low",
      CaloriesIntake: 1500,
    };

    axios.post(BaseURL, Data).then((secondResponse) => {
      if (secondResponse.data) {
        setDietType(secondResponse.data.Predicted_Meal_Type);
        console.log("secondResponse.data", secondResponse.data);
      }
    });

    if (dietType === "Low Carb") {
      console.log("ddd", dietType);
      const diet = "LowCarbs";
      setDietType(diet);
      console.log("ddd", dietType);
    }
  }, []);

  useEffect(() => {
    const dietType = "LowCarbs";
    const date = "Monday";
    const isVeg = "Yes";

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

export default DietListVeg;
