import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold" style={{ color: "#FF6B6B" }}>
          <span style={{ color: "#FF6B6B" }}>F</span>
          <span style={{ color: "#FFD56B" }}>i</span>
          <span style={{ color: "#FF6B6B" }}>t</span>
          <span style={{ color: "#FFD56B" }}>P</span>
          <span style={{ color: "#FF6B6B" }}>r</span>
          <span style={{ color: "#FFD56B" }}>o</span>
          <span style={{ color: "#FF6B6B" }}>.</span>
        </h1>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>Home</li>
          <li>Company</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {navOpen && (
        <div className="bg-black md:hidden">
          <ul className="py-4 text-center">
            <li className="py-2 border-b border-gray-600">Home</li>
            <li className="py-2 border-b border-gray-600">Company</li>
            <li className="py-2 border-b border-gray-600">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
