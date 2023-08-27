import React from "react";
// import "./UploadImage.css";
import { useRef, useState } from "react";
import image from "../assets/image.png"
export const 

UploadImage = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleimagechange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div className="macbook-air">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame" onClick={handleImageClick}>
            <input
              type="file"
              ref={inputRef}
              onChange={handleimagechange}
              style={{ display: "none" }}
            ></input>
          </div>
          <div className="overlap">
            <div className="group" />
            <img
              className="arrow"
              alt="Arrow"
              src="https://generation-sessions.s3.amazonaws.com/bdca5c519a045e894af77c64cc781104/img/arrow-2@2x.png"
            />
          </div>
          <div className="div">Upload Image</div>
          <p className="instructions-to">
            Instructions to upload the image :<br />
            <br />
            Wear a tight sports wear.
            <br />
            <br />
            Stand straight in a white background for better results.
            <br />
            <br />
            Raise both hands laterally for side view image.
          </p>

          <div className="img-wrapper">
            {image ? (
              <img src={URL.createObjectURL(image)} alt=""></img>
            ) : (
              <img
                className="img"
                alt="File upload"
                src="https://generation-sessions.s3.amazonaws.com/bdca5c519a045e894af77c64cc781104/img/file-upload--transformed-1@2x.png"
              />
            )}
          </div>
        </div>
      </div>
    </div>
    // <>
    //     <div onClick={handleImageClick}>
    //         <img src = {image} alt=""/>
    //         <input type="file" ref={inputRef}/>
    //     </div>
    // </>
  );
};
