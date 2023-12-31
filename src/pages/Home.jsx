import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import CustomButton from "../components/CustomButton";

import "../index.css";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {state.page == "intro" && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>

              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Elevate your style game with TeeChroma for the Morocco World
                  Cup 2030! Personalize your jersey in 3D and let your
                  creativity run wild.
                  <br />
                  <strong>Because your passion deserves a unique look!</strong>
                </p>

                <CustomButton
                  type="filled"
                  title="Unleash Your Creativity"
                  handleClick={() => (state.page = "customizer")}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
