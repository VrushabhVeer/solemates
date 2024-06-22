import React from "react";
import heroImage from "../../assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-20 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-5 md:gap-20">
      <div className="w-full">
        <h1 className="text-4xl md:text-7xl font-bold">
          Stay Stylish With Our Sneakers.
        </h1>
        <p className="text-slate-600 mt-3">
          Discover the perfect pair for every occasion. From sleek sneakers to
          elegant heels, our curated selection of high-quality footwear will
          elevate your wardrobe and keep you stepping confidently. Shop now and
          experience comfort, style, and unmatched craftsmanship with every
          stride.
        </p>
        <button className="mt-8 bg-black text-white px-16 py-4 text-sm font-medium rounded-full">
          Shop Now
        </button>

        
      </div>
      <div className="w-full">
        <img src={heroImage} alt="hero_image" loading="eager" />
      </div>
    </div>
  );
};

export default Hero;
