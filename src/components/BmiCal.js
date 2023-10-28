import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateBMI } from "../actions/bmi";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../components/assets/anastase-maragos-FP7cfYPPUKM-unsplash.jpg";

const BmiCal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMIRange = (calculatedBMI) => {
    if (calculatedBMI < 18.5) {
      return "Underweight";
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      return "Normal Weight";
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      return "Overweight";
    } else if (calculatedBMI >= 30) {
      return "Obese";
    } else {
      return "Unknown";
    }
  };

  const handleCalculate = () => {
    if (height && weight) {
      const heightInM = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBMI = weightInKg / (heightInM * heightInM);
      setBMI(calculatedBMI.toFixed(2));
      setCategory(calculateBMIRange(calculatedBMI));
      localStorage.setItem("height", height);
      localStorage.setItem("weight", weight);

      if (dob && gender) {
        const birthDate = new Date(dob);
        const currentDate = new Date();

        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (
          currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
        ) {
          age--; // Subtract 1 year if the birthday hasn't occurred yet
        }
        localStorage.setItem("age", age);
        localStorage.setItem("gender", gender);
      }
    } else {
      setBMI(null);
      setCategory("");
    }
  };

  const handleSubmit = () => {
    // Dispatch Redux action to save data to backend
    dispatch(
      calculateBMI({
        gender,
        dob,
        height,
        weight,
        bmi,
        category,
      })
    );

    // Clear form
    setGender("");
    setDOB("");
    setHeight("");
    setWeight("");
    setBMI(null);
    setCategory("");

    navigate("/uploadImg");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-transparent flex flex-row justify-center w-full">
        <div
          className="bg-cover"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Set the background image here
            width: "100%",
            height: "414px",
          }}
        />
      </div>
      <br />
      <h1 className="text-3xl font-semibold text-center mb-4">
        BMI Calculator
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Gender
          </label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleCalculate}
          className="px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 rounded-lg font-semibold"
        >
          Calculate BMI
        </button>
      </div>
      {bmi !== null && (
        <div className="mt-6">
          <div className="text-center">
            <label className="text-gray-700 text-sm font-medium block mb-2">
              BMI
            </label>
            <span className="p-2 bg-gray-200 rounded">{bmi}</span>
          </div>
          <div className="text-center mt-2">
            <label className="text-gray-700 text-sm font-medium block mb-2">
              Category
            </label>
            <span className="p-2 bg-gray-200 rounded">{category}</span>
          </div>
        </div>
      )}
      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-pink-300 hover:from-pink-600 hover:to-pink-400 rounded-lg font-semibold"
        >
          Save Data
        </button>
      </div>
    </div>
  );
};

export default BmiCal;
