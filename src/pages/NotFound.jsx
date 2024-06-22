import React from "react";
import shoe from "../assets/images/error-image.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full relative">
      <img
        className="w-full h-[100vh] md:h-[90vh] object-cover"
        src={shoe}
        alt="nike-shoe"
        loading="lazy"
      />
      <div className="absolute top-8 md:top-20 lg:top-48 left-5 md:left-10 lg:left-28">
        <h1 className="text-4xl md:text-6xl font-bold">Oops! 404</h1>
        <h2 className="text-base md:text-lg mt-3">Page Not Found</h2>
        <div className="w-11/12 md:w-7/12 mt-2">
          <p className="text-sm md:textbase">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link to="/">
            <button className="mt-5 bg-black text-white py-3 px-14 rounded-full hover:bg-black focus:outline-none">
             Go homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
