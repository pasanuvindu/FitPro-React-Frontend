import React, {useState, useEffect} from 'react'
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
import "./MonthlyWorkout.css";
import axios from "axios";

const useStyles = makeStyles({
    avatar:{
        backgroundColor:()=>{
            return blue[500];
        }
    }
})

function MonthlyWorkout() {
  const styles = {
    card: {
      width: "1100px",
      height: "640px",
      backgroundColor: "ash",
    },
    progress:{
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
  
    const apiURL=`http://localhost:5000/api/getTotalMonthlyProgress/${formattedFirstDate}/${formattedLastDate}`;
    axios.get(apiURL).then((response)=>{
          if(response.data){
            console.log(formattedFirstDate);
            console.log(formattedLastDate);
            setRecords(response.data)
          }
    });

  }, [])

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
              Monthly Workout Progress
            </Typography>
          </CardContent>
          <div className="monthly-card-container">
            <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group flex-wrap flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1679679007793-25fa830507c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                className="transition-transform group-hover:scale-110 duration-200"
              ></img>
              <div className="absolute insert-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div className="monthly-progress-container">
            <Card elevation={4} sx={styles.progress}>
         
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {/* {"Project Status :" + record.projectStatus} */}
                  Your Monthly workout is displayed in the below
                </Typography>
                <br/><br/><br/><br/>
                <Typography variant="body1" color="textSecondary">
                   Total Monthly Burned Calories: {records.totalBurnedCalories}
                </Typography>
                {/* <Typography variant="body1" color="textSecondary">
                   Burned Calories: {records.burnedCalories}
                </Typography> */}
                <Typography variant="body1" color="textSecondary">
                   Total Reserved Calories: {records.totalCalories}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Card>
      </Box>
    </div>
  );
}
export default MonthlyWorkout;
