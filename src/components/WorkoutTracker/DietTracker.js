import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/More";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import DietImg from "../assets/diet.png";
import axios from "axios";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: () => {
      return blue[500];
    },
  },
});

function DietTracker() {
  const styles = {
    card: {
      width: "500px",
      height: "640px",
      backgroundColor: "ash",
      marginLeft: "10px",
      marginRight: "191px",
    },
    lunchTypes: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      padding: "20px",
      marginLeft: "60px",
      marginTop: "25px",
      cursor: "pointer",
    },
    records: {
      marginRight: "35px",
      width: "900px",
      height: "640px",
    },
    progress: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      padding: "20px",
      marginLeft: "290px",
      marginTop: "25px",
    },
    fats: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      marginLeft: "45px",
      marginTop: "25px",
    },
    carbs: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      marginLeft: "500px",
      marginTop: "-153px",
    },
    protein: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      marginTop: "42px",
      marginLeft: "45px",
    },
    calories: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      marginLeft: "500px",
      marginTop: "-153px",
    },
  };

  const classes = useStyles();
  const [records, setRecords] = useState({});
  const [breakfastStatus, setBreakfastStatus] = useState(false);
  const [status, setStatus] = useState({});
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const apiURL = `http://localhost:5000/api/getMealProgress/2023-08-26`;
    axios.get(apiURL).then((response) => {
      if (response.data) {
        setRecords(response.data);
        console.log(response.data);
      }
    });
  }, []);

  function handleMealClick(mealType) {
    setStatus({
      Calories: records[0][`${mealType.toLowerCase()}Calories`],
      Carbs: records[0][`${mealType.toLowerCase()}Carbs`],
      Protein: records[0][`${mealType.toLowerCase()}Protein`],
      Fats: records[0][`${mealType.toLowerCase()}Fat`],
    });
  }

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
              Meal Types
            </Typography>
          </CardContent>

          <div className="diet-container">
            <Card
              elevation={4}
              sx={styles.lunchTypes}
              onClick={() => handleMealClick("Breakfast")}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {/* {"Project Status :" + record.projectStatus} */}
                  Breakfast
                </Typography>

                <div>
                  <img
                    src={DietImg} // Replace with the actual image URL
                    alt="Diet Tracker"
                    className="image-container"
                    style={{
                      width: "80px",
                      height: "90px",
                      marginTop: "-22px",
                    }}
                  />
                </div>
                <Typography variant="body1" color="textSecondary"></Typography>
                <Typography variant="body1" color="textSecondary">
                  {/* Burned Calories: {records.burnedCalories} */}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {/* Total Reserved Calories: {records.totalReservedCalories} */}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="diet-container">
            <Card
              elevation={4}
              sx={styles.lunchTypes}
              onClick={() => handleMealClick("Lunch")}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {/* {"Project Status :" + record.projectStatus} */}
                  Lunch
                </Typography>
                <div>
                  <img
                    src={DietImg} // Replace with the actual image URL
                    alt="Diet Tracker"
                    className="image-container"
                    style={{
                      width: "80px",
                      height: "90px",
                      marginTop: "-22px",
                    }}
                  />
                </div>
                <Typography variant="body1" color="textSecondary">
                  {/* Progress: {records.progress}% */}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {/* Burned Calories: {records.burnedCalories} */}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {/* Total Reserved Calories: {records.totalReservedCalories} */}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="diet-container">
            <Card
              elevation={4}
              sx={styles.lunchTypes}
              onClick={() => handleMealClick("Dinner")}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {/* {"Project Status :" + record.projectStatus} */}
                  Dinner
                </Typography>
                <div>
                  <img
                    src={DietImg} // Replace with the actual image URL
                    alt="Diet Tracker"
                    className="image-container"
                    style={{
                      width: "80px",
                      height: "90px",
                      marginTop: "-22px",
                    }}
                  />
                </div>
                <Typography variant="body1" color="textSecondary">
                </Typography>
                <Typography variant="body1" color="textSecondary">
                </Typography>
                <Typography variant="body1" color="textSecondary">
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Card>

        <div>
          <Card sx={styles.records}>
            <CardContent>
              <Typography variant="h5" component="div">
                Diet Progress
              </Typography>
            </CardContent>

            <div className="diet-container">
              <Card elevation={4} sx={styles.fats}>
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {/* {"Project Status :" + record.projectStatus} */}
                    Calories Status
                  </Typography>
                  <div>
                    <img
                      src={DietImg} // Replace with the actual image URL
                      alt="Diet Tracker"
                      className="image-container"
                      style={{
                        width: "80px",
                        height: "90px",
                        marginTop: "-22px",
                      }}
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="your-image-url.jpg" // Replace with the actual image URL
                      alt=""
                      className="side-image"
                    />
                  </div>
                  <Typography variant="body1" color="textSecondary">
                    Calories: {status.Calories}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Burned Calories: {records.burnedCalories} */}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Total Reserved Calories: {records.totalReservedCalories} */}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="diet-container">
              <Card elevation={4} sx={styles.carbs}>
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {/* {"Project Status :" + record.projectStatus} */}
                    Carbs  Status
                  </Typography>
                  <div>
                    <img
                      src={DietImg} // Replace with the actual image URL
                      alt="Diet Tracker"
                      className="image-container"
                      style={{
                        width: "80px",
                        height: "90px",
                        marginTop: "-22px",
                      }}
                    />
                  </div>
                  <Typography variant="body1" color="textSecondary">
                    Calories: {status.Calories}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Burned Calories: {records.burnedCalories} */}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Total Reserved Calories: {records.totalReservedCalories} */}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="diet-container">
              <Card elevation={4} sx={styles.protein}>
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {/* {"Project Status :" + record.projectStatus} */}
                    Protein  Status
                  </Typography>
                  <div>
                    <img
                      src={DietImg} // Replace with the actual image URL
                      alt="Diet Tracker"
                      className="image-container"
                      style={{
                        width: "80px",
                        height: "90px",
                        marginTop: "-22px",
                      }}
                    />
                  </div>
                  <Typography variant="body1" color="textSecondary">
                    Protein: {status.Protein}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Burned Calories: {records.burnedCalories} */}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Total Reserved Calories: {records.totalReservedCalories} */}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="diet-container">
              <Card elevation={4} sx={styles.calories}>
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {/* {"Project Status :" + record.projectStatus} */}
                    Fats  Status
                  </Typography>
                  <div>
                    <img
                      src={DietImg} // Replace with the actual image URL
                      alt="Diet Tracker"
                      className="image-container"
                      style={{
                        width: "80px",
                        height: "90px",
                        marginTop: "-22px",
                      }}
                    />
                  </div>
                  <Typography variant="body1" color="textSecondary">
                    Fats: {status.Fats}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Burned Calories: {records.burnedCalories} */}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {/* Total Reserved Calories: {records.totalReservedCalories} */}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
      </Box>
    </div>
  );
}
export default DietTracker;
