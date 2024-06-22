import React, { useEffect } from "react";
import avatar from "../../assets/icons/avatar.png";

const InfiniteScroll = () => {
  const testimonials = [
    {
      id: 0,
      rating: "★ ★ ★ ★",
      avatar:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Alice Smith",
      description:
        "Amazing quality! These shoes are both stylish and comfortable. Perfect for any occasion.",
    },
    {
      id: 1,
      rating: "★ ★ ★ ★ ★",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Michael Johnson",
      description:
        "A perfect blend of elegance and comfort. I love wearing these shoes to work and for casual outings.",
    },
    {
      id: 2,
      rating: "★ ★ ★ ★ ★",
      avatar: "",
      userName: "Jessica Williams",
      description:
        "Stylish, durable, and super comfortable. I’ve received so many compliments!",
    },
    {
      id: 3,
      rating: "★ ★ ★ ★",
      avatar: "",
      userName: "David Brown",
      description:
        "Great value for money. These shoes are my go-to for any event.",
    },
    {
      id: 4,
      rating: "★ ★ ★ ★ ★",
      avatar:
        "https://images.unsplash.com/photo-1603988089669-c041ac2fe196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Emma Davis",
      description:
        "These shoes are simply wonderful. They fit perfectly and look great with everything.",
    },
    {
      id: 5,
      rating: "★ ★ ★ ★",
      avatar:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "James Miller",
      description:
        "Fantastic design and superb comfort. I can wear these shoes all day without any discomfort.",
    },
    {
      id: 6,
      rating: "★ ★ ★ ★ ★",
      avatar: "",
      userName: "Sophia Martinez",
      description:
        "I’m in love with these shoes! They are stylish, comfy, and well worth the price.",
    },
  ];

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
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-80 border rounded-md p-5 bg-white flex flex-col justify-between"
          >
            <h2 className="text-yellow-500">{item.rating}</h2>
            <p className="text-slate-600 text-sm">{item.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <img
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
