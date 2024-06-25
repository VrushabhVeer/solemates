import React from "react";
import { BRAND_LOGOS } from "../../utils/constants";
import Image from "../common/Image";

const Brands = () => {
  return (
    <div className="mt-20 p-5 bg-black flex flex-wrap items-center justify-around gap-10">
      {BRAND_LOGOS.map((brand, index) => (
        <Image
          key={index}
          className="w-20 md:w-24 h-20 md:h-24 object-contain"
          src={brand.src}
          alt={brand.alt}
        />
      ))}
    </div>
  );
};

export default Brands;
