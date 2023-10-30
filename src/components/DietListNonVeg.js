import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DietCard = (props) => {
  const diet = props.diet;
  const navigate = useNavigate();

  return (
    <div className="my-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
        <img
          className="w-24 h-24 object-cover"
    
          src={diet.image}
          alt={diet.dietType}
        />
        <div className="p-4 flex flex-col">
          <div
            className="text-xl font-semibold"
            style={{ marginLeft: "-132px" }}
          >
            {diet.dayofWeek}
          </div>
          <div className="flex items-center space-x-2 mt-2 ml-14 text-gray-600 text-sm">
            <span>{diet.dietType}</span>
          </div>
          <button
            className="mt-4 px-4 py-2 w-32 ml-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
            onClick={() =>
              navigate(`/dietframe/${diet.dayofWeek}`, { state: { diet } })
            }
          >
            VIEW
          </button>
        </div>
      </div>
    </div>
  );
};


const styles = {

  background: {
    backgroundImage: `url('https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    backgroundColor: "ash",
    backgroundColor: "rgba(211, 211, 211, 0.6)"
  },
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

    const gender = savedGender === "Male" ? "M" : "F";


    console.log("gender", gender);
    console.log("age", age);

    const Data = {
      Age: 20,
      Gender: gender,
      Activity: "Low",
      CaloriesIntake: 1500
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={styles.background}>
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl" style={styles.card}>
        <div className="text-2xl font-bold mb-6">Your Diets</div>
        {records?.map((diet, index) => (
          <DietCard key={index} diet={diet} />
        ))}
      </div>
    </div>
  );
};

export default DietListVeg;
