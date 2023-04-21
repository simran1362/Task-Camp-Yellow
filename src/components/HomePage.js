import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="ml-48 flex">
        <div className="w-[442px] text-white">
          <div className="text-[108px] tracking-wide uppercase leading-none mt-16 font-extrabold">
            Build The Future
          </div>
          <div className="uppercase text-base font-semibold ml-1 mt-2">
            Failure doesn’t mean the game is over, it simply means try again
            with a good experience.
          </div>
          <Link to="/create-project ">
            <button className="bg-white mt-8 text-black font-bold text-lg py-4 px-8 rounded-full">
              Develop Now!
            </button>
          </Link>
        </div> 
        <div className="flex justify-end items-center w-full h-full relative" >
          <img
            // className="w-[50rem] mt-4 h-[30rem] ml-20"
            style={{'@media (maxWidth: 1000px)': "{display: 'none',}" }}
            className=" absolute z-[-10] left-0 top-0"
            src="/assets/dragon.gif"
            alt="gif"
          />
          <img
            className=" absolute right-28 top-32"
            src="/assets/Ninja.png"
            alt="ninja"
          />
        </div>
        <img
          className="absolute z-[-11] top-4 w-full object-cover min-w-max"
          src="/assets/345558.webp"
          alt="galaxy"
        />
      </div>
    </div>
  );
};

export default HomePage;
