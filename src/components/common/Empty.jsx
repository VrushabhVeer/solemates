import React from "react";
import emptyCart from "../../assets/images/empty-cart.png";
import Image from "./Image";

const Empty = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">Cart</h1>
      <div className="w-8/12 md:w-4/12 mx-auto">
        <Image
          className="w-full"
          src={emptyCart}
          alt="empty-cart"
          loading="lazy"
        />
      </div>
      <div className="w-8/12 md:w-4/12 mt-5 mx-auto">
        <h1 className="text-center font-semibold text-2xl">
          Your Cart is empty!
        </h1>
        <p className="text-center text-slate-600">
          No product is added in your cart.
        </p>
        <div className="flex justify-center">
          <button className="mt-5 bg-black text-white py-2 px-14 rounded-md hover:bg-black focus:outline-none">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empty;
