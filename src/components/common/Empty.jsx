import React from "react";
import empty from "../../assets/images/empty.png";
import Image from "./Image";
import { Link } from "react-router-dom";

const Empty = ({ type }) => {
  let imageSrc, title, description, buttonText;

  if (type === "cart") {
    imageSrc = empty;
    title = "Your Cart is empty!";
    description = "No product is added in your cart.";
    buttonText = "Shop Now"
  } else if (type === "wishlist") {
    imageSrc = empty;
    title = "Your Wishlist is empty!";
    description = "No product is added in your wishlist.";
    buttonText = "Add Now"
  }

  return (
    <div>
      <div className="w-8/12 md:w-4/12 mx-auto">
        <Image
          className="w-full"
          src={imageSrc}
          alt={`empty-${type}`}
          loading="lazy"
        />
      </div>
      <div className="w-8/12 md:w-4/12 mt-5 mx-auto">
        <h1 className="text-center font-semibold text-2xl">{title}</h1>
        <p className="text-center text-slate-600">{description}</p>
        <div className="flex justify-center">
          <Link to="/products">
            <button className="mt-5 bg-black text-white py-2 px-14 rounded-md hover:bg-black focus:outline-none">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Empty;
