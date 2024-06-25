import React from "react";
import { TRENDING_PRODUCT } from "../../utils/constants";
import Image from "../common/Image";

const Trending = () => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
      <div>
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Trending Now
        </h2>
      </div>

      <div className="w-full gap-8 mt-8 flex flex-col md:flex-col lg:flex-row">
        {TRENDING_PRODUCT.map((product, index) => (
          <div key={index} className="w-full">
            <Image
              src={product.src}
              className="w-full h-[70vh] object-cover rounded-md"
              alt={product.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
