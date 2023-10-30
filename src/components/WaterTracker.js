import { Box, Container, styled, Typography, makeStyles } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Water from "./assets/water.jpg";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

const WaterTracker = () => {
  const theme = useTheme();

  const [count, setCount] = useState(0);
  const [countML, setCountML] = useState(250);

  
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "consumption",
        data: [1, 2, 3, count, 0, 0,0 ],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

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
        max: 10,
        ticks: {
          stepSize: 1,
          callback: (value) => value + "gls",
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
    marginTop: theme.spacing(5),
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

 


  const incrementCount = () => {
    setCount(count + 1);
    setCountML(countML+250);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setCountML(countML-250);
    }
  };

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Your Water Consumption tracker
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Stats Related to your water consumtion would be available here!
          </Typography>
        </PropertiesTextBox>
        <br></br>
        <br></br>
        <Paper>
          <br />
          <br />
          <br />
          <div style={{ width: "1100px", height: "500px", marginLeft: "20px" }}>
            <Bar data={data} options={options}></Bar>
          </div>
          <br />
          <br />
          <br />
        </Paper>
        <br />
        <br />
        <Paper>
          <div className="img">
            <img
              src={Water}
              alt="heroImg"
              style={{
                width: "323px",
                marginBottom: "2rem",
                marginTop: "2rem",
                marginLeft: "354px",
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <AddCircleIcon
              sx={{
                fontSize: "90px",
                color: "#000339",
                marginLeft: "333px",
              }}
              onClick={incrementCount}
            />
            <RemoveCircleIcon
              sx={{
                fontSize: "90px",
                color: "#000339",
                marginLeft: "233px",
              }}
              onClick={decrementCount}
            ></RemoveCircleIcon>

            <Typography
              sx={{
                color: "#5A6473",
                fontSize: "46px",
                fontWeight: "7",
                mt: 1,
                marginLeft: "523px",
              }}
              
            >
              {count}
            </Typography>

            <Typography
              sx={{
                color: "#5A6473",
                fontSize: "23px",
                fontWeight: "1",
                marginLeft: "499px",
              }}
              
            >
              glasses
            </Typography>
            <Typography
              sx={{
                color: "#5A6473",
                fontSize: "23px",
                fontWeight: "1",
                marginLeft: "500px",
              }}
              
            >
                ({countML})ml
            </Typography>
            <br></br>  <br></br>   <br></br>
          </div>
        </Paper>
      </Container>
    </Box>
  );
};

export default WaterTracker;
