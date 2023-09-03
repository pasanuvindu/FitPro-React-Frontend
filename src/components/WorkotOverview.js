import React, { useState, useEffect } from "react";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Button from "@mui/material/Button";
import axios from "axios";

function WorkoutOverview() {
  const [waistToHipRatio, setWaistToHipRatio] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [bodyMeasurementImage, setBodyMeasurementImage] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Simulate fetching dynamic data from an API or source
    // Replace this with your actual data fetching logic
    const imgsrc = "dasun.jpg";

    const fetchData = async () => {
      try {
        // Fetch waist to hip ratio and risk level
        const response = await fetch(
          `http://localhost:5000/api/getDimensions/${imgsrc}`
        );
        const data = await response.json();

        // Update state with fetched data
        setWaistToHipRatio(data.hipWasiRatio);
        setRiskLevel(data.riskLevel);

        // Fetch body measurement image
        const imageResponse = await fetch("image_api_endpoint_here");
        const imageBlob = await imageResponse.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        setBodyMeasurementImage(imageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const apiURL = `http://localhost:5000/api/getDimensions/${imgsrc}`;
    axios
      .get(apiURL)
      .then((response) => {
        if (response.data) {
          console.log("data", response.data);
          setRecords(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <br />
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            <ViewQuiltIcon fontSize="large" style={{ color: "orange" }} />{" "}
            Health Overview
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-md shadow-md p-4">
              <p className="text-xl font-semibold mb-4">Waist to Hip Ratio:</p>
              <span className="text-2xl">{waistToHipRatio}</span>
            </div>
            <div className="bg-white rounded-md shadow-md p-4">
              <p className="text-xl font-semibold mb-4">Risk Level:</p>
              <span className="text-2xl">{riskLevel}</span>
            </div>
          </div>
          <div className="mt-8 space-y-4 md:space-y-0 md:flex md:justify-between">
            <Button
              variant="contained"
              href="/workout"
              className="px-6 py-3 text-white bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-500 hover:to-pink-300 rounded-lg font-semibold"
            >
              Workout Plan
            </Button>
            <Button
              variant="contained"
              href="/diet"
              className="px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 rounded-lg font-semibold"
            >
              Diet Plan
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Body Measurements
          </h1>
          <div className="mt-8">
            <img
              src={bodyMeasurementImage}
              alt="Body Measurements"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutOverview;
