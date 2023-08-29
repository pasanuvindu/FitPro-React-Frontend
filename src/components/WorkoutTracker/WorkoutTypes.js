import React from "react";
import { Link } from "react-router-dom";

function WorkoutTypes(props) {
  return (
    <div>
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
        <div className="w-90 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex flex-col items-center">
          <div className="w-full h-80 rounded-xl overflow-hidden mb-2">
            <img
              className="w-full h-full object-cover"
              src={props.image}
              alt=""
            />
          </div>

          <div className="p-2 text-center">
            <h2 className="font-bold text-lg mb-2">{props.header}</h2>
            <p className="text-sm text-gray-600">
             {props.desc}
            </p>
          </div>
          <div className="m-3">
            <a
              role="button"
              href="#"
              className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              <Link
                to={props.link}
                className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                {props.button}
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTypes;
