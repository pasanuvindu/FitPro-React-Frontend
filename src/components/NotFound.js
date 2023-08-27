import React from "react";
import svg from "./assets/404.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={svg} alt="svg" className="w-64 h-64 mb-4" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
