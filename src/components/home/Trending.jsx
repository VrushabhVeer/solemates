import React from "react";
import product1 from "../../assets/images/trending5.jpg";
import product2 from "../../assets/images/trending2.jpg";
import product3 from "../../assets/images/trending3.jpg";
import product4 from "../../assets/images/trending4.jpg";

const Trending = () => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
      <div>
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Trending Now
        </h2>
      </div>

      <div className="w-full gap-8 mt-8 flex flex-col md:flex-col lg:flex-row">
        <div className="w-full">
          <img
            src={product1}
            className="w-full h-[70vh] object-cover rounded-md"
            alt="trending_product1"
            loading="lazy"
          />
        </div>

        <div className="w-full">
          <img
            src={product3}
            className="w-full h-[70vh] object-cover rounded-md"
            alt="trending_product2"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          <img
            src={product4}
            className="w-full h-[70vh] object-cover rounded-md"
            alt="trending_product2"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          <img
            src={product2}
            className="w-full h-[70vh] object-cover rounded-md"
            alt="trending_product3"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
