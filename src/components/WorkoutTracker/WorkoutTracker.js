import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WorkoutTrackerTypes from "./WorkoutTrackerTypes";

function WorkoutTracker() {
  const styles = {
    card: {
      width: "1100px",
      height: "640px",
      backgroundColor: "ash",
    },
  };

  return (
    <div>
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
