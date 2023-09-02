import React from "react";
import backgroundImage from "../components/assets/lily-banse--YHSwy6uqvk-unsplash.jpg";

const Diet = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensure the container takes up the full viewport height
  };

  return (
    <div style={containerStyle}>
      <div className="max-w-xl p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Choose Your Diet Plan</p>
          <p className="text-gray-600 mb-6">
            Welcome to our nutrition program. Achieve your health goals with our
            customized diet plans designed to nourish your body and support your
            lifestyle.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="/dietlistveg?isVegan=true"
            className="px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 rounded-lg font-semibold"
          >
            Vegetarian
          </a>
          <a
            href="/dietlistnonveg?isVegan=false"
            className="px-6 py-3 text-white bg-gradient-to-r from-red-400 to-red-600 hover:from-red-300 hover:to-red-500 rounded-lg font-semibold"
          >
            Non-Vegetarian
          </a>
        </div>
      </div>
    </div>
  );
};

export default Diet;
