import React, { useEffect } from "react";
import avatar from "../../assets/icons/avatar.png";
import Image from "../common/Image";
import { TESTIMONIALS } from "../../utils/constants";

const InfiniteScroll = () => {

  useEffect(() => {
    const scroller = document.querySelector(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="scroller" data-speed="medium">
      <div className="scroller__inner flex gap-4">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="w-80 border rounded-md p-5 bg-white flex flex-col justify-between"
          >
            <h2 className="text-yellow-500">{item.rating}</h2>
            <p className="text-slate-600 text-sm">{item.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <Image
                className="w-8 h-8 object-cover rounded-full"
                src={item.avatar === "" ? avatar : item.avatar}
                alt={item.userName}
                loading="lazy"
              />
              <h2 className="font-medium">{item.userName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
