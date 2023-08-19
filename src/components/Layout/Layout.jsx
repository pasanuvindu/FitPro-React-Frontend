import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Message from "../Controls/Message";
import logo from "../assets/fitness-gym-logo.png";

const Layout = ({ children }) => {
  const message = useSelector((state) => state.message);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <>
      {message && <Message message={message.message} />}

      {isLoggedIn ? (
        <div>
          <Navbar />
          <div className="text-center">
            <img
              src={logo}
              alt="Fitness Gym Logo"
              className="mx-auto mt-4"
              width="50px"
              height="50px"
            />
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Layout;
