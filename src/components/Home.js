import React from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStartedClick = () => {
    // Function to handle button click
    navigate("/bmi"); // Navigate to the "/bmi" route
  };

  return (
    <div
      className="text-white relative"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div
        className="flex flex-col h-full mx-auto text-center justify-start bg-black bg-opacity-60"
        style={{ paddingTop: "5rem" }}
      >
        <p className="text-[#FA2E56] font-bold p-2">
          ACHIEVE YOUR FITNESS GOALS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          <span className="text-[#FF6B6B]">Elevate Your Health.</span>
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black">
          <span className="text-gray-400">
            Tailored workouts and nutrition plans for
          </span>{" "}
          <Typed
            className="inline-block text-white"
            strings={["Strength", "Endurance", "Wellness"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Achieve your fitness goals with personalized plans for strength,
          endurance, and overall wellness.
        </p>
        <button
          className="bg-gradient-to-r from-[#FF6B6B] to-[#FFD56B] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
