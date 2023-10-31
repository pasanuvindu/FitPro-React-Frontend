import React, { useState, useEffect } from "react";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"; // Import CardMedia
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import fitImg from "./assets/standingModel.jpg";



function WorkoutOverview() {
  const [waistToHipRatio, setWaistToHipRatio] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [bodyMeasurementImage, setBodyMeasurementImage] = useState("");
  const [records, setRecords] = useState([]);

  const navigate = useNavigate(); // Create a history object for navigation



  const location = useLocation();
  //const fileName = new URLSearchParams(location.search).get('fileName')

  const uploadedImage = location.state?.image; // Access the uploaded image from location state
  const fileName = location.state?.fileName; // Access the fileName from location state


  const styles = {

    background: {
      backgroundImage: `url('https://images.unsplash.com/photo-1557330359-ffb0deed6163?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  useEffect(() => {
    // Simulate fetching dynamic data from an API or source
    // Replace this with your actual data fetching logic
    const imgsrc = fileName;

    const fetchData = async () => {
      try {
        // Fetch waist to hip ratio and risk level
        const response = await fetch(
          `http://localhost:5000/api/getDimensions/${imgsrc}`
        );
        const data = await response.json();

        // Update state with fetched data
        setWaistToHipRatio(data.hipWasiRatio);
        console.log(data.hipWasiRatio)
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
    <div className="bg-gray-100 py-16 px-4" style={styles.background}>
      <div className="max-w-6xl mx-auto">
        <br />
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Health Overview
        </h1>
        <br></br><br></br>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-md shadow-md p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
            <p className="text-xl font-semibold mb-4">Waist to Hip Ratio:</p>
            <span className="text-2xl">{waistToHipRatio}</span>
          </div>
          <div className="bg-white rounded-md shadow-md p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
            <p className="text-xl font-semibold mb-4">Risk Level:</p>
            <span className="text-2xl">{riskLevel}</span>
          </div>
        </div>
        <br></br><br></br>
        <Card title="Image" sx={{ width: 360, height: 470, marginLeft: 50 }}>
          {console.log(uploadedImage)}
          {uploadedImage ? (
            <CardMedia
              component="img"
              height="auto"
              image={uploadedImage}
              alt="Background"
            />
          ) : (
            <CardMedia
              component="img"
              height="auto"
              image={fitImg}
              alt="Background"
            />
          )}
        </Card>
        <br></br><br></br>
        <button
          variant="contained"
          onClick={() => navigate('/workout')}
          className="mt-4 mr-36 px-4 py-2 h-16 w-60 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md complete-button"
        >
          Workout Plan
        </button>
        <button
          variant="contained"
          onClick={() => navigate('/diet')}
          className="mt-4 ml-36 px-4 py-2 h-16 w-60 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md complete-button"
        >
          Diet Plan
        </button>
      </div>
    </div>
  );
}

export default WorkoutOverview;
