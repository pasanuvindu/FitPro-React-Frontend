import React from 'react';
import './DietFrame.css';
import { useLocation, useNavigate } from "react-router-dom";

const DietFrame = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const diet = location.state?.diet;

  const backgroundStyle = {
    backgroundImage: `url(${diet.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };


  const Card = ({ title, items }) => (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        <ul className="scrollable-list">
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="Frame" style={backgroundStyle} >
      <header className="header">
        <h1>{diet.dietType} - {diet.dayofWeek}</h1>
      </header>
      <br></br>
      <div className="card-container">
        <Card title="Breakfast" items={diet.breakfast} />
        <Card title="Lunch" items={diet.lunch} />
        <Card title="Dinner" items={diet.dinner} />
      </div>
    </div>
  );
}

export default DietFrame;
