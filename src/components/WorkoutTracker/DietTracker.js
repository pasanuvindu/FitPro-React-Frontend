import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { blue} from "@material-ui/core/colors";
import DietImg from "../assets/diet.png";
import axios from "axios";
import LunchImg from "../assets/dish.png";
import DinnerImg from "../assets/foodImg.png";
import "./DietTracker.css";
import { format } from "date-fns";

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
    Breakfast: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      padding: "20px",
      marginLeft: "50px",
      marginTop: "-255px",
      cursor: "pointer",
      paddingLeft: "12px",
    },
    Lunch: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      padding: "20px",
      marginTop: "25px",
      marginLeft: "-352px",
      cursor: "pointer",
      paddingLeft: "12px",
    },
    Dinner: {
      width: "351px",
      height: "154px",
      borderRadius: "5px",
      padding: "20px",
      marginTop: "425px",
      cursor: "pointer",
      marginLeft: "-352px",
      marginRight: "191px",
      paddingLeft: "12px",
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

  const [records, setRecords] = useState({});
  const [status, setStatus] = useState({});
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd");

  useEffect(() => {
    const apiURL = `http://localhost:5000/api/getMealProgress/${formattedDate}`;
    axios.get(apiURL).then((response) => {
      if (response.data) {
        setRecords(response.data);
        console.log(response.data);
      }
    });
  }, []);

  function handleMealClick(mealType) {
    if (Object.keys(records).length === 0) {
      setStatus({
        Calories: 0,
        Carbs: 0,
        Protein: 0,
        Fats: 0,
      });
    } else {
      setStatus({
        Calories:
          records[0][`${mealType.toLowerCase()}Calories`] !== null
            ? records[0][`${mealType.toLowerCase()}Calories`]
            : 0,
        Carbs:
          records[0][`${mealType.toLowerCase()}Carbs`] !== null
            ? records[0][`${mealType.toLowerCase()}Carbs`]
            : 0,
        Protein:
          records[0][`${mealType.toLowerCase()}Protein`] !== null
            ? records[0][`${mealType.toLowerCase()}Protein`]
            : 0,
        Fats:
          records[0][`${mealType.toLowerCase()}Fat`] !== null
            ? records[0][`${mealType.toLowerCase()}Fat`]
            : 0,
      });
    }
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {/* <CardContent>
          <Typography variant="h5" component="div">
            Meal Types
          </Typography>
        </CardContent> */}

        <div className="diet-container">
          <Card
            sx={styles.Breakfast}
            onClick={() => handleMealClick("Breakfast")}
          >
            <CardContent>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "37px",
                }}
              >
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
          <Card sx={styles.Lunch} onClick={() => handleMealClick("Lunch")}>
            <CardContent>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "37px",
                }}
              >
                Lunch
              </Typography>
              <div>
                <img
                  src={LunchImg} // Replace with the actual image URL
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
          <Card sx={styles.Dinner} onClick={() => handleMealClick("Dinner")}>
            <CardContent>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "37px",
                }}
              >
                Dinner
              </Typography>
              <div>
                <img
                  src={DinnerImg} // Replace with the actual image URL
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
              <Typography variant="body1" color="textSecondary"></Typography>
              <Typography variant="body1" color="textSecondary"></Typography>
            </CardContent>
          </Card>
        </div>

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
                    Calories Count (g): {status.Calories}
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
                    Carbs Status
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
                    Carbs Count (g): {status.Calories}
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
                    Protein Status
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
                    Protein Count (g): {status.Protein}
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
                    Fats Status
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
                    Fats Count (g): {status.Fats}
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
