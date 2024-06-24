import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import loader from "../../assets/svgs/loader.json";

const Loader = () => {
  return (
    <div className="w-6/12 md:w-4/12 mx-auto mt-5">
      <Player
        autoplay
        loop
        src={loader}
      ></Player>
    </div>
  );
};

export default Loader;
