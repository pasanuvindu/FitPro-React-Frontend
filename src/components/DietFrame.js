import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; 

const DietFrame = () => {
  const location = useLocation();
  const diet = location.state?.diet;

  return (
    <div>
      {diet && (
        <div>
          <h2>
            {diet.dietType} - {diet.dayofWeek}
          </h2>
          <div>
            <h3>Breakfast:</h3>
            <ul>
              {diet.breakfast.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Lunch:</h3>
            <ul>
              {diet.lunch.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Dinner:</h3>
            <ul>
              {diet.dinner.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietFrame;
