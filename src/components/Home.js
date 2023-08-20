// src/components/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-6">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-semibold">
            Welcome to Fitness Pro
          </h1>
          <p className="mt-2 text-white">
            Your journey to a healthier lifestyle starts here!
          </p>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Personal Training</h2>
            <p>
              Our experienced trainers are here to guide you through your
              fitness journey with personalized training plans.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Nutrition Plans</h2>
            <p>
              Achieve your fitness goals faster with our expert-designed
              nutrition plans tailored to your needs.
            </p>
          </div>
        </section>
      </main>
      {/* <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 Fitness Pro. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
