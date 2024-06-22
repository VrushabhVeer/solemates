import React from "react";
import trending from "../assets/images/trending6.jpg";
import heart from "../assets/icons/heart.png"

const Wishlist = () => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Wishlist</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="relative">
            <img
              className="w-full h-[50vh] object-cover rounded-t-md"
              src={trending}
              alt="productImage"
              loading="lazy"
            />

            <div className="absolute top-5 left-5 bg-white p-2 rounded-full">
              <img className="w-5" src={heart} alt="heart" loading="lazy" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row gap-1 md:items-center justify-between">
              <h2 className="text-lg font-semibold">Nike Air Max</h2>
              <p className="text-slate-600">₹ 3900</p>
            </div>

            <p className="mt-3 text-slate-600"></p>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              className="w-full h-[50vh] object-cover rounded-t-md"
              src={trending}
              alt="productImage"
              loading="lazy"
            />

            <div className="absolute top-5 left-5 bg-white p-2 rounded-full">
              <img className="w-5" src={heart} alt="heart" loading="lazy" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row gap-1 md:items-center justify-between">
              <h2 className="text-lg font-semibold">Nike Air Max</h2>
              <p className="text-slate-600">₹ 3900</p>
            </div>

            <p className="mt-3 text-slate-600"></p>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              className="w-full h-[50vh] object-cover rounded-t-md"
              src={trending}
              alt="productImage"
              loading="lazy"
            />

            <div className="absolute top-5 left-5 bg-white p-2 rounded-full">
              <img className="w-5" src={heart} alt="heart" loading="lazy" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row gap-1 md:items-center justify-between">
              <h2 className="text-lg font-semibold">Nike Air Max</h2>
              <p className="text-slate-600">₹ 3900</p>
            </div>

            <p className="mt-3 text-slate-600"></p>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              className="w-full h-[50vh] object-cover rounded-t-md"
              src={trending}
              alt="productImage"
              loading="lazy"
            />

            <div className="absolute top-5 left-5 bg-white p-2 rounded-full">
              <img className="w-5" src={heart} alt="heart" loading="lazy" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row gap-1 md:items-center justify-between">
              <h2 className="text-lg font-semibold">Nike Air Max</h2>
              <p className="text-slate-600">₹ 3900</p>
            </div>

            <p className="mt-3 text-slate-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
