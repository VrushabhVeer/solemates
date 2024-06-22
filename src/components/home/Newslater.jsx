import React from "react";

const Newslater = () => {
  return (
    <div className="w-full bg-black text-white py-10 mt-20">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5 md:gap-20 lg:gap-48">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold text-white">
            Stay upto date about our latest offers
          </h2>
        </div>

        <div className="w-full">
          <div>
            <input
              className="w-full rounded-full px-6 py-3 bg-white text-black outline-none"
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <button className="w-full rounded-full px-4 py-3 bg-white text-black mt-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
