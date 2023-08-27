import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateBMI } from "../actions/bmi"; // Replace with your actual Redux action
// import { showMessage } from "../actions/message";

const BmiCal = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMIRange = (calculatedBMI) => {
    if (calculatedBMI < 16) {
      return "Severe Thinness";
    } else if (calculatedBMI >= 16 && calculatedBMI < 17) {
      return "Moderate Thinness";
    } else if (calculatedBMI >= 17 && calculatedBMI < 18.5) {
      return "Mild Thinness";
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      return "Normal";
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      return "Overweight";
    } else if (calculatedBMI >= 30 && calculatedBMI < 35) {
      return "Obese Class I";
    } else if (calculatedBMI >= 35 && calculatedBMI < 40) {
      return "Obese Class II";
    } else {
      return "Obese Class III";
    }
  };

  const handleCalculate = () => {
    if (height && weight) {
      const heightInM = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBMI = weightInKg / (heightInM * heightInM);
      setBMI(calculatedBMI.toFixed(2));
      setCategory(calculateBMIRange(calculatedBMI));
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

    // Show success message
    dispatch();
    // showMessage({
    //   message: "BMI data saved successfully",
    //   messageType: "SUCCESS",
    // })

    // Clear form
    setGender("");
    setDOB("");
    setHeight("");
    setWeight("");
    setBMI(null);
    setCategory("");
  };

  return (
    <div className="container mt-10 mb-10 p-4 lg:w-1/2 lg:border">
      <h1 className="text-black text-2xl font-bold p-2">BMI Calculator</h1>
      <div className="flex flex-col lg:flex-row mb-4">
        <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
          Gender
        </label>
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded-none"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row mb-4">
        <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded-none"
        />
      </div>
      <div className="flex flex-col lg:flex-row mb-4">
        <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
          Height (cm)
        </label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded-none"
        />
      </div>
      <div className="flex flex-col lg:flex-row mb-4">
        <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
          Weight (kg)
        </label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded-none"
        />
      </div>
      <div className="flex flex-col lg:flex-row mb-4 justify-center">
        <button
          onClick={handleCalculate}
          className="w-full lg:w-1/4 bg-blue-500 text-white py-2 px-4 rounded-none"
        >
          Calculate BMI
        </button>
      </div>
      {bmi !== null && (
        <div className="flex flex-col lg:flex-row mb-4">
          <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
            BMI
          </label>
          <span className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 rounded-none">
            {bmi}
          </span>
        </div>
      )}
      {category !== "" && (
        <div className="flex flex-col lg:flex-row mb-4">
          <label className="text-gray-700 text-sm font-medium lg:w-1/4 lg:mr-4 mb-1 whitespace-nowrap">
            Category
          </label>
          <span className="w-full lg:w-3/4 px-3 py-2 border border-gray-300 rounded-none">
            {category}
          </span>
        </div>
      )}
      <div className="flex flex-col lg:flex-row mb-4 justify-center">
        <button
          onClick={handleSubmit}
          className="w-full lg:w-1/4 bg-green-500 text-white py-2 px-4 rounded-none"
        >
          Save Data
        </button>
      </div>
    </div>
  );
};

export default BmiCal;
