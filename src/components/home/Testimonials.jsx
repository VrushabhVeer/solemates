import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-8 mt-20">
        What customers says
      </h2>
      <InfiniteScroll />
    </div>
  );
};

export default Testimonials;
