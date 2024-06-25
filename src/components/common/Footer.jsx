import React from "react";

import { PAYMENT_ICONS, SOCIAL_MEDIA_ICONS } from "../../utils/constants";
import Image from "./Image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10 md:py-16">
          <div>
            <h2 className="font-playwrite font-semibold text-xl">solemates</h2>
            <p className="text-sm md:text-base mt-2 text-slate-600">
              Trendsetting from the Toes Up steps into style
            </p>

            <div className="mt-5 gap-3 flex flex-row items-center">
              {SOCIAL_MEDIA_ICONS.map((icon, index) => (
                <Image key={index} className="w-5" src={icon.src} alt={icon.alt} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium">Company</h2>

            <div className="mt-1 text-slate-600 text-sm md:text-base">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
          </div>
          <div>
            <h2 className="font-medium">Help</h2>

            <div className="mt-1 text-slate-600 text-sm md:text-base">
              <p>Customer Support</p>
              <p>Delivery</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className="font-medium">FAQ</h2>

            <div className="mt-1 text-slate-600 text-sm md:text-base">
              <p>Account</p>
              <p>Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
          </div>
          <div>
            <h2 className="font-medium">Resourses</h2>

            <div className="mt-1 text-slate-600 text-sm md:text-base">
              <p>eBooks</p>
              <p>Tutorials</p>
              <p>Blogs</p>
              <p>Playlist</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-between border-t border-slate-300 py-5 text-sm text-slate-600">
          <div>
            <p>solemates ©{currentYear}, Made by vrushabh veer.</p>
          </div>
          <div className="flex items-center gap-3">
            {PAYMENT_ICONS.map((icon, index) => (
              <Image key={index} className="w-7" src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
