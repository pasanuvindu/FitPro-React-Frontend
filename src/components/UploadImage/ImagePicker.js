import { useState } from "react";
import "./ImagePicker.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate  } from "react-router-dom";

function ImagePicker() {
  const [image, setImage] = useState(null);
  const [fileName , setFileName] = useState("No selected file");
  const styles = {
    card: {
      width: "1100px",
      height: "640px",
      backgroundColor: "ash",
    },
  };

  

  const navigate = useNavigate();

  const handleSubmit = () => {
   // navigate(`/workoutOverview?fileName=${fileName}`);
    navigate("/workoutOverview", { state: { image, fileName } });

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
              Upload User Body Image
            </Typography>
            <Typography
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
              gutterBottom
            >
              Instructions to upload the image : Wear a tight sports wear. Stand
              straight in a white background for better results. Raise both
              hands laterally for side view image.
            </Typography>
          </CardContent>
          <main>
            <form
              onClick={() => document.querySelector(".input-field").click()}
            >
              <input
                type="file"
                accept="image/*"
                className="input-field"
                hidden
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                }}
              />

              {image ? (
                <img src={image} width={150} height={150} alt={fileName} />
              ) : (
                <>
                  <MdCloudUpload color="#1475cf" size={60} />
                  <p>Browse Files to upload</p>
                </>
              )}
            </form>

            <section className="uploaded-row">
              <AiFillFileImage color="#1475cf" />
              <span className="upload-content">
                {fileName} -
                <MdDelete
                  onClick={() => {
                    setFileName("No selected File");
                    setImage(null);
                  }}
                />
              </span>
            </section>
            <div className="text-center mt-6">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-pink-300 hover:from-pink-600 hover:to-pink-400 rounded-lg font-semibold"
              >
                Upload
              </button>
            </div>
          </main>
        </Card>
      </Box>
    </div>
  );
}

export default ImagePicker;
