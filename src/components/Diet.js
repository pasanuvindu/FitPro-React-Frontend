import React from "react";

const Diet = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
            href="/dietlist?isVegan=Yes"
            className="px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 rounded-lg font-semibold"
          >
            Vegetarian
          </a>
          <a
            href="/dietlist?isVegan=No"
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
