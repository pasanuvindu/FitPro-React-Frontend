//https://v1.tailwindcss.com/components/alerts
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SUCCESS, ERROR, INFO } from "../../constants/enums";

const Message = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // window.scrollTo({
    //     top: 0, behavior: 'smooth' // You can change this to "auto" for instant scrolling
    // });
    setTimeout(() => {
      dispatch({ type: "HIDE_MESSAGE" });
    }, 5000);
  }, [message]);

  const hidemessage = () => {
    dispatch({ type: "HIDE_MESSAGE" });
  };

  const Error = ({ message }) => {
    return (
      <div
        className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md fixed top-0 w-full text-center"
        role="alert"
      >
        <strong className="font-bold ">Error : </strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            onClick={hidemessage}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  };

  const Success = ({ message }) => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md fixed top-0 w-full text-center"
        role="alert"
      >
        <strong className="font-bold ">Success : </strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-teal-500"
            role="button"
            onClick={hidemessage}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  };

  const Info = ({ message }) => {
    return (
      <div
        className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md fixed top-0 w-full text-center"
        role="alert"
      >
        <strong className="font-bold ">Info : </strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-blue-500"
            role="button"
            onClick={hidemessage}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  };

  return (
    <div>
      {message?.messageType == "INFO" ? (
        <Info message={message.message} />
      ) : null}
      {message?.messageType == "SUCCESS" ? (
        <Success message={message.message} />
      ) : null}
      {message?.messageType == "ERROR" ? (
        <Error message={message.message} />
      ) : null}
    </div>
  );
};

export default Message;
