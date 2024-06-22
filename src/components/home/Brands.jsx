import React from "react";
import nike from "../../assets/images/nike-logo.png";
import puma from "../../assets/images/puma-logo.jpg";
import nb from "../../assets/images/new-balance-logo.png";
import adidas from "../../assets/images/adidas-logo.png";
import converse from "../../assets/images/converse-logo.png";
import reebok from "../../assets/images/reebok-logo.png";

const Brands = () => {
  return (
    <div className="mt-20 p-5 bg-black flex flex-wrap items-center justify-around gap-10">
      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={nike}
        alt="nike"
        loading="lazy"
      />

      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={adidas}
        alt="adidas"
        loading="lazy"
      />
      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={reebok}
        alt="reebok"
        loading="lazy"
      />

      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={puma}
        alt="puma"
        loading="lazy"
      />

      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={nb}
        alt="new balance"
        loading="lazy"
      />

      <img
        className="w-20 md:w-24 h-20 md:h-24 object-contain"
        src={converse}
        alt="converse"
        loading="lazy"
      />
    </div>
  );
};

export default Brands;
