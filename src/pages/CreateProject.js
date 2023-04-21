import React from "react";
import Navbar from "../components/shared/Navbar";
import Form from "../components/Form";
import StarSky from "react-star-sky";
import { motion } from "framer-motion";
import ImportRepo from "../components/ImportRepo";

function CreateProject() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="bg-black w-screen h-screen overflow-hidden">
        <StarSky
          debugFps={true}
          frameRate={30}
          style={{ opacity: 0.9 }}
          className={"h-screen w-screen bg-transparent"}
          starColor={"white"}
          skyColor={[20, 20, 100]}
        >
          <img
            src="/assets/bg-rectangle.png"
            alt="bg-rectangle"
            className="absolute z-[-10] ml-20 h-screen "
          />
          <Navbar />
          <div className="ml-32 mt-10">
            <div className="text-white text-[50px]">
              Let's build something new.
            </div>
            <div className="text-base text-slate-400">
              Please follow the steps to configure your Project and deploy it.
            </div>
          </div>
          <div className="relative ml-32 mt-12 flex">
            <div className="border text-white border-gray-700 bg-black w-6/12 h-96 h-auto rounded-lg">
              <Form />
            </div>
            <ImportRepo />
          </div>
        </StarSky>
      </div>
    </motion.div>
  );
}

export default CreateProject;
