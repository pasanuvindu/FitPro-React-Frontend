import { Box, Container, styled, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import axios from "axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProgressStat = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  });

  const theme = useTheme();

  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - currentDay);

    // Calculate the start and end dates of the week
    const startOfWeek = new Date(startDate);
    const endOfWeek = new Date(startDate);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const formattedStartDate = startOfWeek.toISOString().split("T")[0];
    const formattedEndDate = endOfWeek.toISOString().split("T")[0];
    console.log("start", formattedStartDate);
    console.log("end", formattedEndDate);

    axios
      .get(
        `http://localhost:5000/api/getMonthlyProgress/${formattedStartDate}/${formattedEndDate}`
      )
      .then((response) => {
        if (response.data) {
          const dataFromApi =
            response.data["activities-tracker-activityCalories"];

          const labels = dataFromApi.map((item) => item.dateTime);
          const values = dataFromApi.map((item) => parseInt(item.value));
          const updatedChartData = {
            ...chartData,
            labels: labels,
            datasets: [
              {
                ...chartData.datasets[0],
                data: values,
              },
            ],
          };

          setChartData(updatedChartData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const options = {
    plugings: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 15000,
        ticks: {
          stepSize: 1500,
          callback: (value) => value +" Cal",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <PropertiesTextBox>
        <Typography
          sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
        >
          Your Workout Stats
        </Typography>
        <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Stats Related to every workout you been engaed in!
        </Typography>
      </PropertiesTextBox>
      <br></br>
      <br></br>
      <Paper style={{ width: "1100px", height: "500px", marginLeft: "20px" }}>
        <br />
        <br></br>
        <br></br>
        <div
          style={{
            width: "1100px",
            height: "400px",
            marginLeft: "140px",
            marginTop: "-12px",
          }}
        >
          <Line data={chartData} options={options}></Line>
        </div>
        <br />
        <br></br>
        <br></br>
      </Paper>
    </Container>
  );
};

export default ProgressStat;
