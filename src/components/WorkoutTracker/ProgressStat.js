import { Box, Container, Card, CardContent, styled, Typography } from "@mui/material";
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


const styles = {

  background: {
    backgroundImage: `url('https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  card: {
    backgroundColor: "ash",
    backgroundColor: "rgba(211, 211, 211, 0.6)"
  }
};

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

  const [predictionResult, setPredictionResult] = useState(null); // State to hold the prediction result
  const [formData, setFormData] = useState({
    Height: 170,
    Weight: 35,
    Age: 30,
    Sex: "F",
    Activity_Level: "High",
    Maintenance_Calories: 1000,
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

    axios
      .post("http://localhost:8000/tracker/predict/tracker", formData)
      .then((response) => {
        console.log(response.data)
        setPredictionResult(response.data.Predicted_Result); // Assuming the response contains the prediction result

      })
      .catch((error) => {
        console.error("Error fetching prediction:", error);
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
          callback: (value) => value + " Cal",
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

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <div style={styles.background}>
      <Container >
        <br />
        <br />
        <br />
        <br />
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#FF6960", fontSize: "35px", fontWeight: "bold" }}
          >
            Your Workout Stats
          </Typography>
          <Typography sx={{ color: "#FFCD5A", fontSize: "35px", mt: 1, fontWeight: "bold"  }}>
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

        <br />
        <br></br>
        <br></br>
        <React.Fragment>
          <CardContent>

            <Typography variant="h4" component="div">
              You are on the way to.
            </Typography>


            <br></br>
            <Typography variant="h6">
              <pre>{JSON.stringify(predictionResult, null, 2)}</pre>
            </Typography>
          </CardContent>

        </React.Fragment>


      </Container>
    </div>
  );
};

export default ProgressStat;
