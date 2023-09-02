import React, { useState , useEffect  } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WorkoutFrame = () => {
  const { workoutId } = useParams();
  const workoutData = useSelector((state) => state.workouts);
  const selectedWorkout = workoutData.find((workout) => workout._id === workoutId);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openRecommend, setOpenRecommend] = React.useState(false);
  const [randomData, setRandomData] = useState([]);
  const [selectedRandomItem, setSelectedRandomItem] = useState(null);

  useEffect(() => {
    const generateRandomData = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const newData = [];

      // Generate random data for each day of the week
      for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        const randomValue = Math.random();
        newData.push({ day, value: randomValue });
      }

      return newData;
    };

    const randomDataArray = generateRandomData();
    setRandomData(randomDataArray);

    // Select a single random item from the generated data
    const randomIndex = Math.floor(Math.random() * randomDataArray.length);
    setSelectedRandomItem(randomDataArray[randomIndex]);
  }, []);



  const handleClickOpen = () => {
    setOpen(true);
    setOpenRecommend(false);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenRecommend(false);
  };

  const handleOpening = () => {
    setOpen(false);
    setOpenRecommend(true);
  };

  const handleRecommendClose = () => {
    setOpenRecommend(false);
  };

  if (!selectedWorkout) {
    return <div>Workout not found.</div>;
  }

  const handleSkipClick = () => {
    console.log(isPopupVisible);
    setPopupVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the submit action here, e.g., close the popup and perform an action with inputValue
    setPopupVisible(false);
    // You can perform further actions with the inputValue
  };




  return (
    <div className="frame h-[568px] relative w-[1087px] flex">
      <div className="overlap-group bg-white rounded-[22px] shadow-[0px 4px 11px #00000040] h-[509px] absolute top-[59px] left-0 w-full flex">
        <div className="left-part w-1/2">
          <img
            className="rectangle h-[405px] object-cover absolute top-[57px] left-[43px] w-[370px]"
            alt="Rectangle"
            src={selectedWorkout.image}
          />
        </div>
        <div className="right-part w-1/2 p-8">
          <div className="label">
            <p className="STEPS-get-down-on">
              <span className="text-xl font-bold block mb-4">STEPS:</span>
              <ol className="text-base pl-6 list-decimal">
                {selectedWorkout.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>
              <span className="text-base block mt-6">
                {selectedWorkout.caloriesEstimation} calories
              </span>
            </p>
          </div>
          <div className="button-wrapper flex justify-between mt-6">
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleOpening}>Subscribe</Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={openRecommend}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleRecommendClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  {selectedRandomItem && (
                      <div>
                        {selectedRandomItem.day}: {selectedRandomItem.value}
                      </div>
                    )}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleRecommendClose}>Agree</Button>
                </DialogActions>
              </Dialog>
            </div>
            <button className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md">
              COMPLETE
            </button>
          </div>
        </div>
      </div>
      <div className="text-wrapper-3 text-black font-bold text-xl absolute top-[-1px] left-[16px] w-[277px]">
        {selectedWorkout.workoutName}
      </div>
    </div>
  );
};

export default WorkoutFrame;
