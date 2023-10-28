import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WorkoutTrackerTypes from "./WorkoutTrackerTypes";

function WorkoutTracker() {
  const styles = {
    card: {
      width: "1100px",
      height: "640px",
      backgroundColor: "ash",
    },
    background: {
      backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

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
            <Typography variant="h5" component="div">
              Workout Tracker Types
            </Typography>
          </CardContent>
          <WorkoutTrackerTypes />
        </Card>
      </Box>
    </div>
  );
}

export default WorkoutTracker;
