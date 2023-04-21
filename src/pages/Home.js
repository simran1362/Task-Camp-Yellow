import StarSky from "react-star-sky";
import HomePage from "../components/HomePage";
import Navbar from "../components/shared/Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="h-screen w-screen bg-black overflow-hidden" alt="mainScreen">
        <StarSky
          debugFps={true}
          frameRate={30}
          style={{ opacity: 0.9 }}
          className={"h-screen w-screen bg-transparent"}
          starColor={"white"}
          skyColor={"Black"}
        >
          <img
            src="/assets/bg-rectangle.png"
            alt="bg-rectangle"
            className="absolute z-[-10] ml-20 h-screen "
          />
          <Navbar />
          <HomePage />
        </StarSky>
      </div>
    </motion.div>
  );
}

export default Home;
