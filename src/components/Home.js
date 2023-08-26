import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          ACHIEVE YOUR FITNESS GOALS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          <span className="text-[#FF6B6B]">Elevate Your Health.</span>
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black">
          Tailored workouts and nutrition plans for{" "}
          <Typed
            className="inline-block"
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
        <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FFD56B] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
