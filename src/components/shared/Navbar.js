import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  /**
   * @component Navigation Component for navigation...
   */
  return (
    <div className="flex justify-between px-32 py-2 mt-2 bg-transparent">
      <Link to="/">
        <img className="py-6" src="/assets/Wuri.svg" alt="logo" />
      </Link>
      <button className="border-2 rounded-full mx-6 px-6 my-4 text-white border-white hover:bg-white hover:text-black ">
        Writing <span className="font-extrabold">Assistance</span>
      </button>
    </div>
  );
};

export default Navbar;
