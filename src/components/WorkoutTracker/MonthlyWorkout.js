import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/More";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import "./MonthlyWorkout.css";
import axios from "axios";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: () => {
      return blue[500];
    }
  }
});

function MonthlyWorkout() {
  const styles = {
    card: {
      width: "1100px",
      height: "640px",
      backgroundColor: "ash",
      backgroundColor: "rgba(211, 211, 211, 0.4)"
    },
    progress: {
      width: "591px",
      height: "340px",
    },
    background: {
      backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };
  const classes = useStyles();
  const [records, setRecords] = useState({});
  useEffect(() => {
    const currentDate = new Date();
    const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const formattedFirstDate = firstDate.toISOString().split("T")[0];
    const formattedLastDate = lastDate.toISOString().split("T")[0];

    console.log(formattedFirstDate);
    console.log(formattedLastDate);

    const apiURL = `http://localhost:5000/api/getTotalMonthlyProgress/${formattedFirstDate}/${formattedLastDate}`;
    axios.get(apiURL).then((response) => {
      if (response.data) {
        console.log(formattedFirstDate);
        console.log(formattedLastDate);
        setRecords(response.data);
      }
    });

  }, []);

  return (
    <div style={styles.background}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={styles.card}>
          <CardContent>
            <Typography variant="h3" component="div">
              Monthly Workout Progress
            </Typography>
            <br /><br />
            <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Your Monthly workout is displayed in the below
            </Typography>
            <br /><br />
            <CircularProgressWithLabel
              //value={(records.totalBurnedCalories / records.totalCalories) * 100}
              value={(records.totalBurnedCalories / records.totalCalories) * 100}
              size={250} // Adjust the size as needed
              color={'error'}
            />
            <br /><br /><br /><br />
            <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Currently Burned Calories of the month: {records.totalBurnedCalories}
            </Typography>

            <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Total Calorie Goal Of the Month: {records.totalCalories}
            </Typography>
            <br /><br />

          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

const CircularProgressWithLabel = ({ value, size, color }) => {

  const customColors = {
    "custom-gradient": "linear-gradient(45deg, #FF1493, #FFA500)",
  };
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={size} color={color} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
      >
        <Typography variant="h3" component="div" color="textSecondary">
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default MonthlyWorkout;
