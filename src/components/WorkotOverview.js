import "./WorkoutOverview.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import axios from "axios";
import "../components/WorkoutTracker/DietTracker.css";
import { format } from "date-fns";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import Button from "@mui/material/Button";

function WorkotOverview() {
  const styles = {
    records: {
      width: "500px",
      height: "640px",
      borderRadius: "20px",
      backgroundColor: "#e0e0e0", // Ash color
    },
    main: {
      width: "800px",
      height: "640px",
      borderRadius: "20px",
    },
    topic: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "black",
      fontFamily: '"Segoe UI"',
      marginBottom: "12px",
      marginTop: "12px",
    },
    pageIcon: {
      padding: 2,
      color: "red",
    },
    box: {
      width: "300px",
      height: "180px",
      borderRadius: "10px",
      marginRight: "12px", // Add margin to separate the boxes
      boxShadow: "0 4px 6px rgba(1, 1, 1, 0.4)",
      marginLeft: "51px",
      marginTop: "15px",
    },
    boxContainer: {
      display: "flex",
      gap: "12px",
      marginTop: "24px", // Add some margin to separate the boxes from the topic
    },
    buttonContainer: {
      display: "flex",
      gap: "12px", // Add gap between buttons
      marginTop: "232px", // Move the buttons down
      marginLeft: "53px",
    },
    ashButton: {
      backgroundColor: "#ff8a65", // Ash color
      width: "192px",
      height: "42px",
    },
    lightGreenButton: {
      backgroundColor: "#fb8c00", // Light green color
      width: "282px",
      height: "42px",
    },
  };

  return (
    <div>
      <br /> <br /> <br /> <br />
      <div style={{ display: "flex", marginLeft: "142px", gap: "12px" }}>
        <Card sx={styles.main}>
          <Typography sx={styles.topic}>
            {" "}
            <ViewQuiltIcon fontSize="large" style={{ color: "orange" }} />{" "}
            Health Overview
          </Typography>
          <div style={styles.boxContainer}>
            <Box sx={styles.box}>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ fontWeight: "bold", marginTop: "12px" }}
              >
                Waist to Hip Ratio
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ fontWeight: "bold", marginTop: "12px" }}
              >
                Risk Level
              </Typography>
            </Box>
          </div>
          <div style={styles.buttonContainer}>
            <Button variant="contained" style={styles.ashButton}>
              Workout Plan
            </Button>
            <Button variant="contained" style={styles.ashButton}>
              Diet Plan
            </Button>
            <Button variant="contained" style={styles.lightGreenButton}>
              Workout Plan + Diet Plan
            </Button>
          </div>
        </Card>
        <Card sx={styles.records}>
          <Typography sx={styles.topic}>Body Measurements</Typography>
        </Card>
      </div>
    </div>
  );
}

export default WorkotOverview;
