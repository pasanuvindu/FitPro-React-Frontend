import React from "react";

const Workout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <p className="text-xl font-bold mb-4">
          Give up the fat, <br />
          watch your <br />
          belly go flat.
        </p>
        <p className="text-gray-600 mb-6">
          Welcome to our fitness training program designed to help you achieve
          your fitness goals and transform your body and mind.
        </p>
        <div className="flex items-center justify-between">
          <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold">
            Start Now
          </button>
          {/* <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              className="w-10 h-10"
              alt="Element f"
              src="https://generation-sessions.s3.amazonaws.com/c6a1a5757d52a1b97ea36d009193cf09/img/1000-f-243544991-qhx9kgbbi4wdabugrg172wqvaxebpjzg-transformed-1@2x.png"
            />
          </div> */}
          {/* </div>
        <div className="relative mt-8">
          <div className="absolute w-12 h-12 bg-blue-500 rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="w-6 h-6 mx-auto my-auto"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/c6a1a5757d52a1b97ea36d009193cf09/img/image-1@2x.png"
            />
          </div>
          <img
            className="w-full h-auto"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/c6a1a5757d52a1b97ea36d009193cf09/img/your-image.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Workout;
